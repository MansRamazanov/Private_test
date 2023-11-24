const clientList = [
    {
      "o_id": 1568,
      "client_name": "Мария Кашкарева",
      "diets": [
        "1400 ккал",
        "1400 ккал",
        "1600 ккал"
      ],
      "tariff": [
        "Базовый",
        "Базовый",
        "Пробный СПБ"
      ],
      "address": "Москва ленина 123 подъезд 3, этаж 5, кв. 43",
      "phone": "+7 908 511-51-51",
      "dates": [
        {
          "start_date": "2023-11-19",
          "end_date": "2023-11-25"
        },
        {
          "start_date": "2023-11-19",
          "end_date": "2023-11-25"
        },
        {
          "start_date": "2023-11-19",
          "end_date": "2023-11-25"
        }
      ],
      "discount": 100,
      "order_sum": 0,
      "order_payed": "0.00",
      "pay_status": "Оплачен",
      "courier_comment": "",
      "inner_comment": ""
    },
    {
      "o_id": 1567,
      "client_name": "Мария Кашкарева",
      "diets": [
        "750 ккал",
        "1400 ккал"
      ],
      "tariff": [
        "Базовый",
        "Базовый"
      ],
      "address": "Москва ленина 123 подъезд 3, этаж 5, кв. 43",
      "phone": "+7 908 511-51-51",
      "dates": [
        {
          "start_date": "2023-11-19",
          "end_date": "2023-11-25"
        },
        {
          "start_date": "2023-11-19",
          "end_date": "2023-11-25"
        }
      ],
      "discount": 100,
      "order_sum": 0,
      "order_payed": "0.00",
      "pay_status": "Оплачен",
      "courier_comment": "",
      "inner_comment": ""
    },
    {
      "o_id": 1566,
      "client_name": "Комаров Владимир",
      "diets": [
        "Премиум 2400"
      ],
      "tariff": [
        "Базовый"
      ],
      "address": "Москва ленина 123 подъезд 3, этаж 5, кв. 43",
      "phone": "+7 908 511-51-51",
      "dates": [
        {
          "start_date": "2023-11-17",
          "end_date": "2023-12-07"
        }
      ],
      "discount": 21,
      "order_sum": 33035.1,
      "order_payed": "0.00",
      "pay_status": "Неоплачен ч.",
      "courier_comment": "",
      "inner_comment": "уточнить везти или нет в субботу 18.11"
    },
    {
      "o_id": 1565,
      "client_name": "Мурашова Дарья",
      "diets": [
        "750 ккал"
      ],
      "tariff": [
        "Подписка антикризисное меню 20 дней"
      ],
      "address": "Москва ленина 123 подъезд 3, этаж 5, кв. 43",
      "phone": "+7 908 511-51-51",
      "dates": [
        {
          "start_date": "2024-01-10",
          "end_date": "2024-01-10"
        }
      ],
      "discount": 0,
      "order_sum": 18186,
      "order_payed": "0.00",
      "pay_status": "Неоплачен ч.",
      "courier_comment": "домофон 36, этаж 2",
      "inner_comment": "10.01 УТОЧНИТЬ!!!!!!!!!!!!!!!"
    },
    {
      "o_id": 1564,
      "client_name": "Гриценко Татьяна",
      "diets": [
        "Премиум 1200"
      ],
      "tariff": [
        "Подписка 7 дней"
      ],
      "address": "Москва ленина 123 подъезд 3, этаж 5, кв. 43",
      "phone": "+7 908 511-51-51",
      "dates": [
        {
          "start_date": "2023-11-20",
          "end_date": "2023-11-23"
        }
      ],
      "discount": 0,
      "order_sum": 4987,
      "order_payed": "0.00",
      "pay_status": "Неоплачен ч.",
      "courier_comment": "до 10:30",
      "inner_comment": "13.11 везем 2 завтрака, в последний день завтрак убираем"
    },
    {
      "o_id": 1562,
      "client_name": "Додатко Анна",
      "diets": [
        "Премиум 1400"
      ],
      "tariff": [
        "Подписка 30 дней"
      ],
      "address": "Москва ленина 123 подъезд 3, этаж 5, кв. 43",
      "phone": "+7 908 511-51-51",
      "dates": [
        {
          "start_date": "2023-12-03",
          "end_date": "2023-12-23"
        }
      ],
      "discount": 23,
      "order_sum": 19104.75,
      "order_payed": "5088.25",
      "pay_status": "Неоплачен ч.",
      "courier_comment": "Квартира 31",
      "inner_comment": ""
    },
    {
      "o_id": 1561,
      "client_name": "Андронова Татьяна",
      "diets": [
        "Премиум 1400"
      ],
      "tariff": [
        "Подписка 30 дней"
      ],
      "address": "Москва ленина 123 подъезд 3, этаж 5, кв. 43",
      "phone": "+7 908 511-51-51",
      "dates": [
        {
          "start_date": "2023-11-19",
          "end_date": "2023-12-18"
        }
      ],
      "discount": 0,
      "order_sum": 36945,
      "order_payed": "0.00",
      "pay_status": "Неоплачен ч.",
      "courier_comment": "Доставка с 8:00 до 10:30",
      "inner_comment": ""
    },
    {
      "o_id": 1559,
      "client_name": "Ольга Соколова",
      "diets": [
        "Премиум 1200"
      ],
      "tariff": [
        "Подписка 7 дней"
      ],
      "address": "Москва ленина 123 подъезд 3, этаж 5, кв. 43",
      "phone": "+7 908 511-51-51",
      "dates": [
        {
          "start_date": "2023-11-20",
          "end_date": "2023-11-26"
        }
      ],
      "discount": 0,
      "order_sum": 8578.5,
      "order_payed": "0.00",
      "pay_status": "Неоплачен ч.",
      "courier_comment": "",
      "inner_comment": ""
    },
    {
      "o_id": 1558,
      "client_name": "Марк Черкашин",
      "diets": [
        "Премиум 1800"
      ],
      "tariff": [
        "Подписка 7 дней"
      ],
      "address": "Москва ленина 123 подъезд 3, этаж 5, кв. 43",
      "phone": "+7 908 511-51-51",
      "dates": [
        {
          "start_date": "2023-11-19",
          "end_date": "2023-11-25"
        }
      ],
      "discount": 0,
      "order_sum": 10573.5,
      "order_payed": "0.00",
      "pay_status": "Неоплачен ч.",
      "courier_comment": "",
      "inner_comment": ""
    },
    {
      "o_id": 1557,
      "client_name": "Загоскина Анна (вк)",
      "diets": [
        "1100"
      ],
      "tariff": [
        "Подписка антикризисное меню 20 дней"
      ],
      "address": "Москва ленина 123 подъезд 3, этаж 5, кв. 43",
      "phone": "+7 908 511-51-51",
      "dates": [
        {
          "start_date": "2023-11-20",
          "end_date": "2023-12-18"
        }
      ],
      "discount": 0,
      "order_sum": 26232.5,
      "order_payed": "0.00",
      "pay_status": "Неоплачен ч.",
      "courier_comment": "",
      "inner_comment": ""
    },
    {
      "o_id": 1555,
      "client_name": "Чупрова Леся Игоревна",
      "diets": [
        "750 ккал"
      ],
      "tariff": [
        "Подписка антикризисное меню 20 дней"
      ],
      "address": "Москва ленина 123 подъезд 3, этаж 5, кв. 43",
      "phone": "+7 908 511-51-51",
      "dates": [
        {
          "start_date": "2023-11-18",
          "end_date": "2024-01-21"
        }
      ],
      "discount": 0,
      "order_sum": 27279,
      "order_payed": "0.00",
      "pay_status": "Неоплачен ч.",
      "courier_comment": "Звонить заранее, что едете-предупреждать за 15-20 минут, либо нужно будет привозить на космический проезд 1/3 (это рядом)",
      "inner_comment": ""
    },
    {
      "o_id": 1554,
      "client_name": "Бессонова Любовь Орестовна",
      "diets": [
        "750 ккал"
      ],
      "tariff": [
        "Базовый"
      ],
      "address": "Москва ленина 123 подъезд 3, этаж 5, кв. 43",
      "phone": "+7 908 511-51-51",
      "dates": [
        {
          "start_date": "2023-11-18",
          "end_date": "2023-12-24"
        }
      ],
      "discount": 0,
      "order_sum": 11691,
      "order_payed": "0.00",
      "pay_status": "Неоплачен ч.",
      "courier_comment": "",
      "inner_comment": ""
    },
    {
      "o_id": 1553,
      "client_name": "Степанов Роман",
      "diets": [
        "Премиум 2400"
      ],
      "tariff": [
        "Базовый"
      ],
      "address": "Москва ленина 123 подъезд 3, этаж 5, кв. 43",
      "phone": "+7 908 511-51-51",
      "dates": [
        {
          "start_date": "2023-12-16",
          "end_date": "2024-01-27"
        }
      ],
      "discount": 17,
      "order_sum": 47061,
      "order_payed": "0.00",
      "pay_status": "Неоплачен ч.",
      "courier_comment": "на будние дни возим по вечерам после 21:00, на сб и вс возим утром с 8:00 до 9:00",
      "inner_comment": ""
    },
    {
      "o_id": 1552,
      "client_name": "Левченко Владислав",
      "diets": [
        "Премиум 1600"
      ],
      "tariff": [
        "Базовый"
      ],
      "address": "Москва ленина 123 подъезд 3, этаж 5, кв. 43",
      "phone": "+7 908 511-51-51",
      "dates": [
        {
          "start_date": "2023-11-17",
          "end_date": "2023-11-21"
        }
      ],
      "discount": 0,
      "order_sum": 7400,
      "order_payed": "0.00",
      "pay_status": "Неоплачен ч.",
      "courier_comment": "",
      "inner_comment": ""
    },
    {
      "o_id": 1551,
      "client_name": "Бороев Дарма",
      "diets": [
        "Премиум 2000"
      ],
      "tariff": [
        "Базовый"
      ],
      "address": "Москва ленина 123 подъезд 3, этаж 5, кв. 43",
      "phone": "+7 908 511-51-51",
      "dates": [
        {
          "start_date": "2023-11-16",
          "end_date": "2023-11-22"
        }
      ],
      "discount": 0,
      "order_sum": 11830,
      "order_payed": "0.00",
      "pay_status": "Неоплачен ч.",
      "courier_comment": "",
      "inner_comment": ""
    },
    {
      "o_id": 1550,
      "client_name": "Алексеева Анастасия",
      "diets": [
        "Премиум 1800"
      ],
      "tariff": [
        "ТЕСТ ДРАЙВ - пробный 7 дней скидка 15%"
      ],
      "address": "Москва ленина 123 подъезд 3, этаж 5, кв. 43",
      "phone": "+7 908 511-51-51",
      "dates": [
        {
          "start_date": "2023-11-16",
          "end_date": "2023-11-30"
        }
      ],
      "discount": 15,
      "order_sum": 16082.78,
      "order_payed": "0.00",
      "pay_status": "Неоплачен ч.",
      "courier_comment": "с 9:00 до 9:30",
      "inner_comment": ""
    },
    {
      "o_id": 1549,
      "client_name": "Рубцова Алена",
      "diets": [
        "Премиум 1400"
      ],
      "tariff": [
        "ТЕСТ ДРАЙВ - пробный 7 дней скидка 15%"
      ],
      "address": "Москва ленина 123 подъезд 3, этаж 5, кв. 43",
      "phone": "+7 908 511-51-51",
      "dates": [
        {
          "start_date": "2023-11-16",
          "end_date": "2023-11-22"
        }
      ],
      "discount": 0,
      "order_sum": 8270.5,
      "order_payed": "0.00",
      "pay_status": "Неоплачен ч.",
      "courier_comment": "",
      "inner_comment": ""
    },
    {
      "o_id": 1547,
      "client_name": "Татьяна Нефедова",
      "diets": [
        "Премиум 1200"
      ],
      "tariff": [
        "ТЕСТ ДРАЙВ - пробный 7 дней скидка 15%"
      ],
      "address": "Москва ленина 123 подъезд 3, этаж 5, кв. 43",
      "phone": "+7 908 511-51-51",
      "dates": [
        {
          "start_date": "2023-11-15",
          "end_date": "2023-11-28"
        }
      ],
      "discount": 0,
      "order_sum": 15351,
      "order_payed": "0.00",
      "pay_status": "Неоплачен ч.",
      "courier_comment": "доставка после 20/00",
      "inner_comment": ""
    },
    {
      "o_id": 1545,
      "client_name": "Степанов Роман",
      "diets": [
        "Премиум 2400"
      ],
      "tariff": [
        "Базовый"
      ],
      "address": "Москва ленина 123 подъезд 3, этаж 5, кв. 43",
      "phone": "+7 908 511-51-51",
      "dates": [
        {
          "start_date": "2023-11-16",
          "end_date": "2023-12-15"
        }
      ],
      "discount": 17,
      "order_sum": 47061,
      "order_payed": "8345.40",
      "pay_status": "Неоплачен ч.",
      "courier_comment": "на будние дни возим по вечерам после 21:00, на сб и вс возим утром с 8:00 до 9:00",
      "inner_comment": ""
    },
    {
      "o_id": 1544,
      "client_name": "Смирнов Владимир",
      "diets": [
        "Премиум 1200"
      ],
      "tariff": [
        "Подписка 30 дней"
      ],
      "address": "Москва ленина 123 подъезд 3, этаж 5, кв. 43",
      "phone": "+7 908 511-51-51",
      "dates": [
        {
          "start_date": "2023-11-17",
          "end_date": "2023-12-16"
        }
      ],
      "discount": 0,
      "order_sum": 65790,
      "order_payed": "0.00",
      "pay_status": "Неоплачен ч.",
      "courier_comment": "",
      "inner_comment": ""
    },
    {
      "o_id": 1543,
      "client_name": "Кутко Фарида",
      "diets": [
        "Премиум 900 без перекусов"
      ],
      "tariff": [
        "Базовый"
      ],
      "address": "Москва ленина 123 подъезд 3, этаж 5, кв. 43",
      "phone": "+7 908 511-51-51",
      "dates": [
        {
          "start_date": "2023-11-19",
          "end_date": "2023-12-28"
        }
      ],
      "discount": 27,
      "order_sum": 32996,
      "order_payed": "0.00",
      "pay_status": "Неоплачен ч.",
      "courier_comment": "",
      "inner_comment": ""
    },
    {
      "o_id": 1542,
      "client_name": "Степанов Алексей",
      "diets": [
        "Премиум 1800"
      ],
      "tariff": [
        "Подписка 14 дней"
      ],
      "address": "Москва ленина 123 подъезд 3, этаж 5, кв. 43",
      "phone": "+7 908 511-51-51",
      "dates": [
        {
          "start_date": "2023-11-14",
          "end_date": "2023-11-27"
        }
      ],
      "discount": 15,
      "order_sum": 37270.8,
      "order_payed": "0.00",
      "pay_status": "Неоплачен ч.",
      "courier_comment": "",
      "inner_comment": ""
    },
    {
      "o_id": 1540,
      "client_name": "Макаров Матвей",
      "diets": [
        "Премиум 2000"
      ],
      "tariff": [
        "Подписка 14 дней"
      ],
      "address": "Москва ленина 123 подъезд 3, этаж 5, кв. 43",
      "phone": "+7 908 511-51-51",
      "dates": [
        {
          "start_date": "2023-11-13",
          "end_date": "2023-11-26"
        }
      ],
      "discount": 0,
      "order_sum": 21294,
      "order_payed": "0.00",
      "pay_status": "Неоплачен ч.",
      "courier_comment": "",
      "inner_comment": ""
    },
    {
      "o_id": 1539,
      "client_name": "Антон Хван",
      "diets": [
        "Премиум 2000"
      ],
      "tariff": [
        "Базовый"
      ],
      "address": "Москва ленина 123 подъезд 3, этаж 5, кв. 43",
      "phone": "+7 908 511-51-51",
      "dates": [
        {
          "start_date": "2023-11-13",
          "end_date": "2023-11-20"
        }
      ],
      "discount": 0,
      "order_sum": 11830,
      "order_payed": "0.00",
      "pay_status": "Неоплачен ч.",
      "courier_comment": "если нет дома , оставить у консъержа",
      "inner_comment": "подписать все приемы пищи"
    },
    {
      "o_id": 1538,
      "client_name": "Седельникова Анжелика",
      "diets": [
        "Премиум 900 без перекусов"
      ],
      "tariff": [
        "Базовый"
      ],
      "address": "Москва ленина 123 подъезд 3, этаж 5, кв. 43",
      "phone": "+7 908 511-51-51",
      "dates": [
        {
          "start_date": "2023-11-13",
          "end_date": "2023-11-17"
        }
      ],
      "discount": 0,
      "order_sum": 6780,
      "order_payed": "0.00",
      "pay_status": "Неоплачен ч.",
      "courier_comment": "21:30 - 22:30                                 лучше в последнюю очередь\r\nуточнять время каждый день\r\nесли при доставки не дозвонились, то оставить на ручке",
      "inner_comment": "СКИДЫВАТЬ ЕЙ МЕНЮ, НА ОДОБРЕНИЕ\nКбжу:\nКкал 900\nБелки до 100\nУглеводы до 50\nЖир до 30\nИсключаем:\nМасло, крупы, мясо Жирных сортов\nОсновное:\nЯйца, зелень, салаты, овощи, белок, рыба, Убираем картофель и стручковая фасоль на гарнир. В обед и ужин на гарнир овощи, можно одинаковые. Делаем жиры до 40, углеводы до 60, лучше меньше.                можно 750-900 ккал                                                           БЕЗ ПЕРЕКУСОВ 1 И 2.   без приборов\n21:30 - 22:30                                 лучше в последнюю очередь\nуточнять время каждый день"
    },
    {
      "o_id": 1537,
      "client_name": "Зурнаджян Рузанна",
      "diets": [
        "Премиум 1200"
      ],
      "tariff": [
        "Базовый"
      ],
      "address": "Москва ленина 123 подъезд 3, этаж 5, кв. 43",
      "phone": "+7 908 511-51-51",
      "dates": [
        {
          "start_date": "2023-11-16",
          "end_date": "2023-12-17"
        }
      ],
      "discount": 0,
      "order_sum": 38700,
      "order_payed": "0.00",
      "pay_status": "Неоплачен ч.",
      "courier_comment": "",
      "inner_comment": ""
    },
    {
      "o_id": 1535,
      "client_name": "Серединская Наталья Г.",
      "diets": [
        "750 ккал"
      ],
      "tariff": [
        "Подписка 30 дней"
      ],
      "address": "Москва ленина 123 подъезд 3, этаж 5, кв. 43",
      "phone": "+7 908 511-51-51",
      "dates": [
        {
          "start_date": "2023-11-15",
          "end_date": "2023-12-31"
        }
      ],
      "discount": 0,
      "order_sum": 19485,
      "order_payed": "12615.00",
      "pay_status": "Неоплачен ч.",
      "courier_comment": "доставить до 22:00",
      "inner_comment": ""
    },
    {
      "o_id": 1534,
      "client_name": "Минеева Арина",
      "diets": [
        "Премиум 1200"
      ],
      "tariff": [
        "ТЕСТ ДРАЙВ - пробный 7 дней скидка 15%"
      ],
      "address": "Москва ленина 123 подъезд 3, этаж 5, кв. 43",
      "phone": "+7 908 511-51-51",
      "dates": [
        {
          "start_date": "2023-11-12",
          "end_date": "2023-11-25"
        }
      ],
      "discount": 0,
      "order_sum": 15351,
      "order_payed": "0.00",
      "pay_status": "Неоплачен ч.",
      "courier_comment": "",
      "inner_comment": ""
    },
    {
      "o_id": 1533,
      "client_name": "Татьяна Чирцова",
      "diets": [
        "Премиум 900 без перекусов"
      ],
      "tariff": [
        "Базовый"
      ],
      "address": "Москва ленина 123 подъезд 3, этаж 5, кв. 43",
      "phone": "+7 908 511-51-51",
      "dates": [
        {
          "start_date": "2023-11-13",
          "end_date": "2023-12-04"
        }
      ],
      "discount": 0,
      "order_sum": 24860,
      "order_payed": "0.00",
      "pay_status": "Неоплачен ч.",
      "courier_comment": "",
      "inner_comment": ""
    },
    {
      "o_id": 1532,
      "client_name": "Сиразетдинова Галина",
      "diets": [
        "Премиум 1200"
      ],
      "tariff": [
        "Базовый"
      ],
      "address": "Москва ленина 123 подъезд 3, этаж 5, кв. 43",
      "phone": "+7 908 511-51-51",
      "dates": [
        {
          "start_date": "2023-11-12",
          "end_date": "2023-11-22"
        }
      ],
      "discount": 0,
      "order_sum": 14190,
      "order_payed": "0.00",
      "pay_status": "Неоплачен ч.",
      "courier_comment": "19:30 - 22:30",
      "inner_comment": ""
    },
    {
      "o_id": 1531,
      "client_name": "Еловская Анна",
      "diets": [
        "Премиум 1400"
      ],
      "tariff": [
        "Базовый"
      ],
      "address": "Москва ленина 123 подъезд 3, этаж 5, кв. 43",
      "phone": "+7 908 511-51-51",
      "dates": [
        {
          "start_date": "2023-11-12",
          "end_date": "2023-11-22"
        }
      ],
      "discount": 0,
      "order_sum": 15290,
      "order_payed": "1287.00",
      "pay_status": "Неоплачен ч.",
      "courier_comment": "Домофон открывается дистанционно, можно оставить у двери рацион, согласовав с клиентом",
      "inner_comment": ""
    },
    {
      "o_id": 1530,
      "client_name": "Мацинский Роман Владимирович",
      "diets": [
        "Премиум 2000"
      ],
      "tariff": [
        "Базовый"
      ],
      "address": "Москва ленина 123 подъезд 3, этаж 5, кв. 43",
      "phone": "+7 908 511-51-51",
      "dates": [
        {
          "start_date": "2023-11-13",
          "end_date": "2023-11-17"
        }
      ],
      "discount": 0,
      "order_sum": 16900,
      "order_payed": "0.00",
      "pay_status": "Неоплачен ч.",
      "courier_comment": "Доставка всегда с 8.00 до 9:30❗❗\r\nПри доставке \r\n\r\nсвязываться с Аленой 89875106005!!!\r\nНЕ ВОЗИМ В ВЫХОДНЫЕ!",
      "inner_comment": ""
    },
    {
      "o_id": 1528,
      "client_name": "Андрей Болгов",
      "diets": [
        "Премиум 1200"
      ],
      "tariff": [
        "Подписка 14 дней"
      ],
      "address": "Москва ленина 123 подъезд 3, этаж 5, кв. 43",
      "phone": "+7 908 511-51-51",
      "dates": [
        {
          "start_date": "2023-11-13",
          "end_date": "2023-11-26"
        }
      ],
      "discount": 0,
      "order_sum": 16254,
      "order_payed": "0.00",
      "pay_status": "Неоплачен ч.",
      "courier_comment": "",
      "inner_comment": ""
    },
    {
      "o_id": 1527,
      "client_name": "Чупрова Леся Игоревна",
      "diets": [
        "750 ккал"
      ],
      "tariff": [
        "Базовый"
      ],
      "address": "Москва ленина 123 подъезд 3, этаж 5, кв. 43",
      "phone": "+7 908 511-51-51",
      "dates": [
        {
          "start_date": "2023-11-16",
          "end_date": "2023-12-24"
        }
      ],
      "discount": 0,
      "order_sum": 0,
      "order_payed": "0.00",
      "pay_status": "Оплачен",
      "courier_comment": "Звонить заранее, что едете-предупреждать за 15-20 минут, либо нужно будет привозить на космический проезд 1/3 (это рядом)",
      "inner_comment": ""
    },
    {
      "o_id": 1525,
      "client_name": "Васильева Ольга",
      "diets": [
        "1200 ккал"
      ],
      "tariff": [
        "Базовый"
      ],
      "address": "Москва ленина 123 подъезд 3, этаж 5, кв. 43",
      "phone": "+7 908 511-51-51",
      "dates": [
        {
          "start_date": "2023-11-12",
          "end_date": "2023-11-25"
        }
      ],
      "discount": 25,
      "order_sum": 13545,
      "order_payed": "0.00",
      "pay_status": "Неоплачен ч.",
      "courier_comment": "Домофон работает, лифт, 16 этаж",
      "inner_comment": ""
    },
    {
      "o_id": 1521,
      "client_name": "Пругло Ольга",
      "diets": [
        "900 без перекусов"
      ],
      "tariff": [
        "Подписка 14 дней"
      ],
      "address": "Москва ленина 123 подъезд 3, этаж 5, кв. 43",
      "phone": "+7 908 511-51-51",
      "dates": [
        {
          "start_date": "2023-11-21",
          "end_date": "2023-12-11"
        }
      ],
      "discount": 0,
      "order_sum": 22374,
      "order_payed": "2924.00",
      "pay_status": "Неоплачен ч.",
      "courier_comment": "8:00 - 10:00\r\nне возим на вых и праздники",
      "inner_comment": ""
    },
    {
      "o_id": 1520,
      "client_name": "Коратущенко Ирина",
      "diets": [
        "750 ккал"
      ],
      "tariff": [
        "Подписка антикризисное меню 20 дней"
      ],
      "address": "Москва ленина 123 подъезд 3, этаж 5, кв. 43",
      "phone": "+7 908 511-51-51",
      "dates": [
        {
          "start_date": "2023-11-10",
          "end_date": "2023-11-30"
        }
      ],
      "discount": 0,
      "order_sum": 13639.5,
      "order_payed": "0.00",
      "pay_status": "Неоплачен ч.",
      "courier_comment": "",
      "inner_comment": ""
    },
    {
      "o_id": 1518,
      "client_name": "Шелест Ольга",
      "diets": [
        "Премиум 900 без перекусов"
      ],
      "tariff": [
        "Подписка 14 дней"
      ],
      "address": "Москва ленина 123 подъезд 3, этаж 5, кв. 43",
      "phone": "+7 908 511-51-51",
      "dates": [
        {
          "start_date": "2023-11-08",
          "end_date": "2023-11-22"
        }
      ],
      "discount": 0,
      "order_sum": 15255,
      "order_payed": "350.00",
      "pay_status": "Неоплачен ч.",
      "courier_comment": "",
      "inner_comment": ""
    },
    {
      "o_id": 1517,
      "client_name": "Анастасия (фотограф) сотрудник",
      "diets": [
        "Премиум 1200"
      ],
      "tariff": [
        "Базовый"
      ],
      "address": "Москва ленина 123 подъезд 3, этаж 5, кв. 43",
      "phone": "+7 908 511-51-51",
      "dates": [
        {
          "start_date": "2023-11-10",
          "end_date": "2023-12-04"
        }
      ],
      "discount": 0,
      "order_sum": 32250,
      "order_payed": "0.00",
      "pay_status": "Неоплачен ч.",
      "courier_comment": "",
      "inner_comment": ""
    },
    {
      "o_id": 1516,
      "client_name": "Мурашова Дарья",
      "diets": [
        "750 ккал"
      ],
      "tariff": [
        "Подписка антикризисное меню 20 дней"
      ],
      "address": "Москва ленина 123 подъезд 3, этаж 5, кв. 43",
      "phone": "+7 908 511-51-51",
      "dates": [
        {
          "start_date": "2023-11-08",
          "end_date": "2023-11-16"
        }
      ],
      "discount": 0,
      "order_sum": 12990,
      "order_payed": "0.00",
      "pay_status": "Неоплачен ч.",
      "courier_comment": "домофон 36, этаж 2",
      "inner_comment": "вернется осенью"
    },
    {
      "o_id": 1515,
      "client_name": "Сифорова Мария",
      "diets": [
        "Премиум 1200"
      ],
      "tariff": [
        "Подписка 14 дней"
      ],
      "address": "Москва ленина 123 подъезд 3, этаж 5, кв. 43",
      "phone": "+7 908 511-51-51",
      "dates": [
        {
          "start_date": "2023-11-07",
          "end_date": "2023-11-21"
        }
      ],
      "discount": 0,
      "order_sum": 17415,
      "order_payed": "0.00",
      "pay_status": "Неоплачен ч.",
      "courier_comment": "Доставка к 12:00",
      "inner_comment": ""
    },
    {
      "o_id": 1514,
      "client_name": "Кордонец Анатолий",
      "diets": [
        "Премиум 1200"
      ],
      "tariff": [
        "ТЕСТ ДРАЙВ - пробный 7 дней скидка 15%"
      ],
      "address": "Москва ленина 123 подъезд 3, этаж 5, кв. 43",
      "phone": "+7 908 511-51-51",
      "dates": [
        {
          "start_date": "2023-11-07",
          "end_date": "2023-11-13"
        }
      ],
      "discount": 0,
      "order_sum": 7675.5,
      "order_payed": "0.00",
      "pay_status": "Неоплачен ч.",
      "courier_comment": "",
      "inner_comment": ""
    },
    {
      "o_id": 1513,
      "client_name": "Ковинов Максим",
      "diets": [
        "Премиум 1800"
      ],
      "tariff": [
        "Подписка 30 дней"
      ],
      "address": "Москва ленина 123 подъезд 3, этаж 5, кв. 43",
      "phone": "+7 908 511-51-51",
      "dates": [
        {
          "start_date": "2023-11-06",
          "end_date": "2023-12-05"
        }
      ],
      "discount": 0,
      "order_sum": 40545,
      "order_payed": "0.00",
      "pay_status": "Неоплачен ч.",
      "courier_comment": "с 9 до 11",
      "inner_comment": ""
    },
    {
      "o_id": 1512,
      "client_name": "Афанасьева Галина",
      "diets": [
        "1100"
      ],
      "tariff": [
        "Подписка 30 дней"
      ],
      "address": "Москва ленина 123 подъезд 3, этаж 5, кв. 43",
      "phone": "+7 908 511-51-51",
      "dates": [
        {
          "start_date": "2023-11-06",
          "end_date": "2023-12-04"
        }
      ],
      "discount": 0,
      "order_sum": 4598,
      "order_payed": "0.00",
      "pay_status": "Неоплачен ч.",
      "courier_comment": "Позвонить за 10-15 минут",
      "inner_comment": "каждый день уточнять, нужна ли доставка и на какой адрес"
    },
    {
      "o_id": 1507,
      "client_name": "Ксения (Кузьма Владимир Фёдорович)",
      "diets": [
        "Премиум 900 без завтрака"
      ],
      "tariff": [
        "Подписка 14 дней"
      ],
      "address": "Москва ленина 123 подъезд 3, этаж 5, кв. 43",
      "phone": "+7 908 511-51-51",
      "dates": [
        {
          "start_date": "2023-11-03",
          "end_date": "2023-11-16"
        }
      ],
      "discount": 0,
      "order_sum": 15638,
      "order_payed": "0.00",
      "pay_status": "Неоплачен ч.",
      "courier_comment": "НЕ ПОЗЖЕ 11:30!!!!!!",
      "inner_comment": "Не прикреплять лист с меню и кбжу."
    },
    {
      "o_id": 1505,
      "client_name": "Игнатенко  Ольга",
      "diets": [
        "Премиум 1400"
      ],
      "tariff": [
        "Базовый"
      ],
      "address": "Москва ленина 123 подъезд 3, этаж 5, кв. 43",
      "phone": "+7 908 511-51-51",
      "dates": [
        {
          "start_date": "2023-11-06",
          "end_date": "2023-12-05"
        }
      ],
      "discount": 0,
      "order_sum": 41700,
      "order_payed": "0.00",
      "pay_status": "Неоплачен ч.",
      "courier_comment": "",
      "inner_comment": ""
    },
    {
      "o_id": 1502,
      "client_name": "Анастасия Журавлева",
      "diets": [
        "Премиум 1200"
      ],
      "tariff": [
        "Подписка 14 дней"
      ],
      "address": "Москва ленина 123 подъезд 3, этаж 5, кв. 43",
      "phone": "+7 908 511-51-51",
      "dates": [
        {
          "start_date": "2023-11-01",
          "end_date": "2023-11-14"
        }
      ],
      "discount": 0,
      "order_sum": 16254,
      "order_payed": "0.00",
      "pay_status": "Неоплачен ч.",
      "courier_comment": "до 22:00",
      "inner_comment": "в отпуске до 22.11. написать предварительно 22 ноября о возобновлении доставок"
    },
    {
      "o_id": 1501,
      "client_name": "Загузина Яна (@yanayana3107)",
      "diets": [
        "750 ккал"
      ],
      "tariff": [
        "Базовый"
      ],
      "address": "Москва ленина 123 подъезд 3, этаж 5, кв. 43",
      "phone": "+7 908 511-51-51",
      "dates": [
        {
          "start_date": "2023-12-01",
          "end_date": "2024-01-08"
        }
      ],
      "discount": 0,
      "order_sum": 41292,
      "order_payed": "0.00",
      "pay_status": "Неоплачен ч.",
      "courier_comment": "",
      "inner_comment": ""
    },
    {
      "o_id": 1499,
      "client_name": "Владислав Братцев",
      "diets": [
        "Премиум 1800"
      ],
      "tariff": [
        "Подписка 30 дней"
      ],
      "address": "Москва ленина 123 подъезд 3, этаж 5, кв. 43",
      "phone": "+7 908 511-51-51",
      "dates": [
        {
          "start_date": "2023-11-02",
          "end_date": "2023-12-31"
        }
      ],
      "discount": 0,
      "order_sum": 81090,
      "order_payed": "66780.00",
      "pay_status": "Неоплачен ч.",
      "courier_comment": "перед выездом курьер должен обязательно звонить и согласовывать доставку!!!",
      "inner_comment": "каждый день уточнять по доставке"
    },
    {
      "o_id": 1496,
      "client_name": "Иванов Вадим викторович",
      "diets": [
        "Премиум 1800"
      ],
      "tariff": [
        "Подписка 30 дней"
      ],
      "address": "Москва ленина 123 подъезд 3, этаж 5, кв. 43",
      "phone": "+7 908 511-51-51",
      "dates": [
        {
          "start_date": "2023-11-01",
          "end_date": "2023-11-30"
        }
      ],
      "discount": 15,
      "order_sum": 33314.475,
      "order_payed": "17888.00",
      "pay_status": "Неоплачен ч.",
      "courier_comment": "до 9:00! потом уезжает на работу",
      "inner_comment": "31.10 оплачено 50%, через 10 дней оплатит остальные 50%"
    },
    {
      "o_id": 1494,
      "client_name": "Злобина Светлана",
      "diets": [
        "Премиум 1200"
      ],
      "tariff": [
        "Подписка 30 дней"
      ],
      "address": "Москва ленина 123 подъезд 3, этаж 5, кв. 43",
      "phone": "+7 908 511-51-51",
      "dates": [
        {
          "start_date": "2023-10-31",
          "end_date": "2023-11-29"
        }
      ],
      "discount": 0,
      "order_sum": 32895,
      "order_payed": "14512.00",
      "pay_status": "Неоплачен ч.",
      "courier_comment": "домофон не работает, звонить\r\nкв 13",
      "inner_comment": "31.10 оплачено 50% - через 10 дней оплатит 50%"
    },
    {
      "o_id": 1491,
      "client_name": "Егоров Павел Александрович",
      "diets": [
        "Премиум 1400"
      ],
      "tariff": [
        "Подписка 14 дней"
      ],
      "address": "Москва ленина 123 подъезд 3, этаж 5, кв. 43",
      "phone": "+7 908 511-51-51",
      "dates": [
        {
          "start_date": "2023-10-30",
          "end_date": "2023-11-12"
        }
      ],
      "discount": 0,
      "order_sum": 17792,
      "order_payed": "16541.00",
      "pay_status": "Неоплачен ч.",
      "courier_comment": "",
      "inner_comment": "по выходным не возим\r\n\r\nотправлять меню в день приготовления, для согласования"
    },
    {
      "o_id": 1489,
      "client_name": "Дудкин Антон",
      "diets": [
        "Премиум 1800"
      ],
      "tariff": [
        "Базовый"
      ],
      "address": "Москва ленина 123 подъезд 3, этаж 5, кв. 43",
      "phone": "+7 908 511-51-51",
      "dates": [
        {
          "start_date": "2023-10-31",
          "end_date": "2023-11-29"
        }
      ],
      "discount": 0,
      "order_sum": 40545,
      "order_payed": "35775.00",
      "pay_status": "Неоплачен ч.",
      "courier_comment": "(ориентир: красная машина А442АА), шлагбаум, позвонить.",
      "inner_comment": ""
    },
    {
      "o_id": 1488,
      "client_name": "Колбасеева Наталия",
      "diets": [
        "1200 ккал"
      ],
      "tariff": [
        "Базовый"
      ],
      "address": "Москва ленина 123 подъезд 3, этаж 5, кв. 43",
      "phone": "+7 908 511-51-51",
      "dates": [
        {
          "start_date": "2023-10-30",
          "end_date": "2023-11-12"
        }
      ],
      "discount": 0,
      "order_sum": 17544,
      "order_payed": "15400.00",
      "pay_status": "Неоплачен ч.",
      "courier_comment": "",
      "inner_comment": ""
    },
    {
      "o_id": 1483,
      "client_name": "Евгения Шикуева",
      "diets": [
        "Премиум 1200"
      ],
      "tariff": [
        "Базовый"
      ],
      "address": "Москва ленина 123 подъезд 3, этаж 5, кв. 43",
      "phone": "+7 908 511-51-51",
      "dates": [
        {
          "start_date": "2023-11-07",
          "end_date": "2023-12-29"
        }
      ],
      "discount": 0,
      "order_sum": 42763.5,
      "order_payed": "29540.50",
      "pay_status": "Неоплачен ч.",
      "courier_comment": "Позвонить, клиент выйдет",
      "inner_comment": ""
    },
    {
      "o_id": 1482,
      "client_name": "Теплухина Екатерина (звонить или смс)",
      "diets": [
        "Премиум 1200"
      ],
      "tariff": [
        "Базовый"
      ],
      "address": "Москва ленина 123 подъезд 3, этаж 5, кв. 43",
      "phone": "+7 908 511-51-51",
      "dates": [
        {
          "start_date": "2023-10-28",
          "end_date": "2023-11-10"
        }
      ],
      "discount": 10,
      "order_sum": 16028.6,
      "order_payed": "16932.00",
      "pay_status": "Оплачен",
      "courier_comment": "20:30-21:00\r\nУточнять адрес каждый день Уточнять каждый день, нужна ли доставка!!!",
      "inner_comment": ""
    },
    {
      "o_id": 1481,
      "client_name": "Мончик Ольга",
      "diets": [
        "750 ккал"
      ],
      "tariff": [
        "Базовый"
      ],
      "address": "Москва ленина 123 подъезд 3, этаж 5, кв. 43",
      "phone": "+7 908 511-51-51",
      "dates": [
        {
          "start_date": "2023-11-05",
          "end_date": "2023-12-03"
        }
      ],
      "discount": 0,
      "order_sum": 26212,
      "order_payed": "8992.00",
      "pay_status": "Неоплачен ч.",
      "courier_comment": "СТРОГО ДО 21:00!!!!\r\nНЕ КОСЯЧИТЬ С НЕЙ!!!!\r\n\r\nбудет предупреждать когда доставка, а когда самовывоз.",
      "inner_comment": "750 ккал 30 дней (оплачено 50%, следующая оплата 4/11\r\nстарт 1.11\r\nбудет предупреждать когда доставка, а когда самовывоз.\r\n\r\nДоставка через день по антикризису оплачена\r\n750 ккал, 1-15.11\r\n900 ккал, 17-30.11."
    },
    {
      "o_id": 1480,
      "client_name": "Савельев Калин",
      "diets": [
        "Премиум 2400"
      ],
      "tariff": [
        "Базовый"
      ],
      "address": "Москва ленина 123 подъезд 3, этаж 5, кв. 43",
      "phone": "+7 908 511-51-51",
      "dates": [
        {
          "start_date": "2023-10-27",
          "end_date": "2023-11-25"
        }
      ],
      "discount": 0,
      "order_sum": 43095,
      "order_payed": "39699.51",
      "pay_status": "Неоплачен ч.",
      "courier_comment": "домофона нет, звонить\r\nза час до доставки нужно звонить ему",
      "inner_comment": "отправлять каждый день меню на согласование"
    },
    {
      "o_id": 1479,
      "client_name": "Камалов Ринат",
      "diets": [
        "Премиум 3000"
      ],
      "tariff": [
        "Базовый"
      ],
      "address": "Москва ленина 123 подъезд 3, этаж 5, кв. 43",
      "phone": "+7 908 511-51-51",
      "dates": [
        {
          "start_date": "2023-11-08",
          "end_date": "2024-01-27"
        }
      ],
      "discount": 25,
      "order_sum": 80325,
      "order_payed": "92000.00",
      "pay_status": "Оплачен",
      "courier_comment": "",
      "inner_comment": ""
    },
    {
      "o_id": 1476,
      "client_name": "Владимир Артемьев",
      "diets": [
        "Премиум 1800"
      ],
      "tariff": [
        "Базовый"
      ],
      "address": "Москва ленина 123 подъезд 3, этаж 5, кв. 43",
      "phone": "+7 908 511-51-51",
      "dates": [
        {
          "start_date": "2023-10-25",
          "end_date": "2023-11-23"
        }
      ],
      "discount": 25,
      "order_sum": 30408.6,
      "order_payed": "17887.00",
      "pay_status": "Неоплачен ч.",
      "courier_comment": "с 22:00-22:30. за 30-40 минут звонить обязательно",
      "inner_comment": ""
    },
    {
      "o_id": 1475,
      "client_name": "Анастасия Матренинская",
      "diets": [
        "750 ккал"
      ],
      "tariff": [
        "Подписка антикризисное меню 20 дней"
      ],
      "address": "Москва ленина 123 подъезд 3, этаж 5, кв. 43",
      "phone": "+7 908 511-51-51",
      "dates": [
        {
          "start_date": "2023-11-04",
          "end_date": "2023-12-13"
        }
      ],
      "discount": 0,
      "order_sum": 25980,
      "order_payed": "24425.00",
      "pay_status": "Неоплачен ч.",
      "courier_comment": "домофон не работает, звонить, 4 подъезд\r\nдоставка после 21:30!!!",
      "inner_comment": "уточнять по выходным"
    },
    {
      "o_id": 1469,
      "client_name": "Додатко Анна",
      "diets": [
        "Премиум 1400"
      ],
      "tariff": [
        "Подписка 30 дней"
      ],
      "address": "Москва ленина 123 подъезд 3, этаж 5, кв. 43",
      "phone": "+7 908 511-51-51",
      "dates": [
        {
          "start_date": "2023-10-30",
          "end_date": "2023-11-28"
        }
      ],
      "discount": 23,
      "order_sum": 28202.25,
      "order_payed": "28202.25",
      "pay_status": "Оплачен",
      "courier_comment": "Квартира 31",
      "inner_comment": ""
    },
    {
      "o_id": 1464,
      "client_name": "Иван",
      "diets": [
        "Премиум 2400"
      ],
      "tariff": [
        "Подписка 30 дней"
      ],
      "address": "Москва ленина 123 подъезд 3, этаж 5, кв. 43",
      "phone": "+7 908 511-51-51",
      "dates": [
        {
          "start_date": "2023-10-23",
          "end_date": "2023-11-21"
        }
      ],
      "discount": 5,
      "order_sum": 45785.25,
      "order_payed": "39690.00",
      "pay_status": "Неоплачен ч.",
      "courier_comment": "подъезд 3 этаж 3 кв 257",
      "inner_comment": "Отправил замены в вотсап, их необходимо внести"
    },
    {
      "o_id": 1460,
      "client_name": "Сечкина Евгения",
      "diets": [
        "Премиум 1200"
      ],
      "tariff": [
        "Базовый"
      ],
      "address": "Москва ленина 123 подъезд 3, этаж 5, кв. 43",
      "phone": "+7 908 511-51-51",
      "dates": [
        {
          "start_date": "2023-10-22",
          "end_date": "2023-11-20"
        }
      ],
      "discount": 0,
      "order_sum": 23994,
      "order_payed": "29875.00",
      "pay_status": "Оплачен",
      "courier_comment": "",
      "inner_comment": ""
    },
    {
      "o_id": 1459,
      "client_name": "Ревенок Алексей Сергеевич",
      "diets": [
        "Премиум 1600"
      ],
      "tariff": [
        "Базовый"
      ],
      "address": "Москва ленина 123 подъезд 3, этаж 5, кв. 43",
      "phone": "+7 908 511-51-51",
      "dates": [
        {
          "start_date": "2023-10-25",
          "end_date": "2023-12-13"
        }
      ],
      "discount": 15,
      "order_sum": 59119.4,
      "order_payed": "40016.50",
      "pay_status": "Неоплачен ч.",
      "courier_comment": "Доставка после 20:00",
      "inner_comment": ""
    },
    {
      "o_id": 1458,
      "client_name": "Тищенко Юлия",
      "diets": [
        "Премиум 2000"
      ],
      "tariff": [
        "Базовый"
      ],
      "address": "Москва ленина 123 подъезд 3, этаж 5, кв. 43",
      "phone": "+7 908 511-51-51",
      "dates": [
        {
          "start_date": "2023-10-22",
          "end_date": "2023-11-30"
        }
      ],
      "discount": 0,
      "order_sum": 33420,
      "order_payed": "41025.00",
      "pay_status": "Оплачен",
      "courier_comment": "",
      "inner_comment": ""
    },
    {
      "o_id": 1456,
      "client_name": "Исакова Ксения",
      "diets": [
        "1400 ккал"
      ],
      "tariff": [
        "Подписка 30 дней"
      ],
      "address": "Москва ленина 123 подъезд 3, этаж 5, кв. 43",
      "phone": "+7 908 511-51-51",
      "dates": [
        {
          "start_date": "2023-10-21",
          "end_date": "2023-12-19"
        }
      ],
      "discount": 0,
      "order_sum": 58379.98,
      "order_payed": "58380.00",
      "pay_status": "Оплачен",
      "courier_comment": "Домофон 12\r\nвсегда после 21,30-22.00!!\r\nУточнять выходные Предварительно надо позвонить",
      "inner_comment": "БЕЗ ПРИБОРОВ"
    },
    {
      "o_id": 1455,
      "client_name": "Маслаков Игорь",
      "diets": [
        "Премиум 1600"
      ],
      "tariff": [
        "Базовый"
      ],
      "address": "Москва ленина 123 подъезд 3, этаж 5, кв. 43",
      "phone": "+7 908 511-51-51",
      "dates": [
        {
          "start_date": "2023-10-25",
          "end_date": "2023-11-23"
        }
      ],
      "discount": 0,
      "order_sum": 38025,
      "order_payed": "33856.50",
      "pay_status": "Неоплачен ч.",
      "courier_comment": "САМОВЫВОЗ!!!",
      "inner_comment": ""
    },
    {
      "o_id": 1452,
      "client_name": "Литвиненко Ирена",
      "diets": [
        "Премиум 1200"
      ],
      "tariff": [
        "Подписка 30 дней"
      ],
      "address": "Москва ленина 123 подъезд 3, этаж 5, кв. 43",
      "phone": "+7 908 511-51-51",
      "dates": [
        {
          "start_date": "2023-11-23",
          "end_date": "2024-01-12"
        }
      ],
      "discount": 0,
      "order_sum": 31798.5,
      "order_payed": "29875.00",
      "pay_status": "Неоплачен ч.",
      "courier_comment": "с 9 до 10.00 не ПОЗЖЕ!!!!\r\nне возим в выходные и праздники",
      "inner_comment": null
    },
    {
      "o_id": 1451,
      "client_name": "Валиева Оксана",
      "diets": [
        "Премиум 1400"
      ],
      "tariff": [
        "Базовый"
      ],
      "address": "Москва ленина 123 подъезд 3, этаж 5, кв. 43",
      "phone": "+7 908 511-51-51",
      "dates": [
        {
          "start_date": "2023-10-25",
          "end_date": "2024-01-26"
        }
      ],
      "discount": 0,
      "order_sum": 54720,
      "order_payed": "0.00",
      "pay_status": "Неоплачен ч.",
      "courier_comment": "Доставка с 09.00 до 09.30.            \r\nОфис",
      "inner_comment": "уточнять насчет выходных"
    },
    {
      "o_id": 1442,
      "client_name": "Шипнягов Никита",
      "diets": [
        "Премиум 2000"
      ],
      "tariff": [
        "Базовый"
      ],
      "address": "Москва ленина 123 подъезд 3, этаж 5, кв. 43",
      "phone": "+7 908 511-51-51",
      "dates": [
        {
          "start_date": "2023-10-19",
          "end_date": "2023-11-17"
        }
      ],
      "discount": 20,
      "order_sum": 31941,
      "order_payed": "38025.00",
      "pay_status": "Оплачен",
      "courier_comment": "САМОВЫВОЗ каждое утро, в 8:30 будет приезжать",
      "inner_comment": ""
    },
    {
      "o_id": 1425,
      "client_name": "Мария Казарина",
      "diets": [
        "Премиум 900 без перекусов"
      ],
      "tariff": [
        "Базовый"
      ],
      "address": "Москва ленина 123 подъезд 3, этаж 5, кв. 43",
      "phone": "+7 908 511-51-51",
      "dates": [
        {
          "start_date": "2023-10-15",
          "end_date": "2023-11-13"
        }
      ],
      "discount": 0,
      "order_sum": 29662.5,
      "order_payed": "25425.00",
      "pay_status": "Неоплачен ч.",
      "courier_comment": "доставка до 21:00!!!",
      "inner_comment": "доставка до 21:00!!!"
    },
    {
      "o_id": 1415,
      "client_name": "Кринберг Ольга Игоревна",
      "diets": [
        "Премиум 900 без перекусов"
      ],
      "tariff": [
        "Базовый"
      ],
      "address": "Москва ленина 123 подъезд 3, этаж 5, кв. 43",
      "phone": "+7 908 511-51-51",
      "dates": [
        {
          "start_date": "2023-10-15",
          "end_date": "2023-11-13"
        }
      ],
      "discount": 0,
      "order_sum": 28815,
      "order_payed": "25425.00",
      "pay_status": "Неоплачен ч.",
      "courier_comment": "Напротив рынка Радужный, через дорогу вверх по асфальту 200 метров\r\n повесить пакет на калитку- пакетом во двор",
      "inner_comment": "без приборов. по возможности курицу заменять на рыбу( минтай или камбалу)"
    },
    {
      "o_id": 1371,
      "client_name": "Панфилова Маргарита",
      "diets": [
        "750 ккал"
      ],
      "tariff": [
        "Подписка антикризисное меню 20 дней"
      ],
      "address": "Москва ленина 123 подъезд 3, этаж 5, кв. 43",
      "phone": "+7 908 511-51-51",
      "dates": [
        {
          "start_date": "2023-10-06",
          "end_date": "2023-11-03"
        }
      ],
      "discount": 0,
      "order_sum": 24681,
      "order_payed": "16485.00",
      "pay_status": "Неоплачен ч.",
      "courier_comment": "",
      "inner_comment": ""
    },
    {
      "o_id": 1360,
      "client_name": "Филиппова Оксана",
      "diets": [
        "1400 ккал"
      ],
      "tariff": [
        "Базовый"
      ],
      "address": "Москва ленина 123 подъезд 3, этаж 5, кв. 43",
      "phone": "+7 908 511-51-51",
      "dates": [
        {
          "start_date": "2023-10-09",
          "end_date": "2023-11-17"
        }
      ],
      "discount": 25,
      "order_sum": 26740.125,
      "order_payed": "31275.00",
      "pay_status": "Оплачен",
      "courier_comment": "Позвонить, клиент встретит",
      "inner_comment": "Должна доплатить 50% 12/10"
    },
    {
      "o_id": 1354,
      "client_name": "Дроздов Вячеслав",
      "diets": [
        "900 без перекусов"
      ],
      "tariff": [
        "Подписка 30 дней"
      ],
      "address": "Москва ленина 123 подъезд 3, этаж 5, кв. 43",
      "phone": "+7 908 511-51-51",
      "dates": [
        {
          "start_date": "2023-10-06",
          "end_date": "2023-11-04"
        }
      ],
      "discount": 0,
      "order_sum": 31815,
      "order_payed": "26925.00",
      "pay_status": "Неоплачен ч.",
      "courier_comment": "только после 22:00,                                             можно созвониться и уточнить возможна ли доставка раньше.\r\n (ориентир на Учительская 12) (50 руб)\r\nВТОРНИК и СРЕДА!",
      "inner_comment": ""
    },
    {
      "o_id": 1350,
      "client_name": "Стальмошенко Наталья Валерьевна",
      "diets": [
        "1200 ккал"
      ],
      "tariff": [
        "Подписка 30 дней"
      ],
      "address": "Москва ленина 123 подъезд 3, этаж 5, кв. 43",
      "phone": "+7 908 511-51-51",
      "dates": [
        {
          "start_date": "2023-10-04",
          "end_date": "2023-11-17"
        }
      ],
      "discount": 5,
      "order_sum": 47916.82,
      "order_payed": "8956.25",
      "pay_status": "Неоплачен ч.",
      "courier_comment": "Въезд со стороны Зеленого берега.",
      "inner_comment": ""
    },
    {
      "o_id": 1340,
      "client_name": "Дмитриева Елена Николаевна",
      "diets": [
        "1200 ккал"
      ],
      "tariff": [
        "Базовый"
      ],
      "address": "Москва ленина 123 подъезд 3, этаж 5, кв. 43",
      "phone": "+7 908 511-51-51",
      "dates": [
        {
          "start_date": "2023-10-04",
          "end_date": "2023-11-17"
        }
      ],
      "discount": 25,
      "order_sum": 43537.5,
      "order_payed": "0.00",
      "pay_status": "Неоплачен ч.",
      "courier_comment": "15.10 доставка до 9:00\n\nГорького 36б, левая башня, 6 этаж, офис  I-15. С 9 до 10-будни\n  11.08  К. Либкнехта, 242 кв. 53 . после 9;30",
      "inner_comment": "28.10 заберет сама с 9-10:00"
    },
    {
      "o_id": 1318,
      "client_name": "Свиридова Ксения (@ksenisvir)",
      "diets": [
        "1200 ккал"
      ],
      "tariff": [
        "Базовый"
      ],
      "address": "Москва ленина 123 подъезд 3, этаж 5, кв. 43",
      "phone": "+7 908 511-51-51",
      "dates": [
        {
          "start_date": "2023-10-02",
          "end_date": "2023-10-31"
        }
      ],
      "discount": 20,
      "order_sum": 59510,
      "order_payed": "54300.00",
      "pay_status": "Неоплачен ч.",
      "courier_comment": "Не возим по выходным",
      "inner_comment": null
    },
    {
      "o_id": 1288,
      "client_name": "Литвиненко Ирена",
      "diets": [
        "1200 ккал"
      ],
      "tariff": [
        "Подписка 30 дней"
      ],
      "address": "Москва ленина 123 подъезд 3, этаж 5, кв. 43",
      "phone": "+7 908 511-51-51",
      "dates": [
        {
          "start_date": "2023-10-12",
          "end_date": "2023-11-10"
        }
      ],
      "discount": 0,
      "order_sum": 32895,
      "order_payed": "0.00",
      "pay_status": "Неоплачен ч.",
      "courier_comment": "с 9 до 10.00 не ПОЗЖЕ!!!!\nне возим в выходные и праздники",
      "inner_comment": null
    },
    {
      "o_id": 1275,
      "client_name": "Юлия Вяткина",
      "diets": [
        "750 ккал",
        "750 ккал",
        "750 ккал",
        "750 ккал"
      ],
      "tariff": [
        "Подписка антикризисное меню 20 дней",
        "Подписка антикризисное меню 20 дней",
        "Подписка антикризисное меню 20 дней",
        "Подписка антикризисное меню 20 дней"
      ],
      "address": "Москва ленина 123 подъезд 3, этаж 5, кв. 43",
      "phone": "+7 908 511-51-51",
      "dates": [
        {
          "start_date": "2023-09-13",
          "end_date": "2023-10-02"
        },
        {
          "start_date": "2023-10-03",
          "end_date": "2023-10-04"
        },
        {
          "start_date": "2023-09-19",
          "end_date": "2023-09-21"
        },
        {
          "start_date": "2023-10-05",
          "end_date": "2023-10-06"
        }
      ],
      "discount": 0,
      "order_sum": 12990,
      "order_payed": "0.00",
      "pay_status": "Неоплачен ч.",
      "courier_comment": "до 20:00",
      "inner_comment": "*** Заморозка заказа 28.09.2023 08:20:18 ***\r\n750 ккал (Подписка антикризисн..: 6 дней (3297 руб.)\r\n"
    },
    {
      "o_id": 1259,
      "client_name": "Тищенко Яна",
      "diets": [
        "1400 ккал"
      ],
      "tariff": [
        "Базовый"
      ],
      "address": "Москва ленина 123 подъезд 3, этаж 5, кв. 43",
      "phone": "+7 908 511-51-51",
      "dates": [
        {
          "start_date": "2023-09-10",
          "end_date": "2023-10-25"
        }
      ],
      "discount": 20,
      "order_sum": 56712,
      "order_payed": "41040.00",
      "pay_status": "Неоплачен ч.",
      "courier_comment": "",
      "inner_comment": ""
    },
    {
      "o_id": 1071,
      "client_name": "Гаськова Марина",
      "diets": [
        "900 ккал (обед-перекус2-ужин)"
      ],
      "tariff": [
        "Базовый"
      ],
      "address": "Москва ленина 123 подъезд 3, этаж 5, кв. 43",
      "phone": "+7 908 511-51-51",
      "dates": [
        {
          "start_date": "2023-10-30",
          "end_date": "2024-01-19"
        }
      ],
      "discount": 30,
      "order_sum": 58534,
      "order_payed": "0.00",
      "pay_status": "Неоплачен ч.",
      "courier_comment": "сбербанк\r\nвыходные не возим",
      "inner_comment": null
    },
    {
      "o_id": 927,
      "client_name": "Гайделенис Марина (@gaidelenis)",
      "diets": [
        "2000 ккал"
      ],
      "tariff": [
        "Базовый"
      ],
      "address": "Москва ленина 123 подъезд 3, этаж 5, кв. 43",
      "phone": "+7 908 511-51-51",
      "dates": [
        {
          "start_date": "2023-08-28",
          "end_date": "2023-11-27"
        }
      ],
      "discount": 30,
      "order_sum": 46095,
      "order_payed": "37520.00",
      "pay_status": "Неоплачен ч.",
      "courier_comment": "УТРО! 9-10.00 НЕЛЬЗЯ ОПАЗДЫВАТЬ!\r\nБАНК ВТБ 3 этаж",
      "inner_comment": "Рацион 2000"
    },
    {
      "o_id": 890,
      "client_name": "Рудых Денис",
      "diets": [
        "1800 ккал"
      ],
      "tariff": [
        "ДЕНЬ РОЖДЕНИЯ 60"
      ],
      "address": "Москва ленина 123 подъезд 3, этаж 5, кв. 43",
      "phone": "+7 908 511-51-51",
      "dates": [
        {
          "start_date": "2023-07-17",
          "end_date": "2023-09-14"
        }
      ],
      "discount": 0,
      "order_sum": 58236,
      "order_payed": "54431.00",
      "pay_status": "Неоплачен ч.",
      "courier_comment": "звонить за час",
      "inner_comment": "9 рационов заморозили 31.10, напишет когда нужно будет\r\n\r\n*** Заморозка заказа 31.10.2023 05:03:22 ***\r\nПремиум 1800 (ДЕНЬ РОЖДЕНИЯ 60): 9 дней (1000 руб.)"
    }
  ]

export default clientList