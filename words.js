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
    {
        word: 'flower',
        transcription: '[ˈflaʊə]',
        translate: [
            {translate: 'цветок', frequency: 55},
            {translate: 'цвет', frequency: 35},
            {translate: 'цветение', frequency: 5},
            {translate: 'лучшая часть', frequency: 5}
        ],
        img: img + '/flower.jpg',
        themes: [
            'flowers',
        ]
    },
    {
        word: 'rose',
        transcription: '[rəʊz]',
        translate: [
            {translate: 'роза', frequency: 70},
            {translate: 'розовый цвет', frequency: 15},
            {translate: 'разбрызгиватель', frequency: 5},
            {translate: 'сетка', frequency: 5},
            {translate: 'румянец', frequency: 5}
        ],
        img: img + '/rose.jpg',
        themes: [
            'flowers',
        ]
    },
    {
        word: 'tulip',
        transcription: '[ˈtjuːlɪp]',
        translate: [
            {translate: 'тюльпан', frequency: 100}
        ],
        img: img + '/tulip.jpg',
        themes: [
            'flowers',
        ]
    },
    {
        word: 'carnation',
        transcription: '[kɑːˈneɪʃ(ə)n]',
        translate: [
            {translate: 'гвоздика', frequency: 75},
            {translate: 'разные оттенки красноватых тонов', frequency: 15},
            {translate: 'телесный цвет', frequency: 10}
        ],
        img: img + '/carnation.jpg',
        themes: [
            'flowers',
        ]
    },
    {
        word: 'gladiolus',
        transcription: '[ˈɡlædɪˈəʊləsɪz]',
        translate: [
            {translate: 'гладиолус', frequency: 75},
            {translate: 'шпажник', frequency: 15}
        ],
        img: img + '/gladiolus.jpg',
        themes: [
            'flowers',
        ]
    },
    {
        word: 'lily',
        transcription: '[ˈlɪlɪ]',
        translate: [
            {translate: 'лилия', frequency: 60},
            {translate: 'кувшинка', frequency: 25},
            {translate: 'ландыш', frequency: 15}
        ],
        img: img + '/lily.jpg',
        themes: [
            'flowers',
        ]
    },
    {
        word: 'orchid',
        transcription: '[ˈɔːkɪd]',
        translate: [
            {translate: 'орхидея', frequency: 75},
            {translate: 'светло-лиловый цвет', frequency: 25}
        ],
        img: img + '/orchid.jpg',
        themes: [
            'flowers',
        ]
    },
    {
        word: 'peony',
        transcription: '[ˈpiːənɪ]',
        translate: [
            {translate: 'пион', frequency: 100}
        ],
        img: img + '/peony.jpg',
        themes: [
            'flowers',
        ]
    },
    {
        word: 'daisy',
        transcription: '[ˈdeɪzɪ]',
        translate: [
            {translate: 'маргаритка', frequency: 80},
            {translate: 'нивяник обыкновенный', frequency: 10},
            {translate: 'поповник', frequency: 5},
            {translate: 'что-либо первоклассное', frequency: 5}
        ],
        img: img + '/daisy.jpg',
        themes: [
            'flowers',
        ]
    },
    {
        word: 'violet',
        transcription: '[ˈvaɪəlɪt]',
        translate: [
            {translate: 'фиалка', frequency: 45},
            {translate: 'фиолетовый', frequency: 45},
            {translate: 'лиловый', frequency: 10}
        ],
        img: img + '/violet.jpg',
        themes: [
            'flowers',
        ]
    },
    {
        word: 'lotus',
        transcription: '[ˈləʊtəs]',
        translate: [
            {translate: 'лотос', frequency: 100}
        ],
        img: img + '/lotus.jpg',
        themes: [
            'flowers',
        ]
    },
    {
        word: 'sunflower',
        transcription: '[ˈsʌnˌflaʊə]',
        translate: [
            {translate: 'подсолнух', frequency: 100}
        ],
        img: img + '/sunflower.jpg',
        themes: [
            'flowers',
        ]
    },
    {
        word: 'dahlia',
        transcription: '[ˈdeɪljə]',
        translate: [
            {translate: 'георгина', frequency: 100}
        ],
        img: img + '/dahlia.jpg',
        themes: [
            'flowers',
        ]
    },
    {
        word: 'dandelion',
        transcription: '[ˈdændɪlaɪən]',
        translate: [
            {translate: 'одуванчик', frequency: 100},
        ],
        img: img + '/dandelion.jpg',
        themes: [
            'flowers',
        ]
    },
    {
        word: 'lavender',
        transcription: '[ˈlævɪndə]',
        translate: [
            {translate: 'лаванда', frequency: 70},
            {translate: 'бледно-лиловый цвет', frequency: 15},
            {translate: 'высушенные листья лаванды', frequency: 15}
        ],
        img: img + '/lavender.jpg',
        themes: [
            'flowers',
        ]
    },
    {
        word: 'tool',
        transcription: '[tuːl]',
        translate: [
            {translate: 'инструмент', frequency: 50},
            {translate: 'орудие', frequency: 30},
            {translate: 'резец', frequency: 10},
            {translate: 'станок', frequency: 10}
        ],
        img: img + '/tool.jpg',
        themes: [
            'tools',
        ]
    },
    {
        word: 'hammer',
        transcription: '[‘hæmə]',
        translate: [
            {translate: 'молоток', frequency: 50},
            {translate: 'молот', frequency: 30},
            {translate: 'ударник', frequency: 10},
            {translate: 'молоток аукциониста', frequency: 10}
        ],
        img: img + '/hammer.jpg',
        themes: [
            'tools',
        ]
    },
    {
        word: 'handsaw',
        transcription: '[‘hæn(d)sɔː]',
        translate: [
            {translate: 'ручная пила', frequency: 50},
            {translate: 'ножовка', frequency: 50}
        ],
        img: img + '/handsaw.jpg',
        themes: [
            'tools',
        ]
    },
    {
        word: 'sandpaper',
        transcription: '[‘sæn(d)ˌpeɪpə]',
        translate: [
            {translate: 'наждачная бумага', frequency: 55},
            {translate: 'шкурка', frequency: 35},
            {translate: 'стеклянная бумага', frequency: 10}
        ],
        img: img + '/sandpaper.jpg',
        themes: [
            'tools',
        ]
    },
    {
        word: 'drill',
        transcription: '[drɪl]',
        translate: [
            {translate: 'дрель', frequency: 35},
            {translate: 'сверло', frequency: 30},
            {translate: 'бур', frequency: 20},
            {translate: 'тренировка', frequency: 10},
            {translate: 'муштра', frequency: 5}
        ],
        img: img + '/drill.jpg',
        themes: [
            'tools',
        ]
    },
    {
        word: 'vise',
        transcription: '[vaɪs]',
        translate: [
            {translate: 'тиски', frequency: 50},
            {translate: 'клещи', frequency: 35},
            {translate: 'виза', frequency: 10},
            {translate: 'зажимной патрон', frequency: 5}
        ],
        img: img + '/vise.jpg',
        themes: [
            'tools',
        ]
    },
    {
        word: 'screwdriver',
        transcription: '[‘skruːˌdraɪvə]',
        translate: [
            {translate: 'отвертка', frequency: 60},
            {translate: 'шуруповерт', frequency: 30},
            {translate: 'водка с апельсиновым соком и льдом', frequency: 10}
        ],
        img: img + '/screwdriver.jpg',
        themes: [
            'tools',
        ]
    },
    {
        word: 'awl',
        transcription: '[ɔːl]',
        translate: [
            {translate: 'шило', frequency: 100}
        ],
        img: img + '/awl.jpg',
        themes: [
            'tools',
        ]
    },
    {
        word: 'chisel',
        transcription: '[‘ʧɪz(ə)l]',
        translate: [
            {translate: 'зубило', frequency: 35},
            {translate: 'долото', frequency: 25},
            {translate: 'резец', frequency: 25},
            {translate: 'стамеска', frequency: 10},    
            {translate: 'чекан', frequency: 5}          
        ],
        img: img + '/chisel.jpg',
        themes: [
            'tools',
        ]
    },
    {
        word: 'wrench',
        transcription: '[ren(t)ʃ]',
        translate: [
            {translate: 'гаечный ключ', frequency: 70},
            {translate: 'щемящая тоска', frequency: 10},
            {translate: 'вывих', frequency: 10},
            {translate: 'искажение', frequency: 10}      
        ],
        img: img + '/wrench.jpg',
        themes: [
            'tools',
        ]
    },
    {
        word: 'pliers',
        transcription: '[‘plaɪəz]',
        translate: [
            {translate: 'плоскогубцы', frequency: 35},
            {translate: 'клещи', frequency: 30},
            {translate: 'щипцы', frequency: 25},
            {translate: 'цанги', frequency: 10}      
        ],
        img: img + '/pliers.jpg',
        themes: [
            'tools',
        ]
    },
    {
        word: 'axe',
        transcription: '[æks]',
        translate: [
            {translate: 'топор', frequency: 45},
            {translate: 'топор', frequency: 25},
            {translate: 'секира', frequency: 15},
            {translate: 'колун', frequency: 10},
            {translate: 'казнь', frequency: 5}     
        ],
        img: img + '/axe.jpg',
        themes: [
            'tools',
        ]
    },
]

module.exports = words;