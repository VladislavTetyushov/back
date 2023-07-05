let img = '/static/images';

const words = [
    {
        word: 'house',
        transcription: '[haus]',
        translation: [
            { translation: 'дом', frequency: 75 },
            { translation: 'жилище', frequency: 10 },
            { translation: 'здание', frequency: 7 },
            { translation: 'театр', frequency: 5 },
            { translation: 'палата', frequency: 3 }
        ],
        img: img + '/house.jpg',
        themes: [
            'house',
        ]

    },
    {
        word: 'apartment',
        transcription: '[ə’pɑːtmənt]',
        translation: [
            { translation: 'квартира', frequency: 45 },
            { translation: 'апартамент', frequency: 45 },
            { translation: 'комната', frequency: 5 },
            { translation: 'помещение', frequency: 5 }
        ],
        img: img + '/apartment.jpg',
        themes: [
            'house',
        ]
    },
    {
        word: 'room',
        transcription: '[ruːm]',
        translation: [
            { translation: 'комната', frequency: 35 },
            { translation: 'номер', frequency: 35 },
            { translation: 'помещение', frequency: 15 },
            { translation: 'место', frequency: 10 },
            { translation: 'пространство', frequency: 5 }
        ],
        img: img + '/room.jpg',
        themes: [
            'house',
        ]
    },
    {
        word: 'bathroom',
        transcription: '[‘bɑːθruːm]',
        translation: [
            { translation: 'ванная комната', frequency: 90 },
            { translation: 'туалет', frequency: 5 },
            { translation: 'уборная', frequency: 5 }
        ],
        img: img + '/bathroom.jpg',
        themes: [
            'house',
        ]
    },
    {
        word: 'balcony',
        transcription: '[‘bælkənɪ]',
        translation: [
            { translation: 'балкон', frequency: 95 },
            { translation: 'лоджия', frequency: 5 }
        ],
        img: img + '/balcony.jpg',
        themes: [
            'house',
        ]
    },
    {
        word: 'bedroom',
        transcription: '[‘bedruːm]',
        translation: [
            { translation: 'спальня', frequency: 90 },
            { translation: 'комната', frequency: 5 },
            { translation: 'кровать', frequency: 5 }
        ],
        img: img + '/bedroom.jpg',
        themes: [
            'house',
        ]
    },
    {
        word: 'closet',
        transcription: '[‘klɔzɪt]',
        translation: [
            { translation: 'шкаф', frequency: 45 },
            { translation: 'чулан', frequency: 40 },
            { translation: 'уборная', frequency: 5 },
            { translation: 'клозет', frequency: 5 },
            { translation: 'небольшой кабинет', frequency: 5 }
        ],
        img: img + '/closet.jpg',
        themes: [
            'house',
        ]
    },
    {
        word: 'dining room',
        transcription: '[‘daɪnɪŋˌrum]',
        translation: [
            { translation: 'столовая', frequency: 80 },
            { translation: 'обеденная комната', frequency: 10 },
            { translation: 'обеденный зал', frequency: 10 }
        ],
        img: img + '/dining_room.jpg',
        themes: [
            'house',
        ]
    },
    {
        word: 'doorbell',
        transcription: '[‘dɔːbel]',
        translation: [
            { translation: 'дверной звонок', frequency: 50 },
            { translation: 'домофон', frequency: 45 },
            { translation: 'звонок', frequency: 5 }
        ],
        img: img + '/doorbell.jpg',
        themes: [
            'house',
        ]
    },
    {
        word: 'upstairs',
        transcription: '[ʌp’steəz]',
        translation: [
            { translation: 'верхний этаж', frequency: 40 },
            { translation: 'вверх по лестнице', frequency: 40 },
            { translation: 'верхняя часть здания', frequency: 20 }
        ],
        img: img + '/upstairs.jpg',
        themes: [
            'house',
        ]
    },
    {
        word: 'downstairs',
        transcription: '[‘daun’steəz]',
        translation: [
            { translation: 'нижний этаж', frequency: 40 },
            { translation: 'вниз по лестнице', frequency: 40 },
            { translation: 'нижняя часть здания', frequency: 20 }
        ],
        img: img + '/downstairs.jpg',
        themes: [
            'house',
        ]
    },
    {
        word: 'roof',
        transcription: '[ruːf]',
        translation: [
            { translation: 'крыша', frequency: 65 },
            { translation: 'кровля', frequency: 15 },
            { translation: 'потолок', frequency: 10 },
            { translation: 'кровельный материал', frequency: 5 },
            { translation: 'максимальная цена', frequency: 5 }
        ],
        img: img + '/roof.jpg',
        themes: [
            'house',
        ]
    },
    {
        word: 'window',
        transcription: '[‘wɪndəu]',
        translation: [
            { translation: 'окно', frequency: 70 },
            { translation: 'форточка', frequency: 20 },
            { translation: 'витрина', frequency: 5 },
            { translation: 'иллюминатор', frequency: 5 }
        ],
        img: img + '/window.jpg',
        themes: [
            'house',
        ]
    },
    {
        word: 'fruit',
        transcription: '[fruːt]',
        translation: [
            { translation: 'фрукты', frequency: 50 },
            { translation: 'плоды', frequency: 45 },
            { translation: 'результат', frequency: 5 }
        ],
        img: img + '/fruit.jpg',
        themes: [
            'fruits',
        ]
    },
    {
        word: 'apricot',
        transcription: '[‘eɪprɪkɔt]',
        translation: [
            { translation: 'абрикос', frequency: 75 },
            { translation: 'абрикосовый цвет', frequency: 20 },
            { translation: 'абрикосовое дерево', frequency: 5 }
        ],
        img: img + '/apricot.jpg',
        themes: [
            'fruits',
        ]
    },
    {
        word: 'pineapple',
        transcription: '[‘paɪnæpl]',
        translation: [
            { translation: 'ананас', frequency: 90 },
            { translation: 'лимонка', frequency: 5 },
            { translation: 'ручная граната', frequency: 5 }
        ],
        img: img + '/pineapple.jpg',
        themes: [
            'fruits',
        ]
    },
    {
        word: 'banana',
        transcription: '[bə’nɑːnə]',
        translation: [
            { translation: 'банан', frequency: 100 }
        ],
        img: img + '/banana.jpg',
        themes: [
            'fruits',
        ]
    },
    {
        word: 'bergamot',
        transcription: '[‘bɜːgəmɔt]',
        translation: [
            { translation: 'бергамот', frequency: 100 }
        ],
        img: img + '/bergamot.jpg',
        themes: [
            'fruits',
        ]
    },
    {
        word: 'grape',
        transcription: '[greɪp]',
        translation: [
            { translation: 'виноград', frequency: 80 },
            { translation: 'вино', frequency: 10 },
            { translation: 'крупная картечь', frequency: 5 },
            { translation: 'флер', frequency: 5 }
        ],
        img: img + '/grape.jpg',
        themes: [
            'fruits',
        ]
    },
    {
        word: 'grapefruit',
        transcription: '[‘greɪpfruːt]',
        translation: [
            { translation: 'грейпфрут', frequency: 100 }
        ],
        img: img + '/grapefruit.jpg',
        themes: [
            'fruits',
        ]
    },
    {
        word: 'pear',
        transcription: '[peə]',
        translation: [
            { translation: 'груша', frequency: 80 },
            { translation: 'грушевое дерево', frequency: 20 }
        ],
        img: img + '/pear.jpg',
        themes: [
            'fruits',
        ]
    },
    {
        word: 'melon',
        transcription: '[‘melən]',
        translation: [
            { translation: 'дыня', frequency: 60 },
            { translation: 'арбуз', frequency: 45 },
            { translation: 'тантьема', frequency: 5 }
        ],
        img: img + '/melon.jpg',
        themes: [
            'fruits',
        ]
    },
    {
        word: 'lemon',
        transcription: '[‘lemən]',
        translation: [
            { translation: 'лимон', frequency: 80 },
            { translation: 'лимонный цвет', frequency: 10 },
            { translation: 'негодная вещь', frequency: 5 },
            { translation: 'неприятный человек', frequency: 5 }
        ],
        img: img + '/lemon.jpg',
        themes: [
            'fruits',
        ]
    },
    {
        word: 'mandarin',
        transcription: '[‘mænd(ə)rɪn]',
        translation: [
            { translation: 'мандарин', frequency: 80 },
            { translation: 'оранжевый цвет', frequency: 15 },
            { translation: 'косный руководитель', frequency: 5 }
        ],
        img: img + '/mandarin.jpg',
        themes: [
            'fruits',
        ]
    },
    {
        word: 'peach',
        transcription: '[piːʧ]',
        translation: [
            { translation: 'персик', frequency: 70 },
            { translation: 'персиковое дерево', frequency: 10 },
            { translation: 'персиковый цвет', frequency: 10 },
            { translation: 'первый сорт', frequency: 5 },
            { translation: 'красотка', frequency: 5 }
        ],
        img: img + '/peach.jpg',
        themes: [
            'fruits',
        ]
    },
    {
        word: 'plum',
        transcription: '[plʌm]',
        translation: [
            { translation: 'слива', frequency: 70 },
            { translation: 'сливовое дерево', frequency: 10 },
            { translation: 'выгодный заказ', frequency: 10 },
            { translation: 'лакомый кусочек', frequency: 5 },
            { translation: 'доходное место', frequency: 5 }
        ],
        img: img + '/plum.jpg',
        themes: [
            'fruits',
        ]
    },
    {
        word: 'apple',
        transcription: '[‘æpl]',
        translation: [
            { translation: 'яблоко', frequency: 65 },
            { translation: 'яблоня', frequency: 20 },
            { translation: 'чепуха', frequency: 10 },
            { translation: 'лесть', frequency: 5 }
        ],
        img: img + '/apple.jpg',
        themes: [
            'fruits',
        ]
    },
    {
        word: 'lime',
        transcription: '[laɪm]',
        translation: [
            { translation: 'лайм', frequency: 50 },
            { translation: 'известь', frequency: 40 },
            { translation: 'липа', frequency: 5 },
            { translation: 'лимон', frequency: 5 }
        ],
        img: img + '/lime.jpg',
        themes: [
            'fruits',
        ]
    },
    {
        word: 'flower',
        transcription: '[ˈflaʊə]',
        translation: [
            { translation: 'цветок', frequency: 55 },
            { translation: 'цвет', frequency: 35 },
            { translation: 'цветение', frequency: 5 },
            { translation: 'лучшая часть', frequency: 5 }
        ],
        img: img + '/flower.jpg',
        themes: [
            'flowers',
        ]
    },
    {
        word: 'rose',
        transcription: '[rəʊz]',
        translation: [
            { translation: 'роза', frequency: 70 },
            { translation: 'розовый цвет', frequency: 15 },
            { translation: 'разбрызгиватель', frequency: 5 },
            { translation: 'сетка', frequency: 5 },
            { translation: 'румянец', frequency: 5 }
        ],
        img: img + '/rose.jpg',
        themes: [
            'flowers',
        ]
    },
    {
        word: 'tulip',
        transcription: '[ˈtjuːlɪp]',
        translation: [
            { translation: 'тюльпан', frequency: 100 }
        ],
        img: img + '/tulip.jpg',
        themes: [
            'flowers',
        ]
    },
    {
        word: 'carnation',
        transcription: '[kɑːˈneɪʃ(ə)n]',
        translation: [
            { translation: 'гвоздика', frequency: 75 },
            { translation: 'разные оттенки красноватых тонов', frequency: 15 },
            { translation: 'телесный цвет', frequency: 10 }
        ],
        img: img + '/carnation.jpg',
        themes: [
            'flowers',
        ]
    },
    {
        word: 'gladiolus',
        transcription: '[ˈɡlædɪˈəʊləsɪz]',
        translation: [
            { translation: 'гладиолус', frequency: 75 },
            { translation: 'шпажник', frequency: 15 }
        ],
        img: img + '/gladiolus.jpg',
        themes: [
            'flowers',
        ]
    },
    {
        word: 'lily',
        transcription: '[ˈlɪlɪ]',
        translation: [
            { translation: 'лилия', frequency: 60 },
            { translation: 'кувшинка', frequency: 25 },
            { translation: 'ландыш', frequency: 15 }
        ],
        img: img + '/lily.jpg',
        themes: [
            'flowers',
        ]
    },
    {
        word: 'orchid',
        transcription: '[ˈɔːkɪd]',
        translation: [
            { translation: 'орхидея', frequency: 75 },
            { translation: 'светло-лиловый цвет', frequency: 25 }
        ],
        img: img + '/orchid.jpg',
        themes: [
            'flowers',
        ]
    },
    {
        word: 'peony',
        transcription: '[ˈpiːənɪ]',
        translation: [
            { translation: 'пион', frequency: 100 }
        ],
        img: img + '/peony.jpg',
        themes: [
            'flowers',
        ]
    },
    {
        word: 'daisy',
        transcription: '[ˈdeɪzɪ]',
        translation: [
            { translation: 'маргаритка', frequency: 80 },
            { translation: 'нивяник обыкновенный', frequency: 10 },
            { translation: 'поповник', frequency: 5 },
            { translation: 'что-либо первоклассное', frequency: 5 }
        ],
        img: img + '/daisy.jpg',
        themes: [
            'flowers',
        ]
    },
    {
        word: 'violet',
        transcription: '[ˈvaɪəlɪt]',
        translation: [
            { translation: 'фиалка', frequency: 45 },
            { translation: 'фиолетовый', frequency: 45 },
            { translation: 'лиловый', frequency: 10 }
        ],
        img: img + '/violet.jpg',
        themes: [
            'flowers',
        ]
    },
    {
        word: 'lotus',
        transcription: '[ˈləʊtəs]',
        translation: [
            { translation: 'лотос', frequency: 100 }
        ],
        img: img + '/lotus.jpg',
        themes: [
            'flowers',
        ]
    },
    {
        word: 'sunflower',
        transcription: '[ˈsʌnˌflaʊə]',
        translation: [
            { translation: 'подсолнух', frequency: 100 }
        ],
        img: img + '/sunflower.jpg',
        themes: [
            'flowers',
        ]
    },
    {
        word: 'dahlia',
        transcription: '[ˈdeɪljə]',
        translation: [
            { translation: 'георгина', frequency: 100 }
        ],
        img: img + '/dahlia.jpg',
        themes: [
            'flowers',
        ]
    },
    {
        word: 'dandelion',
        transcription: '[ˈdændɪlaɪən]',
        translation: [
            { translation: 'одуванчик', frequency: 100 },
        ],
        img: img + '/dandelion.jpg',
        themes: [
            'flowers',
        ]
    },
    {
        word: 'lavender',
        transcription: '[ˈlævɪndə]',
        translation: [
            { translation: 'лаванда', frequency: 70 },
            { translation: 'бледно-лиловый цвет', frequency: 15 },
            { translation: 'высушенные листья лаванды', frequency: 15 }
        ],
        img: img + '/lavender.jpg',
        themes: [
            'flowers',
        ]
    },
    {
        word: 'tool',
        transcription: '[tuːl]',
        translation: [
            { translation: 'инструмент', frequency: 50 },
            { translation: 'орудие', frequency: 30 },
            { translation: 'резец', frequency: 10 },
            { translation: 'станок', frequency: 10 }
        ],
        img: img + '/tool.jpg',
        themes: [
            'tools',
        ]
    },
    {
        word: 'hammer',
        transcription: '[‘hæmə]',
        translation: [
            { translation: 'молоток', frequency: 50 },
            { translation: 'молот', frequency: 30 },
            { translation: 'ударник', frequency: 10 },
            { translation: 'молоток аукциониста', frequency: 10 }
        ],
        img: img + '/hammer.jpg',
        themes: [
            'tools',
        ]
    },
    {
        word: 'handsaw',
        transcription: '[‘hæn(d)sɔː]',
        translation: [
            { translation: 'ручная пила', frequency: 50 },
            { translation: 'ножовка', frequency: 50 }
        ],
        img: img + '/handsaw.jpg',
        themes: [
            'tools',
        ]
    },
    {
        word: 'sandpaper',
        transcription: '[‘sæn(d)ˌpeɪpə]',
        translation: [
            { translation: 'наждачная бумага', frequency: 55 },
            { translation: 'шкурка', frequency: 35 },
            { translation: 'стеклянная бумага', frequency: 10 }
        ],
        img: img + '/sandpaper.jpg',
        themes: [
            'tools',
        ]
    },
    {
        word: 'drill',
        transcription: '[drɪl]',
        translation: [
            { translation: 'дрель', frequency: 35 },
            { translation: 'сверло', frequency: 30 },
            { translation: 'бур', frequency: 20 },
            { translation: 'тренировка', frequency: 10 },
            { translation: 'муштра', frequency: 5 }
        ],
        img: img + '/drill.jpg',
        themes: [
            'tools',
        ]
    },
    {
        word: 'vise',
        transcription: '[vaɪs]',
        translation: [
            { translation: 'тиски', frequency: 50 },
            { translation: 'клещи', frequency: 35 },
            { translation: 'виза', frequency: 10 },
            { translation: 'зажимной патрон', frequency: 5 }
        ],
        img: img + '/vise.jpg',
        themes: [
            'tools',
        ]
    },
    {
        word: 'screwdriver',
        transcription: '[‘skruːˌdraɪvə]',
        translation: [
            { translation: 'отвертка', frequency: 60 },
            { translation: 'шуруповерт', frequency: 30 },
            { translation: 'водка с апельсиновым соком и льдом', frequency: 10 }
        ],
        img: img + '/screwdriver.jpg',
        themes: [
            'tools',
        ]
    },
    {
        word: 'awl',
        transcription: '[ɔːl]',
        translation: [
            { translation: 'шило', frequency: 100 }
        ],
        img: img + '/awl.jpg',
        themes: [
            'tools',
        ]
    },
    {
        word: 'chisel',
        transcription: '[‘ʧɪz(ə)l]',
        translation: [
            { translation: 'зубило', frequency: 35 },
            { translation: 'долото', frequency: 25 },
            { translation: 'резец', frequency: 25 },
            { translation: 'стамеска', frequency: 10 },
            { translation: 'чекан', frequency: 5 }
        ],
        img: img + '/chisel.jpg',
        themes: [
            'tools',
        ]
    },
    {
        word: 'wrench',
        transcription: '[ren(t)ʃ]',
        translation: [
            { translation: 'гаечный ключ', frequency: 70 },
            { translation: 'щемящая тоска', frequency: 10 },
            { translation: 'вывих', frequency: 10 },
            { translation: 'искажение', frequency: 10 }
        ],
        img: img + '/wrench.jpg',
        themes: [
            'tools',
        ]
    },
    {
        word: 'pliers',
        transcription: '[‘plaɪəz]',
        translation: [
            { translation: 'плоскогубцы', frequency: 35 },
            { translation: 'клещи', frequency: 30 },
            { translation: 'щипцы', frequency: 25 },
            { translation: 'цанги', frequency: 10 }
        ],
        img: img + '/pliers.jpg',
        themes: [
            'tools',
        ]
    },
    {
        word: 'axe',
        transcription: '[æks]',
        translation: [
            { translation: 'топор', frequency: 45 },
            { translation: 'топор', frequency: 25 },
            { translation: 'секира', frequency: 15 },
            { translation: 'колун', frequency: 10 },
            { translation: 'казнь', frequency: 5 }
        ],
        img: img + '/axe.jpg',
        themes: [
            'tools',
        ]
    },
    {
        word: 'food',
        transcription: '[fuːd]',
        translation: [
            { translation: 'еда', frequency: 35 },
            { translation: 'питание', frequency: 35 },
            { translation: 'пища', frequency: 15 },
            { translation: 'продовольствие', frequency: 10 },
            { translation: 'корм', frequency: 5 }
        ],
        img: img + '/food.jpg',
        themes: [
            'food',
        ]
    },
    {
        word: 'ham',
        transcription: '[hæm]',
        translation: [
            { translation: 'ветчина', frequency: 35 },
            { translation: 'окорок', frequency: 30 },
            { translation: 'радиолюбитель', frequency: 20 },
            { translation: 'бедро', frequency: 10 },
            { translation: 'ляжка', frequency: 5 }
        ],
        img: img + '/ham.jpg',
        themes: [
            'food',
        ]
    },
    {
        word: 'sausage',
        transcription: '[‘sɔsɪʤ]',
        translation: [
            { translation: 'колбаса', frequency: 40 },
            { translation: 'сосиска', frequency: 40 },
            { translation: 'сарделька', frequency: 20 }
        ],
        img: img + '/sausage.jpg',
        themes: [
            'food',
        ]
    },
    {
        word: 'egg',
        transcription: '[eg]',
        translation: [
            { translation: 'яйцо', frequency: 60 },
            { translation: 'яйцеклетка', frequency: 30 },
            { translation: 'зародыш', frequency: 10 }
        ],
        img: img + '/egg.jpg',
        themes: [
            'food',
        ]
    },
    {
        word: 'pizza',
        transcription: '[‘piːtsə]',
        translation: [
            { translation: 'пицца', frequency: 100 },
        ],
        img: img + '/pizza.jpg',
        themes: [
            'food',
        ]
    },
    {
        word: 'soup',
        transcription: '[suːp]',
        translation: [
            { translation: 'суп', frequency: 60 },
            { translation: 'похлебка', frequency: 35 },
            { translation: 'густой туман', frequency: 5 }
        ],
        img: img + '/soup.jpg',
        themes: [
            'food',
        ]
    },
    {
        word: 'bread',
        transcription: '[bred]',
        translation: [
            { translation: 'хлеб', frequency: 80 },
            { translation: 'пища', frequency: 10 },
            { translation: 'деньги', frequency: 5 },
            { translation: 'средства к существованию', frequency: 5 }
        ],
        img: img + '/bread.jpg',
        themes: [
            'food',
        ]
    },
    {
        word: 'milk',
        transcription: '[mɪlk]',
        translation: [
            { translation: 'молоко', frequency: 80 },
            { translation: 'латекс', frequency: 20 }
        ],
        img: img + '/milk.jpg',
        themes: [
            'food',
        ]
    },
    {
        word: 'porridge',
        transcription: '[‘pɔrɪʤ]',
        translation: [
            { translation: 'каша', frequency: 60 },
            { translation: 'овсяная каша', frequency: 30 },
            { translation: 'тюремное заключение', frequency: 10 }
        ],
        img: img + '/porridge.jpg',
        themes: [
            'food',
        ]
    },
    {
        word: 'cookie',
        transcription: '[‘kukɪ]',
        translation: [
            { translation: 'печенье', frequency: 80 },
            { translation: 'булочка', frequency: 20 }
        ],
        img: img + '/cookie.jpg',
        themes: [
            'food',
        ]
    },
    {
        word: 'cocktail',
        transcription: '[‘kɔkteɪl]',
        translation: [
            { translation: 'коктейль', frequency: 80 },
            { translation: 'лошадь с подрезанным хвостом', frequency: 10 },
            { translation: 'выскочка', frequency: 10 }
        ],
        img: img + '/cocktail.jpg',
        themes: [
            'food',
        ]
    },
    {
        word: 'pie',
        transcription: '[paɪ]',
        translation: [
            { translation: 'пирог', frequency: 40 },
            { translation: 'торт', frequency: 30 },
            { translation: 'пирожок', frequency: 30 }
        ],
        img: img + '/pie.jpg',
        themes: [
            'food',
        ]
    },
]

module.exports = words;