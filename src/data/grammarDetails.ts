import { GrammarPoint } from '../types/grammar';
import { n5Details } from './details/n5';
import { n4Details } from './details/n4';
import { n3Details } from './details/n3';
import { n2Details } from './details/n2';
import { n1Details } from './details/n1';

export const grammarDetails: Record<string, GrammarPoint> = {
    ...n5Details,
    ...n4Details,
    ...n3Details,
    ...n2Details,
    ...n1Details,
    // N1 示例文法 (待遷移至 n1.ts)
    'n1_sura': {
        id: 'n1_sura',
        pattern: 'すら',
        connection: '名詞 + （助詞） + すら',
        translation: '連...; 甚至...',
        level: 'N1',
        explanation: [
            {
                usageId: 1,
                title: '極端舉例',
                description: '舉出一個極端的例子（通常是理所當然或最基本的例子），來暗示其他事物更是如此。語氣較生硬，常用於書面語。相當於「さえ」。',
                examples: [
                    {
                        japanese: '忙{いそが}しくて、食事{しょくじ}をとる時間{じかん}すらありません。',
                        chinese: '忙到連吃飯的時間都沒有。'
                    },
                    {
                        japanese: '彼{かれ}は自分{じぶん}の名前{なまえ}すら書{か}けない。',
                        chinese: '他甚至連自己的名字都不會寫。'
                    },
                    {
                        japanese: '「この問題{もんだい}、難{むずか}しいね。」\n「そうだね。先生{せんせい}ですら解{と}けなかったらしいよ。」\n「えっ、そんなに難{むずか}しいの？」',
                        chinese: '「這問題好難啊。」\n「是啊。聽說連老師都解不開呢。」\n「咦，有那麼難嗎？」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        analysis: {
            title: '「すら」與「さえ」的比較',
            description: '兩者意思相近，但語感和使用場合不同。',
            points: [
                {
                    rule: '「すら」：較書面、文語調，語氣較強硬。',
                    examples: [{ japanese: '名前{なまえ}すら知{し}らない。', chinese: '連名字都不知道。' }]
                },
                {
                    rule: '「さえ」：較口語，使用範圍較廣。',
                    examples: [{ japanese: '名前{なまえ}さえ知{し}らない。', chinese: '連名字都不知道。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n1_quiz_sura_1',
                sentence: '足{あし}が痛{いた}くて、立{た}つこと（　）できない。',
                options: ['すら', 'こそ', 'ばかり', 'だけ'],
                correctIndex: 0,
                explanation: '舉出「站立」這個最基本的動作都做不到，暗示腳痛的程度嚴重。'
            },
            {
                id: 'n1_quiz_sura_2',
                sentence: '先生{せんせい}（　）その問題{もんだい}は解{と}けなかった。',
                options: ['すら', 'しか', 'こそ', 'ほど'],
                correctIndex: 0,
                explanation: '連老師（專家）都解不開，暗示其他人更不可能。'
            },
            {
                id: 'n1_quiz_sura_3',
                sentence: 'この病気{びょうき}は原因{げんいん}（　）わかっていない。',
                options: ['すら', 'さえ', 'まで', 'ほど'],
                correctIndex: 0,
                explanation: '連「原因」這個最基本的資訊都不知道。「すら」比「さえ」更強調極端性。'
            },
            {
                id: 'n1_quiz_sura_4',
                sentence: '「彼{かれ}、大丈夫{だいじょうぶ}かな？」\n「重傷{じゅうしょう}で、水{みず}（　）飲{の}めない状態{じょうたい}らしいよ。」',
                options: ['すら', 'こそ', 'だけ', 'しか'],
                correctIndex: 0,
                explanation: '對話情境。連「水」這種維持生命最基本的東西都喝不下。'
            },
            {
                id: 'n1_quiz_sura_5',
                sentence: '「この書類{しょるい}、読{よ}みましたか？」\n「忙{いそが}しくて、目{め}を通{とお}すこと（　）できていません。」',
                options: ['すら', 'こそ', 'まで', 'ばかり'],
                correctIndex: 0,
                explanation: '對話情境。連「過目」這種最基本的事都沒做到。'
            }
        ]
    }
};
