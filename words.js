let img = '/assets/images';

const words = [
    {
        word: 'house',
        transcription: '[haus]',
        translate: [
                {translate: 'дом', frequency: 75},
                {translate: 'жилище', frequency: 10},
                {translate: 'здание', frequency: 7},
                {translate: 'театр', frequency: 5},
                {translate: 'палата', frequency: 3}
        ],
        img: img + '/house.jpg',
        themes: [
            'house',
        ]

    },
    {
        word: 'apartment',
        transcription: '[ə’pɑːtmənt]',
        translate: [
            {translate: 'квартира', frequency: 45},
            {translate: 'апартамент', frequency: 45},
            {translate: 'комната', frequency: 5},
            {translate: 'помещение', frequency: 5}
        ],
        img: img + '/apartment.jpg',
        themes: [
            'house',
        ]
    },
    {
        word: 'room',
        transcription: '[ruːm]',
        translate: [
            {translate: 'комната', frequency: 35},
            {translate: 'номер', frequency: 35},
            {translate: 'помещение', frequency: 15},
            {translate: 'место', frequency: 10},
            {translate: 'пространство', frequency: 5}
        ],
        img: img + '/room.jpg',
        themes: [
            'house',
        ]
    },
    {
        word: 'bathroom',
        transcription: '[‘bɑːθruːm]',
        translate: [
            {translate: 'ванная комната', frequency: 90},
            {translate: 'туалет', frequency: 5},
            {translate: 'уборная', frequency: 5}
        ],
        img: img + '/bathroom.jpg',
        themes: [
            'house',
        ]
    },
    {
        word: 'balcony',
        transcription: '[‘bælkənɪ]',
        translate: [
            {translate: 'балкон', frequency: 95},
            {translate: 'лоджия', frequency: 5}
        ],
        img: img + '/balcony.jpg',
        themes: [
            'house',
        ]
    },
    {
        word: 'bedroom',
        transcription: '[‘bedruːm]',
        translate: [
            {translate: 'спальня', frequency: 90},
            {translate: 'комната', frequency: 5},
            {translate: 'кровать', frequency: 5}
        ],
        img: img + '/bedroom.jpg',
        themes: [
            'house',
        ]
    },
    {
        word: 'closet',
        transcription: '[‘klɔzɪt]',
        translate: [
            {translate: 'шкаф', frequency: 45},
            {translate: 'чулан', frequency: 40},
            {translate: 'уборная', frequency: 5},
            {translate: 'клозет', frequency: 5},
            {translate: 'небольшой кабинет', frequency: 5}
        ],
        img: img + '/closet.jpg',
        themes: [
            'house',
        ]
    },
    {
        word: 'dining room',
        transcription: '[‘daɪnɪŋˌrum]',
        translate: [
            {translate: 'столовая', frequency: 80},
            {translate: 'обеденная комната', frequency: 10},
            {translate: 'обеденный зал', frequency: 10}
        ],
        img: img + '/dining_room.jpg',
        themes: [
            'house',
        ]
    },
    {
        word: 'doorbell',
        transcription: '[‘dɔːbel]',
        translate: [
            {translate: 'дверной звонок', frequency: 50},
            {translate: 'домофон', frequency: 45},
            {translate: 'звонок', frequency: 5}
        ],
        img: img + '/doorbell.jpg',
        themes: [
            'house',
        ]
    },
    {
        word: 'upstairs',
        transcription: '[ʌp’steəz]',
        translate: [
            {translate: 'верхний этаж', frequency: 40},
            {translate: 'вверх по лестнице', frequency: 40},
            {translate: 'верхняя часть здания', frequency: 20}
        ],
        img: img + '/upstairs.jpg',
        themes: [
            'house',
        ]
    },
    {
        word: 'downstairs',
        transcription: '[‘daun’steəz]',
        translate: [
            {translate: 'нижний этаж', frequency: 40},
            {translate: 'вниз по лестнице', frequency: 40},
            {translate: 'нижняя часть здания', frequency: 20}
        ],
        img: img + '/downstairs.jpg',
        themes: [
            'house',
        ]
    },
    {
        word: 'roof',
        transcription: '[ruːf]',
        translate: [
            {translate: 'крыша', frequency: 65},
            {translate: 'кровля', frequency: 15},
            {translate: 'потолок', frequency: 10},
            {translate: 'кровельный материал', frequency: 5},
            {translate: 'максимальная цена', frequency: 5}
        ],
        img: img + '/roof.jpg',
        themes: [
            'house',
        ]
    },
    {
        word: 'window',
        transcription: '[‘wɪndəu]',
        translate: [
            {translate: 'окно', frequency: 70},
            {translate: 'форточка', frequency: 20},
            {translate: 'витрина', frequency: 5},
            {translate: 'иллюминатор', frequency: 5}
        ],
        img: img + '/window.jpg',
        themes: [
            'house',
        ]
    },
    {
        word: 'fruit',
        transcription: '[fruːt]',
        translate: [
            {translate: 'фрукты', frequency: 50},
            {translate: 'плоды', frequency: 45},
            {translate: 'результат', frequency: 5}
        ],
        img: img + '/fruit.jpg',
        themes: [
            'fruits',
        ]
    },
    {
        word: 'apricot',
        transcription: '[‘eɪprɪkɔt]',
        translate: [
            {translate: 'абрикос', frequency: 75},
            {translate: 'абрикосовый цвет', frequency: 20},
            {translate: 'абрикосовое дерево', frequency: 5}
        ],
        img: img + '/apricot.jpg',
        themes: [
            'fruits',
        ]
    },
    {
        word: 'pineapple',
        transcription: '[‘paɪnæpl]',
        translate: [
            {translate: 'ананас', frequency: 90},
            {translate: 'лимонка', frequency: 5},
            {translate: 'ручная граната', frequency: 5}
        ],
        img: img + '/pineapple.jpg',
        themes: [
            'fruits',
        ]
    },
    {
        word: 'banana',
        transcription: '[bə’nɑːnə]',
        translate: [
            {translate: 'банан', frequency: 100}
        ],
        img: img + '/banana.jpg',
        themes: [
            'fruits',
        ]
    },
    {
        word: 'bergamot',
        transcription: '[‘bɜːgəmɔt]',
        translate: [
            {translate: 'бергамот', frequency: 100}
        ],
        img: img + '/bergamot.jpg',
        themes: [
            'fruits',
        ]
    },
    {
        word: 'grape',
        transcription: '[greɪp]',
        translate: [
            {translate: 'виноград', frequency: 80},
            {translate: 'вино', frequency: 10},
            {translate: 'крупная картечь', frequency: 5},
            {translate: 'флер', frequency: 5}
        ],
        img: img + '/grape.jpg',
        themes: [
            'fruits',
        ]
    },
    {
        word: 'grapefruit',
        transcription: '[‘greɪpfruːt]',
        translate: [
            {translate: 'грейпфрут', frequency: 100}
        ],
        img: img + '/grapefruit.jpg',
        themes: [
            'fruits',
        ]
    },
    {
        word: 'pear',
        transcription: '[peə]',
        translate: [
            {translate: 'груша', frequency: 80},
            {translate: 'грушевое дерево', frequency: 20}
        ],
        img: img + '/pear.jpg',
        themes: [
            'fruits',
        ]
    },
    {
        word: 'melon',
        transcription: '[‘melən]',
        translate: [
            {translate: 'дыня', frequency: 60},
            {translate: 'арбуз', frequency: 45},
            {translate: 'тантьема', frequency: 5}
        ],
        img: img + '/melon.jpg',
        themes: [
            'fruits',
        ]
    },
    {
        word: 'lemon',
        transcription: '[‘lemən]',
        translate: [
            {translate: 'лимон', frequency: 80},
            {translate: 'лимонный цвет', frequency: 10},
            {translate: 'негодная вещь', frequency: 5},
            {translate: 'неприятный человек', frequency: 5}
        ],
        img: img + '/lemon.jpg',
        themes: [
            'fruits',
        ]
    },
    {
        word: 'mandarin',
        transcription: '[‘mænd(ə)rɪn]',
        translate: [
            {translate: 'мандарин', frequency: 80},
            {translate: 'оранжевый цвет', frequency: 15},
            {translate: 'косный руководитель', frequency: 5}
        ],
        img: img + '/mandarin.jpg',
        themes: [
            'fruits',
        ]
    },
    {
        word: 'peach',
        transcription: '[piːʧ]',
        translate: [
            {translate: 'персик', frequency: 70},
            {translate: 'персиковое дерево', frequency: 10},
            {translate: 'персиковый цвет', frequency: 10}
            {translate: 'первый сорт', frequency: 5},
            {translate: 'красотка', frequency: 5}
        ],
        img: img + '/peach.jpg',
        themes: [
            'fruits',
        ]
    },
    {
        word: 'plum',
        transcription: '[plʌm]',
        translate: [
            {translate: 'слива', frequency: 70},
            {translate: 'сливовое дерево', frequency: 10},
            {translate: 'выгодный заказ', frequency: 10}
            {translate: 'лакомый кусочек', frequency: 5},
            {translate: 'доходное место', frequency: 5}
        ],
        img: img + '/plum.jpg',
        themes: [
            'fruits',
        ]
    },
    {
        word: 'apple',
        transcription: '[‘æpl]',
        translate: [
            {translate: 'яблоко', frequency: 65},
            {translate: 'яблоня', frequency: 20},
            {translate: 'чепуха', frequency: 10},
            {translate: 'лесть', frequency: 5}
        ],
        img: img + '/apple.jpg',
        themes: [
            'fruits',
        ]
    },
    {
        word: 'lime',
        transcription: '[laɪm]',
        translate: [
            {translate: 'лайм', frequency: 50},
            {translate: 'известь', frequency: 40},
            {translate: 'липа', frequency: 5},
            {translate: 'лимон', frequency: 5}
        ],
        img: img + '/lime.jpg',
        themes: [
            'fruits',
        ]
    },
]

module.exports = words;