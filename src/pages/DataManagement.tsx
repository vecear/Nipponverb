import React, { useState, useEffect } from 'react';
import { importedVerbs } from '../data/verbs_imported';
import { Verb } from '../data/verbs';

const DataManagement: React.FC = () => {
    const [status, setStatus] = useState<string>('Idle');
    const [progress, setProgress] = useState<number>(0);
    const [resultJson, setResultJson] = useState<string>('');
    const [kuroshiro, setKuroshiro] = useState<any>(null);

    useEffect(() => {
        const init = async () => {
            try {
                // Dynamic imports to avoid bundling issues
                // @ts-ignore
                const Kuroshiro = (await import('kuroshiro')).default;
                // @ts-ignore
                const KuromojiAnalyzer = (await import('kuroshiro-analyzer-kuromoji')).default;

                const k = new Kuroshiro();
                setStatus('Initializing Kuroshiro (loading dict)...');
                // Use CDN to avoid local file serving issues
                await k.init(new KuromojiAnalyzer({ dictPath: 'https://cdn.jsdelivr.net/npm/kuromoji@0.1.2/dict/' }));
                setKuroshiro(k);
                setStatus('Ready. Dictionary loaded.');
            } catch (err: any) {
                console.error(err);
                setStatus('Error initializing Kuroshiro: ' + err.message);
            }
        };
        init();
    }, []);

    const handleGenerateReadings = async () => {
        if (!kuroshiro) return;
        setStatus('Processing...');
        const newVerbs: Verb[] = [];
        const total = importedVerbs.length;

        // Process in chunks to avoid blocking UI too much
        for (let i = 0; i < total; i++) {
            const verb = importedVerbs[i];
            // Only generate if reading is same as dictionary (placeholder) OR it's missing
            // But importedVerbs has reading=dictionary provided by script.
            // So we check if verb.reading === verb.dictionary (and dictionary has kanji)
            // Or just force all.
            // Let's force all for now, assuming N5-N1 list needs readings.

            try {
                // Convert to Hiragana
                const reading = await kuroshiro.convert(verb.dictionary, { to: 'hiragana', mode: 'normal' });
                newVerbs.push({ ...verb, reading });
            } catch (e) {
                console.error("Failed to convert", verb.dictionary, e);
                newVerbs.push(verb); // keep original
            }

            if (i % 10 === 0) {
                setProgress(Math.round((i + 1) / total * 100));
                setStatus(`Processing ${i + 1}/${total}: ${verb.dictionary}`);
                // Yield to UI
                await new Promise(r => setTimeout(r, 0));
            }
        }

        setStatus('Done! Generating JSON...');

        const jsonOutput = `import { Verb } from './verbs';

export const importedVerbs: Verb[] = ${JSON.stringify(newVerbs, null, 4)};\n`;
        setResultJson(jsonOutput);
        setStatus('Complete. Copy the code below.');
    };

    return (
        <div className="p-8 text-white min-h-screen bg-midnight-charcoal">
            <h1 className="text-3xl font-bold mb-6 text-vermilion">Data Management</h1>

            <div className="bg-white/5 p-6 rounded-xl border border-white/10 mb-6">
                <h2 className="text-xl font-bold mb-4">Fix Imported Verbs</h2>
                <div className="mb-4 text-white/70">
                    Status: <span className="text-wave-light">{status}</span>
                </div>
                {progress > 0 && (
                    <div className="w-full bg-white/10 rounded-full h-2.5 mb-6">
                        <div className="bg-wave-light h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
                    </div>
                )}

                <button
                    onClick={handleGenerateReadings}
                    disabled={!kuroshiro || status.startsWith('Processing')}
                    className="px-6 py-2 bg-wave-light text-midnight-charcoal font-bold rounded hover:bg-cyan-400 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Generate Readings (Kuroshiro)
                </button>
            </div>

            {resultJson && (
                <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                    <h2 className="text-xl font-bold mb-4">Result (verbs_imported.ts)</h2>
                    <p className="text-sm text-white/50 mb-2">Copy this content and replace src/data/verbs_imported.ts</p>
                    <textarea
                        className="w-full h-96 bg-black/50 p-4 font-mono text-sm text-green-400 rounded border border-white/20"
                        readOnly
                        value={resultJson}
                    />
                </div>
            )}
        </div>
    );
};

export default DataManagement;
