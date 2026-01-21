
import Kuroshiro from 'kuroshiro';
import KuromojiAnalyzer from 'kuroshiro-analyzer-kuromoji';

const kuroshiro = new Kuroshiro();

(async () => {
    try {
        console.log('Initializing Kuroshiro...');
        await kuroshiro.init(new KuromojiAnalyzer({ dictPath: "./node_modules/kuromoji/dict" }));

        const testWord = '食べる';
        const reading = await kuroshiro.convert(testWord, { to: 'hiragana' });

        console.log(`Test Word: ${testWord}`);
        console.log(`Reading: ${reading}`);

        if (reading === 'たべる') {
            console.log('SUCCESS: Kuroshiro is working!');
        } else {
            console.log('WARNING: Unexpected reading.');
        }
    } catch (e) {
        console.error('Error:', e);
    }
})();
