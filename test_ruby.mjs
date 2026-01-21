import Kuroshiro from 'kuroshiro';
import KuromojiAnalyzer from 'kuroshiro-analyzer-kuromoji';

async function test() {
    const kuroshiro = new Kuroshiro();
    try {
        await kuroshiro.init(new KuromojiAnalyzer({ dictPath: 'node_modules/kuromoji/dict' }));
        const result = await kuroshiro.convert("音楽を聞く", { to: "hiragana", mode: "furigana" });
        console.log(result);
    } catch (e) {
        console.error(e);
    }
}

test();
