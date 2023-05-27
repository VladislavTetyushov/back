let img = '/assets/images';

const words = [
    {
        word: 'house',
        transcription: '[haus]',
        translate: [
                {translate: 'дом', frequency: "75%"},
                {translate: 'жилище', frequency: "10%"},
                {translate: 'здание', frequency: "7%"},
                {translate: 'театр', frequency: "5%"},
                {translate: 'палата', frequency: "3%"}
        ],
        img: img + '/house.jpg',
        themes: [
            'house',
            'art',
        ]

    },
    {
        word: 'apartment',
        transcription: '[ə’pɑːtmənt]',
        translate: [
            {translate: 'квартира', frequency: "45%"},
            {translate: 'апартамент', frequency: "45%"},
            {translate: 'комната', frequency: "5%"},
            {translate: 'помещение', frequency: "5%"}
        ],
        img: img + '/apartment.jpg',
        themes: [
            'house',
            'art'
        ]
    },
    {
        word: 'room',
        transcription: '[ruːm]',
        translate: [
            {translate: 'комната', frequency: "35%"},
            {translate: 'номер', frequency: "35%"},
            {translate: 'помещение', frequency: "15%"},
            {translate: 'место', frequency: "10%"},
            {translate: 'пространство', frequency: "5%"}
        ],
        img: img + '/room.jpg',
        themes: [
            'house',
            'elementary'
        ]
    },
    {
        word: 'bathroom',
        transcription: '[‘bɑːθruːm]',
        translate: [
            {translate: 'ванная комната', frequency: "90%"},
            {translate: 'туалет', frequency: "5%"},
            {translate: 'уборная', frequency: "5%"}
        ],
        img: img + '/bathroom.jpg',
        themes: [
            'house',
            'elementary'
        ]
    },
    {
        word: 'balcony',
        transcription: '[‘bælkənɪ]',
        translate: [
            {translate: 'балкон', frequency: "95%"},
            {translate: 'лоджия', frequency: "5%"}
        ],
        img: img + '/balcony.jpg',
        themes: [
            'house',
            'elementary'
        ]
    },
    {
        word: 'bedroom',
        transcription: '[‘bedruːm]',
        translate: [
            {translate: 'спальня', frequency: "90%"},
            {translate: 'комната', frequency: "5%"},
            {translate: 'кровать', frequency: "5%"}
        ],
        img: img + '/bedroom.jpg',
        themes: [
            'house',
            'elementary'
        ]
    },
    {
        word: 'closet',
        transcription: '[‘klɔzɪt]',
        translate: [
            {translate: 'шкаф', frequency: "45%"},
            {translate: 'чулан', frequency: "40%"},
            {translate: 'уборная', frequency: "5%"},
            {translate: 'клозет', frequency: "5%"},
            {translate: 'небольшой кабинет', frequency: "5%"}
        ],
        img: img + '/closet.jpg',
        themes: [
            'house',
            'elementary'
        ]
    },
    {
        word: 'dining room',
        transcription: '[‘daɪnɪŋˌrum]',
        translate: [
            {translate: 'столовая', frequency: "80%"},
            {translate: 'обеденная комната', frequency: "10%"},
            {translate: 'обеденный зал', frequency: "10%"}
        ],
        img: img + '/dining_room.jpg',
        themes: [
            'house',
            'elementary'
        ]
    },
    {
        word: 'doorbell',
        transcription: '[‘dɔːbel]',
        translate: [
            {translate: 'дверной звонок', frequency: "50%"},
            {translate: 'домофон', frequency: "45%"},
            {translate: 'звонок', frequency: "5%"}
        ],
        img: img + '/doorbell.jpg',
        themes: [
            'house',
            'elementary'
        ]
    },
    {
        word: 'upstairs',
        transcription: '[ʌp’steəz]',
        translate: [
            {translate: 'верхний этаж', frequency: "40%"},
            {translate: 'вверх по лестнице', frequency: "40%"},
            {translate: 'верхняя часть здания', frequency: "20%"}
        ],
        img: img + '/upstairs.jpg',
        themes: [
            'house',
            'elementary'
        ]
    },
    {
        word: 'downstairs',
        transcription: '[‘daun’steəz]',
        translate: [
            {translate: 'нижний этаж', frequency: "40%"},
            {translate: 'вниз по лестнице', frequency: "40%"},
            {translate: 'нижняя часть здания', frequency: "20%"}
        ],
        img: img + '/downstairs.jpg',
        themes: [
            'house',
            'elementary'
        ]
    },
    {
        word: 'roof',
        transcription: '[ruːf]',
        translate: [
            {translate: 'крыша', frequency: "65%"},
            {translate: 'кровля', frequency: "15%"},
            {translate: 'потолок', frequency: "10%"},
            {translate: 'кровельный материал', frequency: "5%"},
            {translate: 'максимальная цена', frequency: "5%"}
        ],
        img: img + '/roof.jpg',
        themes: [
            'house',
            'elementary'
        ]
    },
    {
        word: 'window',
        transcription: '[‘wɪndəu]',
        translate: [
            {translate: 'окно', frequency: "70%"},
            {translate: 'форточка', frequency: "20%"},
            {translate: 'витрина', frequency: "5%"},
            {translate: 'иллюминатор', frequency: "5%"}
        ],
        img: img + '/window.jpg',
        themes: [
            'house',
            'elementary'
        ]
    }
]

module.exports = words;