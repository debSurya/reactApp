export default class Constants {
    static questionSets: any[] = [
        {
            sentences: [
                'Jen lost her mittens at King School.',
                'Kids sing all day at Camp Quest.',
                'We saw bass in Bells Pond.',
                'Mel will make props for the play.'
            ],
            correctMarkers: [
                {
                    'type': 'word-highlight',
                    'idx': [[0, 5, 6], [5, 6], [4, 5], [0]]
                },
                {
                    'type': 'word-underline',
                    'idx': [[3], [0, 3], [2], [3, 6]]
                },
                {
                    'type': 'letter-highlight',
                    'idx': [[{
                        wordIdx: 0,
                        charIdx: 2
                    },
                    {
                        wordIdx: 2,
                        charIdx: 1
                    }]]
                },
                {
                    'type': 'letter-divide',
                    'idx': [[]]
                }
            ]
        },
        {
            sentences: [
                'w q qwd ,mas dmas dam sd.,masd',
                ' nfwenlkmwelmd klkdm qlmkwdlqmkw dlq ',
                ' wmnf em lmqwdq;lw kdm;lqmkwd l'
            ],
            correctMarkers: [
                {
                    'type': 'word-highlight',
                    'idx': [[1, 3], [2, 3], [4]]
                },
                {
                    'type': 'word-underline',
                    'idx': [[3], [0, 3], [2]]
                },
                {
                    'type': 'letter-highlight',
                    'idx': [[{
                        wordIdx: 0,
                        charIdx: 2
                    },
                    {
                        wordIdx: 2,
                        charIdx: 1
                    }]]
                },
                {
                    'type': 'letter-divide',
                    'idx': [[]]
                }
            ]
        },
        {
            sentences: [
                'qlw d;ql mdkqw;qwm;lqmc ;kq ;lqwkmkqn c;wm ;lqmc ;lqmc ;kqjn ',
                ',qmw dmebjwbvljww nxoi ij cpiwh eujq iwd;qlwdqwnd',
                '.ldkqwndk qdmoqiw foqwd oqwnfiwjrgo rtk oeirg eibflir oiwe fwoe f'
            ]
        }
    ];
}