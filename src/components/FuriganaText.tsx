import React from 'react';

interface FuriganaTextProps {
    text: string;
    className?: string;
}

/**
 * Renders text with Furigana using the syntax: 漢字{かんじ}
 */
const FuriganaText: React.FC<FuriganaTextProps> = ({ text, className = "" }) => {
    if (!text) return null;

    // Check for raw HTML ruby tags (legacy support)
    // If it contains ruby tags, we trust it receives full HTML and render it directly
    if (text.includes('<ruby>')) {
        return (
            <span
                className={className}
                dangerouslySetInnerHTML={{ __html: text }}
            />
        );
    }

    // Helper to parse just the furigana parts
    const parseFurigana = (str: string) => {
        // Regex to match: Kanji{Furigana}
        const regex = /([\u4e00-\u9fff\u3400-\u4dbf\u3005\u3007\u30f5\u30f6]+)\{([^{}]+)\}/g;
        const parts = [];
        let lastIndex = 0;
        let match;

        while ((match = regex.exec(str)) !== null) {
            // Add text before the match
            if (match.index > lastIndex) {
                parts.push(str.substring(lastIndex, match.index));
            }

            // Add the ruby element
            parts.push(
                <ruby key={match.index}>
                    {match[1]}
                    <rt className="text-[0.6em] text-vermilion/80 select-none">{match[2]}</rt>
                </ruby>
            );

            lastIndex = regex.lastIndex;
        }

        // Add remaining text
        if (lastIndex < str.length) {
            parts.push(str.substring(lastIndex));
        }

        return parts.length > 0 ? parts : [str];
    };

    // Split by <u> tags to support underlining
    // Using a simpler regex that strictly matches <u>...</u> which aligns with our data generation
    const uTagRegex = /(<u>.*?<\/u>)/;
    const segments = text.split(uTagRegex);

    return (
        <span className={className}>
            {segments.map((segment, index) => {
                // Check if the segment starts/ends with u tags
                if (segment.startsWith('<u>') && segment.endsWith('</u>')) {
                    // Extract content inside <u> tags
                    const content = segment.slice(3, -4);

                    return (
                        <u key={index} className="text-vermilion decoration-vermilion decoration-2 underline-offset-4 decoration-wavy sm:decoration-solid">
                            {/* Recursively handle furigana inside u tags */}
                            {parseFurigana(content)}
                        </u>
                    );
                } else {
                    return <React.Fragment key={index}>{parseFurigana(segment)}</React.Fragment>;
                }
            })}
        </span>
    );
};

export default FuriganaText;
