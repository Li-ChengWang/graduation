"use strict";

const osakaHomeLinks = [
  {
    label: "開啟地圖",
    url: "https://maps.app.goo.gl/rQyWe7sqBMXwYjb2A",
  },
];

const tripData = [
  {
    date: "2026-08-07",
    dateLabel: "08.07",
    weekday: "FRI · 星期五",
    title: "啟程・飛往大阪",
    route: "新竹 → 桃園  → 大阪",
    status: "confirmed",
    events: [
      {
        time: "14:00–15:00",
        title: "去桃機",
        place: "清大客運站",
        description: "搭日豪客運，從新竹出發。",
        transit: {
          from: "清大客運站",
          to: "桃園國際機場",
          duration: "約 60–90 分",
          route: "搭日豪客運直達。",
        },
        note: "不搭客運的人可自行前往",
      },
      {
        time: "15:00",
        title: "抵達桃園機場",
        place: "桃園國際機場",
        description: "辦理登機手續。",
        note: "記得帶護照",
      },
      {
        time: "18:20",
        title: "起飛",
        description: "前往關西機場。",
        note: "有飛機餐 !",
      },
      {
        time: "22:00",
        title: "抵達日本",
        place: "關西國際機場",
      },
      {
        time: "22:30–23:30",
        title: "機場接送",
        description: "搭車前往柏凱の家。",
        transit: {
          from: "關西機場",
          to: "柏凱の家",
          duration: "約 60–75 分",
          route: "機場接送直達",
        },
      },
      {
        time: "23:30–",
        title: "抵達住宿",
        place: "柏凱の家",
        description: "放行李、去便利商店買宵夜。",
        links: osakaHomeLinks,
      },
      {
        time: "24:00–",
        title: "休息",
        place: "柏凱の家",
        links: osakaHomeLinks,
      },
    ],
  },
  {
    date: "2026-08-08",
    dateLabel: "08.08",
    weekday: "SAT · 星期六",
    title: "港都神戶",
    route: "大阪 → 神戶 → 大阪",
    status: "confirmed",
    events: [
      {
        time: "09:30–11:00",
        title: "早安",
        place: "柏凱の家",
        description: "起床、準備出門。",
        links: osakaHomeLinks,
      },
      {
        time: "11:00–12:30",
        title: "午餐",
        place: "はま寿司 守口太子橋店",
        description: "吃100円壽司。", 
        transit: {
          from: "井高野站",
          to: "太子橋今市站",
          duration: "約 15 分",
          route: "今里筋線直達，出站後步行約 2 分。",
        },
        links: [
          {
            label: "開啟地圖",
            url: "https://maps.app.goo.gl/SaZ8nayMFWRQYcbeA",
          },
        ],
      },
      {
        time: "12:30–13:30",
        title: "前往神戶",
        place: "Kobe Station",
        description: "搭電車到神戶。",
        transit: {
          from: "太子橋今市站",
          to: "JR 神戶站",
          duration: "約 55–65 分",
          route: "谷町線至東梅田，轉 JR 大阪站，再搭 JR 到神戶站。",
        },
        note: "在大阪車站劃位8/9、8/11的JR黑潮號",
        links: [
          {
            label: "開啟地圖",
            url: "https://maps.app.goo.gl/MPjKJQMm6TWH7CTi8",
          },
        ],
      },
      {
        time: "13:30–17:00",
        title: "神戶亂晃",
        place: "KOBE地標",
        description: "Mosaic、海洋館與港口一帶自由走走。",
        transit: {
          from: "JR 神戶站",
          to: "KOBE地標", 
          duration: "步行約 20–25 分",
          route: "沿港邊步行，不行也得行。",
        },
        note: "記得跟牢大合照",
        links: [
          {
            label: "開啟地圖",
            url: "https://maps.app.goo.gl/FFbEu8zg9tvivFc5A",
          },
        ],
      },
      {
        time: "17:30–19:00",
        title: "晚餐 · 神戶牛燒肉",
        place: "Kobe Beef Yakiniku Okatora Sannomiya",
        description: "吃個爽的晚餐。",
        transit: {
          from: "Meriken Park",
          to: "餐廳",
          duration: "步行約 18–22 分",
          route: "往三宮方向步行，餐廳距三宮站約 2 分。",
        },
        note: "已訂位 · 17:30",
        links: [
          {
            label: "開啟地圖",
            url: "https://maps.app.goo.gl/Mj6GioNZjbojhMAt8",
          },
        ],
      },
      {
        time: "19:00–20:30",
        title: "搭車回大阪",
        place: "Itakano Station",
        description: "回井高野。",
        transit: {
          from: "JR 三ノ宮站",
          to: "井高野站",
          duration: "約 65–80 分",
          route: "搭JR至大阪，步行轉東梅田；谷町線至太子橋今市，再轉今里筋線至井高野。",
        },
        links: [
          {
            label: "開啟地圖",
            url: "https://maps.app.goo.gl/TbY3Xj38gLWTZ6nt5",
          },
        ],
      },
      {
        time: "20:30–21:30",
        title: "超市掃貨",
        place: "Konomiya",
        description: "採買隔天早餐。",
        transit: {
          from: "井高野站",
          to: "Konomiya",
          duration: "步行約 5–7 分",
          route: "超市在柏凱家附近。",
        },
        note: "隔天要出遠門，不要買易過期的",
        links: [
          {
            label: "開啟地圖",
            url: "https://maps.app.goo.gl/Hv9W92ez3hnRcA6G7",
          },
        ],
      },
      {
        time: "24:00–",
        title: "休息",
        place: "柏凱の家",
        links: osakaHomeLinks,
      },
    ],
  },
  {
    date: "2026-08-09",
    dateLabel: "08.09",
    weekday: "SUN · 星期日",
    title: "一路向腩到白濱",
    route: "大阪 → 和歌山 → 白濱",
    status: "confirmed",
    events: [
      {
        time: "08:00–09:00",
        title: "早安",
        place: "柏凱の家",
        description: "起床、帶上三天兩夜的行李以及沙灘用品。",
        note: "該帶的東西上手、注意劃位電車時間",
        links: osakaHomeLinks,
      },
      {
        time: "9:00–11:30",
        title: "前往和歌山",
        place: "Wakayama Station",
        description: "搭車到和歌山市。",
        transit: {
          from: "井高野",
          to: "JR 和歌山站",
          duration: "約 1 小時 50 分–2 小時",
          route: "搭地鐵或公車;再換JR黑潮到和歌山。",
        },
        links: [
          {
            label: "開啟地圖",
            url: "https://maps.app.goo.gl/sBpWiFCL2uaSuzwe8",
          },
        ],
      },
      {
        time: "11:30–13:00",
        title: "午餐",
        description: "在車站附近隨興吃。",
        note: "注意劃位電車時間",
        links: [
          {
            label: "附近美食",
            url: "https://tabelog.com/tw/wakayama/A3001/A300101/R10676/rstLst/?LstSmoking=0&SrtT=rt&railroad=true&svd=20260731&svps=2&svt=1900&vac_net=0",
          },
        ],
      },
      {
        time: "13:00–15:00",
        title: "前往白良濱",
        place: "Shirahama Station",
        description: "搭電車前往白濱。",
        transit: {
          from: "JR 和歌山站",
          to: "JR 白濱站",
          duration: "約 1 小時 25–35 分",
          route: "搭 JR 特急黑潮號往白濱／新宮方向；全車指定席。"
        },
        links: [
          {
            label: "開啟地圖",
            url: "https://maps.app.goo.gl/q4Sgd2aNTFkxuPLD8",
          },
        ],
      },
      {
        time: "15:00–15:30",
        title: "租車",
        place: "TOYOTA Rent a Car",
        description: "取兩台車。",
        transit: {
          from: "JR 白濱站",
          to: "TOYOTA Rent a Car",
          duration: "步行約 2–3 分",
          route: "租車店在車站旁，步行前往。",
        },
        note: "已預訂",
        links: [
          {
            label: "開啟地圖",
            url: "https://maps.app.goo.gl/TpqSwodi7R6GKCJe9",
          },
        ],
      },
      {
        time: "15:30–16:30",
        title: "三段壁洞窟",
        place: "Sandanbeki Cave",
        description: "觀光。",
        links: [
          {
            label: "開啟地圖",
            url: "https://maps.app.goo.gl/ciidCHmu1UKPDggA9",
          },
        ],
      },
      {
        time: "16:30–17:30",
        title: "採買食材",
        place: "Toretore Market / Okuwa Shirahama Katata",
        description: "買烤肉食材與隔天早餐。",
        note: "魚市場&一般超市",
        links: [
          {
            label: "開啟地圖",
            url: "https://maps.app.goo.gl/tFLSJeXQZcBf4Wtu7",
          },
        ],
      },
      {
        time: "17:30–20:30",
        title: "晚餐 · 民宿烤肉",
        place: "Suzukaze · 白濱",
        description: "Check-in、烤肉。",
        note: "21:00 前結束",
        links: [
          {
            label: "開啟地圖",
            url: "https://maps.app.goo.gl/yjXLZH9Xd55JE63T7",
          },
          {
            label: "住宿資訊",
            url: "https://resortlife.co.jp/cb-shirahama/guide/suzukaze/",
          },
        ],
      },
      {
        time: "21:00–22:00",
        title: "白濱溫泉",
        place: "Tore Tore no Yu",
        description: "泡溫泉、洗澡、柏澂的肚腩鑑賞。",
        note: "帶毛巾、浴巾",
        links: [
          {
            label: "開啟地圖",
            url: "https://maps.app.goo.gl/vbkpgTm4pWoayiEg9",
          },
        ],
      },
      {
        time: "24:00–",
        title: "休息",
        place: "Suzukaze · 白濱",
        links: [
          {
            label: "開啟地圖",
            url: "https://maps.app.goo.gl/yjXLZH9Xd55JE63T7",
          },
        ],
      },
    ],
  },
  {
    date: "2026-08-10",
    dateLabel: "08.10",
    weekday: "MON · 星期一",
    title: "那智瀑布與白濱煙火",
    route: "白濱 → 那智勝浦 → 白濱 → 紀伊田邊",
    status: "confirmed",
    footnote: "全天開車移動",
    events: [
      {
        time: "07:30–08:30",
        title: "早安",
        place: "Suzukaze · 白濱",
        description: "起床、整理退房。",
        links: [
          {
            label: "開啟地圖",
            url: "https://maps.app.goo.gl/6Lv5BtbTnpbQSxNW6",
          },
        ],
      },
      {
        time: "08:30–10:30",
        title: "前往那智瀑布",
        place: "Nachi Waterfall",
        description: "開車出發。",
        note: "東西全部帶走",
        links: [
          {
            label: "開啟地圖",
            url: "https://maps.app.goo.gl/p689KSX12zjG2mrm9",
          },
        ],
      },
      {
        time: "10:30–12:00",
        title: "那智瀑布與熊野那智大社",
        place: "Kumano Nachi Taisha",
        description: "瀑布修行、神社參觀。",
        links: [
          {
            label: "開啟地圖",
            url: "https://maps.app.goo.gl/4d4v2pfLx4LYGqjV7",
          },
        ],
      },
      {
        time: "12:30–14:00",
        title: "午餐 · 港邊海鮮",
        place: "Katsuura Gyoko Nigiwai-Ichiba",
        description: "港邊吃海鮮。",
        links: [
          {
            label: "開啟地圖",
            url: "https://maps.app.goo.gl/C9kWhYBa2CXgfbT99",
          },
        ],
      },
      {
        time: "約 1.5–2 小時",
        title: "開車回白濱",
        place: "Shirarahama Beach",
        note: "動態調整，17:00 前回到白濱町",
        links: [
          {
            label: "開啟地圖",
            url: "https://maps.app.goo.gl/JLyy94PNYQi2Q4eLA",
          },
        ],
      },
      {
        time: "時間彈性",
        title: "超市買晚餐",
        place: "Gourmet City Shirahama",
        description: "採買野餐的食物。",
        links: [
          {
            label: "開啟地圖",
            url: "https://maps.app.goo.gl/LP12YbwHocYU3v2K6",
          },
        ],
      },
      {
        time: "晚餐–20:10",
        title: "沙灘遊玩/野餐",
        place: "Shirarahama Beach",
        description: "在沙灘吃晚餐。",
        note: "跟哲哥租沙灘車",
        links: [
          {
            label: "開啟地圖",
            url: "https://maps.app.goo.gl/yMGZJy1SZd99a3xJ9",
          },
        ],
      },
      {
        time: "20:10–20:40",
        title: "白良濱煙火大會",
        place: "Shirarahama Beach",
        description: "看煙火。",
        links: [
          {
            label: "活動資訊",
            url: "https://www.japan.travel/tw/spot/2184/",
          },
        ],
      },
      {
        time: "21:00–21:30",
        title: "前往旅館",
        place: "Hotel Kii Tanabe",
        description: "Check-in。",
        links: [
          {
            label: "開啟地圖",
            url: "https://maps.app.goo.gl/G8vqokHNaLMfiRYi9",
          },
        ],
      },
      {
        time: "24:00–",
        title: "休息",
      },
    ],
  },
  {
    date: "2026-08-11",
    dateLabel: "08.11",
    weekday: "TUE · 星期二",
    title: "大鳥大社與難波",
    route: "田邊 → 大鳥 → 難波",
    status: "confirmed",
    events: [
      {
        time: "08:00–09:30",
        title: "早安",
        place: "Hotel Kii Tanabe",
        description: "起床、飯店早餐。",
        note: "賴床or吃早餐2選1",
      },
      {
        time: "09:30",
        title: "退房",
      },
      {
        time: "09:30–10:00",
        title: "還車",
        place: "Toyota Rent-a-car",
        description: "加滿油後還車。",
        note: "記得先加油",
        links: [
          {
            label: "開啟地圖",
            url: "https://maps.app.goo.gl/nFJtgeuHFVqYEHqb6",
          },
        ],
      },
      {
        time: "10:00–13:00",
        title: "返回大阪",
        place: "Ōtori Station",
        description: "前往大鳥大社一帶。",
        transit: {
          from: "JR 紀伊田邊站",
          to: "JR 鳳站",
          duration: "約 1 小時 55 分–2 小時 10 分",
          note: "注意劃位電車時間,轉車地點。",
          route: "搭全車指定席特急黑潮號至和泉府中，轉 JR 阪和線往天王寺到鳳車站。",
        },
        links: [
          {
            label: "開啟地圖",
            url: "https://maps.app.goo.gl/aym6dcNyBwwc9ayBA",
          },
        ],
      },
      {
        time: "13:00–14:30",
        title: "午餐",
        place: "New York New York",
        transit: {
          from: "JR 鳳站",
          to: "New York New York",
          duration: "步行約 2 分",
          route: "從鳳站西口步行前往。",
        },
        note: "備案：Mensho Osakaramen Shiojin Otori Honten",
        links: [
          {
            label: "主選地圖",
            url: "https://maps.app.goo.gl/HeNPCqhvnyfn3p2E9",
          },
          {
            label: "備案地圖",
            url: "https://maps.app.goo.gl/gdCtBezECy8acU6x8",
          },
        ],
      },
      {
        time: "15:00–16:30",
        title: "大鳥大社",
        place: "Otori Taisha",
        description: "神社參觀。",
        note: "買超趴御守",
        transit: {
          from: "New York New York",
          to: "大鳥大社",
          duration: "步行約 5 分",
          route: "步行前往。",
        },
        links: [
          {
            label: "開啟地圖",
            url: "https://maps.app.goo.gl/Wrm1eZm1qpyyR5Ez6",
          },
          {
            label: "景點介紹",
            url: "https://osaka-info.jp/zh-Hant-TW/spot/otoritaisha/",
          },
          {
            label: "導覽影片",
            url: "https://www.youtube.com/watch?v=owh2UXkv01M",
          },
        ],
      },
      {
        time: "16:30–17:00",
        title: "前往難波",
        place: "Osaka-Namba Station",
        description: "",
        note: "分成逛街組與卡丁車組。",
        transit: {
          from: "JR 鳳站",
          to: "難波",
          duration: "約 35–45 分",
          route: "搭 JR 或再轉地鐵都行",
        },
        links: [
          {
            label: "開啟地圖",
            url: "https://maps.app.goo.gl/anGznQSa8KcRStzP7",
          },
        ],
      },
      {
        time: "18:00–19:30",
        title: "大阪街頭卡丁車(卡丁車組限定)",
        place: "Street Kart Osaka",
        transit: {
          from: "",
          to: "四ツ橋站／Street Kart",
          duration: "",
          route: "",
        },
        note: "已預訂 · 17:30 開放報到",
        links: [
          {
            label: "開啟地圖",
            url: "https://maps.app.goo.gl/R9cMbhcpiNLUcVfB6",
          },
        ],
      },
      {
        time: "時間彈性",
        title: "晚餐",
        place: "心齋橋 / 道頓堀附近",
        description: "隨興吃。",
        links: [
          {
            label: "心齋橋一帶餐廳",
            url: "https://tabelog.com/tw/rstLst/?PG=1&from_search=&voluntary_search=1&from_search_form=1&lid=&SrtT=rt&pcd=27&LstPrf=A2701&LstAre=A270201&station_id=&Cat=&RdoCosTp=2&LstCos=0&LstCosT=5&vac_net=0&search_date=2026-7-31+%28%E6%98%9F%E6%9C%9F%E4%BA%94%29+&svd=20260731&svt=1900&svps=2&LstRev=0&LstSitu=0&LstSmoking=0",
          },
          {
            label: "難波・道頓堀餐廳",
            url: "https://tabelog.com/tw/rstLst/?PG=1&from_search=&voluntary_search=1&from_search_form=1&lid=&SrtT=rt&pcd=27&LstPrf=A2701&LstAre=A270202&station_id=0&Cat=&RdoCosTp=2&LstCos=0&LstCosT=5&vac_net=0&search_date=2026-7-31+%28%E6%98%9F%E6%9C%9F%E4%BA%94%29+&svd=20260731&svt=1900&svps=2&LstRev=0&LstSitu=0&LstSmoking=0",
          },
        ],
      },
      {
        time: "隨興回",
        title: "返回大阪住宿",
        place: "柏凱の家",
        transit: {
          from: "難波",
          to: "井高野站",
          duration: "約 36–45 分",
          route: "想辦法轉車到今里筋線再搭到井高野。",
        },
        note: "自己注意末班車",
        links: osakaHomeLinks,
      },
      {
        time: "24:00–",
        title: "休息",
      },
    ],
  },
  { 
    date: "2026-08-12",
    dateLabel: "08.12",
    weekday: "WED · 星期三",
    title: "環球影城",
    route: "大阪 → USJ → 大阪",
    status: "confirmed",
    events: [
      {
        time: "06:30–07:30",
        title: "早安",
        place: "柏凱の家",
        description: "煎熬地起床。",
        links: osakaHomeLinks,
      },
      {
        time: "07:30–08:30",
        title: "出發環球",
        place: "Universal Studios Japan",
        description: "搭電車。",
        transit: {
          from: "井高野站",
          to: "JR Universal City 站",
          duration: "約 55–65 分",
          route: "公車或地鐵，轉 JR至 Universal City 站。",
             },
        links: [
          {
            label: "開啟地圖",
            url: "https://maps.app.goo.gl/rNvBDoiWM4KfgjuP8",
          },
        ],
      },
      {
        time: "08:30 入場",
        title: "環球影城",
        description: "園區全日遊玩。",
        note: "先下載 USJ App；任天堂區需額外用 App 預約入場",
      },
      {
        time: "餓了再說",
        title: "園區午餐",
        description: "在環球影城內解決。",
        note: "芙莉蓮合作活動與主題餐廳",
        links: [
          {
            label: "合作活動",
            url: "https://www.usj.co.jp/web/zh/tw/events/universal-cool-japan-2026/frieren",
          },
        ],
      },
      {
        time: "20:00",
        title: "離開園區",
        description: "往柏凱家方向搭車。",
      },
      {
        time: "21:00–22:30",
        title: "晚餐・ 印度料理",
        place: "インドネパール料理ニューガンガ",
        description: "烤餅很屌、拉希也很屌。",
        transit: {
          from: "JR Universal City 站",
          to: "瑞光四丁目站",
          duration: "約 55–65 分",
          route: "搭JR，再轉地鐵今里筋線至瑞光四丁目；餐廳距站約 1 分。",
        },
        note: "22:30 打烊",
        links: [
          {
            label: "開啟地圖",
            url: "https://maps.app.goo.gl/YfauCjqGodx1eey49",
          },
        ],
      },
      {
        time: "22:30–",
        title: "返回住宿",
        place: "柏凱の家",
        transit: {
          from: "瑞光四丁目站",
          to: "井高野站",
          duration: "約 5–10 分",
          route: "搭今里筋線往井高野 1 站，出站後步行回住宿。",
        },
        links: osakaHomeLinks,
      },
      {
        time: "24:00–",
        title: "休息",
      },
    ],
  },
  {
    date: "2026-08-13",
    dateLabel: "08.13",
    weekday: "THU · 星期四",
    title: "奈良拜鹿 & 夜總會",
    route: "大阪 → 奈良 → 大阪",
    status: "confirmed",
    events: [
      {
        time: "08:30–09:00",
        title: "早安",
        place: "柏凱の家",
        description: "起床、準備出門。",
        links: osakaHomeLinks,
      },
      {
        time: "09:30–11:00",
        title: "搭車到奈良",
        place: "Kintetsu-Nara Station",
        description: "搭電車。",
        transit: {
          from: "井高野站",
          to: "近鐵奈良站",
          duration: "約 1 小時 05 分–1 小時 20 分",
          route: "電車或公車至近鐵奈良線再搭至近鐵奈良站。",
        },
        links: [
          {
            label: "開啟地圖",
            url: "https://maps.app.goo.gl/2H1X1jX6jQ8YkjC46",
          },
        ],
      },
      {
        time: "11:00–11:30",
        title: "東向商店街",
        place: "Higashimuki Shopping Street",
        description: "逛街、吃飯。",
        transit: {
          from: "近鐵奈良站",
          to: "東向商店街",
          duration: "步行約 1–3 分",
          route: "商店街就在車站旁，無須搭車。",
        },
        links: [
          {
            label: "開啟地圖",
            url: "https://maps.app.goo.gl/ypbRutzdCMyWa19Z7",
          },
        ],
      },
      {
        time: "11:30–13:00",
        title: "午餐 ",
        place: "近鐵奈良站周邊",
        description: "看狀況隨興吃。",
        transit: {
          from: "東向商店街",
          to: "近鐵奈良站周邊餐廳",
          duration: "步行約 3–10 分",
        },
        note: "推薦：Yamato An Kintetsu Nara",
        links: [
          {
            label: "推薦餐廳地圖",
            url: "https://maps.app.goo.gl/Pr74oVQT7bsge8Vg7",
          },
        ],
      },
      {
        time: "13:00–16:30",
        title: "奈良公園與東大寺",
        place: "Tōdai-ji",
        description: "跟鹿拜年。",
        transit: {
          from: "近鐵奈良站一帶",
          to: "東大寺",
          duration: "步行約 20–25 分",
          route: "沿奈良公園步行。",
        },
        note: "其他候選：春日大社",
        links: [
          {
            label: "開啟地圖",
            url: "https://maps.app.goo.gl/WYEN3c6JHhbNCGr39",
          },
          {
            label: "春日大社",
            url: "https://maps.app.goo.gl/7sJHofqEAU4aVDNW8",
          },
        ],
      },
      {
        time: "16:30–18:00",
        title: "車站附近下午茶",
        description: "晚餐預計9點以後，先墊胃。",
        transit: {
          from: "東大寺",
          to: "近鐵奈良站一帶",
          duration: "約 10–25 分",
          route: "可步行約 20–25 分返回；或搭公車至近鐵奈良站，車程約 5 分，另留候車時間。",
        },
        links: [
          {
            label: "附近甜點",
            url: "https://tabelog.com/tw/rstLst/?PG=1&from_search=&voluntary_search=1&from_search_form=1&lid=&SrtT=rt&pcd=29&LstPrf=A2901&LstAre=A290101&station_id=3387&Cat=SC&LstCat=0&RdoCosTp=2&LstCos=0&LstCosT=0&vac_net=0&search_date=2026-7-31+%28%E6%98%9F%E6%9C%9F%E4%BA%94%29+&svd=20260731&svt=1900&svps=2&LstRev=0&LstSitu=0&LstSmoking=0",
          },
          {
            label: "大佛布丁",
            url: "https://maps.app.goo.gl/SyfQ9Tjwnz8o6L1L6",
          },
        ],
      },
      {
        time: "18:00–19:00",
        title: "回大阪",
        place: "Kita-Shinchi Station",
        description: "搭電車。",
        transit: {
          from: "近鐵奈良站",
          to: "北新地站",
          duration: "約 55–65 分",
          route: "搭近鐵奈良線至大阪難波，轉地鐵至梅田，步行至北新地。",
        },
        links: [
          {
            label: "開啟地圖",
            url: "https://maps.app.goo.gl/JUaJkuHVCzFiVUo79",
          },
          {
            label: "法式千層酥",
            url: "https://maps.app.goo.gl/Qoi6BrK1V3KQNpTs9",
          },
        ],
      },
      {
        time: "20:10–21:00",
        title: "夜總會",
        place: "バーレスク 大阪",
        description: "修身養性。",
        transit: {
          from: "北新地站",
          to: "バーレスク 大阪",
          duration: "步行約 3 分",
          route: "北新地站步行前往。",
        },
        note: "已訂位 · 19:30 開放報到",
        links: [
          {
            label: "開啟地圖",
            url: "https://maps.app.goo.gl/pCfLuwRWrQp67SMX7",
          },
        ],
      },
      {
        time: "21:00–22:30",
        title: "晚餐 · 鰻魚飯",
        place: "Unagi Kushiyaki Izumo",
        transit: {
          from: "バーレスク 大阪",
          to: "LUCUA Osaka B2F",
          duration: "步行約 10–12 分",
          route: "往大阪站方向步行，餐廳位於 LUCUA Osaka 地下 2 樓。",
        },
        note: "可能要排隊 · 23:00 打烊",
        links: [
          {
            label: "開啟地圖",
            url: "https://maps.app.goo.gl/UzQHKRoRBRVawWJs5",
          },
        ],
      },
      {
        time: "22:30–",
        title: "返回大阪住宿",
        place: "柏凱の家",
        transit: {
          from: "東梅田站",
          to: "井高野站",
          duration: "約 40–45 分",
          route: "步行至東梅田，搭谷町線至太子橋今市，再轉今里筋線至井高野。",
        },
        links: osakaHomeLinks,
      },
      {
        time: "24:00–",
        title: "休息",
      },
    ],
  },
  {
    date: "2026-08-14",
    dateLabel: "08.14",
    weekday: "FRI · 星期五",
    title: "京都河原町・東山",
    route: "大阪 → 京都河原町・東山 → 大阪",
    status: "confirmed",
    footnote: "08/14–08/16 為盂蘭盆特別時段；Osaka Metro 與京都市巴士採假日時刻，交通時間為區間估算，出發前請再核對當班。",
    events: [
      {
        time: "08:30–09:00",
        title: "早安",
        place: "柏凱の家",
        description: "起床、準備出門。",
        links: osakaHomeLinks,
      },
      {
        time: "10:00–11:30",
        title: "前往京都河原町",
        place: "Kyoto-Kawaramachi Station",
        description: "搭電車前往京都。",
        transit: {
          from: "井高野",
          to: "京都河原町站",
          duration: "約 1 小時 20–35 分",
          route: "搭公車或地鐵，再轉阪急京都線至京都河原町。",
        },
        links: [
          {
            label: "開啟地圖",
            url: "https://maps.app.goo.gl/QTXujt1CnARrh1Z48",
          },
        ],
      },
      {
        time: "11:30–13:00",
        title: "午餐",
        place: "京都河原町站周邊",
        description: "在河原町周邊隨興吃。",
        links: [
          {
            label: "附近美食",
            url: "https://tabelog.com/tw/kyoto/A2601/A260201/R2933/rstLst/?LstCosT=4&LstSmoking=0&RdoCosTp=1&SrtT=inbound_access&railroad=true&svd=20260801&svps=2&svt=1900&vac_net=0",
          },
        ],
      },
      {
        time: "13:00–14:30",
        title: "花見小路・八坂神社・知恩院",
        place: "Yasaka Shrine",
        description: "沿祇園與東山一帶步行參觀。",
        transit: {
          from: "京都河原町站",
          to: "花見小路／八坂神社／知恩院",
          duration: "步行約 25–40 分",
          route: "穿過四條大橋後沿花見小路走向八坂神社，往北步行可到知恩院",
        },
        links: [
          {
            label: "開啟地圖",
            url: "https://maps.app.goo.gl/B4UErJHA61TVP7DWA",
          },
        ],
      },
      {
        time: "14:30–17:00",
        title: "二年坂・三年坂・清水寺",
        place: "Kiyomizu-dera",
        description: "途中可去靈山歷史館。",
        transit: {
          from: "八坂神社／知恩院",
          to: "清水寺",
          duration: "步行約 30–40 分",
          route: "經圓山公園、寧寧之道、二年坂與三年坂步行前往。",
        },
        links: [
          {
            label: "開啟地圖",
            url: "https://maps.app.goo.gl/NxcwzHjQd969WEx98",
          },
          {
            label: "靈山歷史館",
            url: "https://maps.app.goo.gl/ZwzW5gBmKNZKgXY86",
          },
        ],
      },
      {
        time: "17:30–",
        title: "晚餐",
        description: "看狀況在京都吃，或回大阪再吃。",
      },
      {
        time: "晚餐後",
        title: "返回大阪住宿",
        place: "柏凱の家",
        transit: {
          from: "京都河原町站／JR 京都站",
          to: "井高野站",
          duration: "約 1 小時 20 分–1 小時 55 分",
          route: "搭阪急或JR回去，再轉地鐵或公車回井高野。",
        },
        links: osakaHomeLinks,
      },
      {
        time: "24:00–",
        title: "休息",
      },
    ],
  },
  {
    date: "2026-08-15",
    dateLabel: "08.15",
    weekday: "SAT · 星期六",
    title: "金閣寺・二条城 & 梅田逛街",
    route: "大阪 → 京都 → 梅田 → 大阪",
    status: "confirmed",
    footnote: "08/14–08/16 為盂蘭盆特別時段；Osaka Metro 與京都市巴士採假日時刻，交通時間為區間估算，出發前請再核對當班。",
    events: [
      {
        time: "08:00–09:00",
        title: "早安",
        place: "柏凱の家",
        description: "起床、準備出門。",
        links: osakaHomeLinks,
      },
      {
        time: "09:00–11:00",
        title: "前往金閣寺",
        place: "Kinkaku-ji",
        description: "搭電車與公車前往。",
        transit: {
          from: "井高野站",
          to: "金閣寺道巴士站",
          duration: "約 1 小時 50 分–2 小時 10 分",
          route: "搭公車再轉阪急至京都再換205號公車。",
        },
        links: [
          {
            label: "開啟地圖",
            url: "https://maps.app.goo.gl/DKgbyk55yZKcEeATA",
          },
        ],
      },
      {
        time: "11:00–12:00",
        title: "金閣寺",
        description: "參觀金閣寺。",
      },
      {
        time: "12:30–14:00",
        title: "午餐",
        place: "Nijō Castle",
        description: "到二条城周邊隨興吃。",
        transit: {
          from: "金閣寺道巴士站",
          to: "二条城前巴士站",
          duration: "約 30–45 分",
          route: "搭京都市巴士 12 往四條河原町／三條京阪方向，至二条城前下車。",
        },
        links: [
          {
            label: "二条城地圖",
            url: "https://maps.app.goo.gl/MC5xTRFDeDbzrxUP9",
          },
          {
            label: "附近美食",
            url: "https://tabelog.com/tw/kyoto/A2601/A260203/R7595/rstLst/2/?LstCosT=4&LstSmoking=0&RdoCosTp=1&SrtT=rt&railroad=true&svd=20260801&svps=2&svt=1900&vac_net=0",
          },
        ],
      },
      {
        time: "14:00–16:00",
        title: "二条城",
        place: "Nijō Castle",
        description: "參觀二条城。",
        links: [
          {
            label: "開啟地圖",
            url: "https://maps.app.goo.gl/MC5xTRFDeDbzrxUP9",
          },
        ],
      },
      {
        time: "16:00–20:00",
        title: "回梅田・逛街",
        place: "Osaka Station",
        description: "回大阪車站一帶逛街。",
        transit: {
          from: "地下鐵二条城前站",
          to: "JR 大阪站",
          duration: "約 55–70 分",
          route: "搭地鐵或公車至京都站；再轉 JR到大阪站。",
        },
        links: [
          {
            label: "開啟地圖",
            url: "https://maps.app.goo.gl/T5dsnQQfMzW1iLyD6",
          },
        ],
      },
      {
        time: "20:30–22:30",
        title: "晚餐・壽喜燒吃到飽",
        place: "Niku-no-Asatsu Umeda Ohatsu Tenjin",
        description: "壽喜燒與壽司吃到飽。",
        transit: {
          from: "JR 大阪站",
          to: "Niku-no-Asatsu Umeda Ohatsu Tenjin",
          duration: "步行約 9–12 分",
          route: "餐廳距東梅田 7 號出口約 3 分。",
        },
        note: "已訂位",
        links: [
          {
            label: "開啟地圖",
            url: "https://maps.app.goo.gl/Fz6qTpBbg3PNBVQH6",
          },
        ],
      },
      {
        time: "22:30–",
        title: "返回大阪住宿",
        place: "柏凱の家",
        transit: {
          from: "東梅田站",
          to: "井高野站",
          duration: "約 35–45 分",
          route: "步行至東梅田，搭地鐵至井高野。",
        },
        links: osakaHomeLinks,
      },
      {
        time: "24:00–",
        title: "休息",
      },
    ],
  },
  {
    date: "2026-08-16",
    dateLabel: "08.16",
    weekday: "SUN · 星期日",
    title: "伏見稻荷・宇治抹茶",
    route: "大阪 → 伏見稻荷 → 宇治 → 大阪",
    status: "confirmed",
    footnote: "08/14–08/16 為盂蘭盆特別時段；Osaka Metro 採假日時刻，交通時間為區間估算，出發前請再核對當班。",
    events: [
      {
        time: "08:00–09:00",
        title: "早安",
        place: "柏凱の家",
        description: "起床、準備出門。",
        links: osakaHomeLinks,
      },
      {
        time: "09:00–10:30",
        title: "前往伏見稻荷",
        place: "Fushimi Inari Taisha",
        description: "搭電車前往伏見稻荷大社。",
        transit: {
          from: "井高野站",
          to: "伏見稻荷站",
          duration: "約 1 小時 15–30 分",
          route: "地鐵至天滿橋；步行轉京阪特急至丹波橋，再轉普通至伏見稻荷。",
        },
        links: [
          {
            label: "開啟地圖",
            url: "https://maps.app.goo.gl/H5s25DC1GfUmWvqb7",
          },
        ],
      },
      {
        time: "10:30–12:00",
        title: "伏見稻荷大社",
        description: "穿過很多鳥居。",
      },
      {
        time: "12:00–13:30",
        title: "午餐",
        place: "伏見稻荷站周邊",
        description: "伏見稻荷周邊隨興吃。",
        links: [
          {
            label: "附近美食",
            url: "https://tabelog.com/tw/kyoto/A2601/A260601/R8797/rstLst/?LstCosT=3&LstSmoking=0&RdoCosTp=1&SrtT=rt&railroad=true&svd=20260801&svps=2&svt=1900&vac_net=0",
          },
        ],
      },
      {
        time: "13:30–14:00",
        title: "前往宇治",
        place: "Uji Station",
        transit: {
          from: "JR 稻荷站",
          to: "JR 宇治站",
          duration: "約 15–25 分",
          route: " JR 稻荷站搭奈良線直達 JR 宇治站。",
        },
        links: [
          {
            label: "開啟地圖",
            url: "https://maps.app.goo.gl/wGxxv2VTF313JPq17",
          },
        ],
      },
      {
        time: "14:00–17:00",
        title: "宇治觀光・品嘗抹茶",
        place: "Uji Bridge · Byōdō-in Temple",
        description: "宇治橋、平等院與抹茶下午茶。",
        transit: {
          from: "JR 宇治站",
          to: "宇治橋／平等院",
          duration: "步行約 10–15 分",
          route: "步經宇治橋前往平等院；中村藤吉本店距車站約 1–2 分。",
        },
        links: [
          {
            label: "宇治橋・平等院",
            url: "https://maps.app.goo.gl/3yxrJzLKuKLbowAn6",
          },
          {
            label: "中村藤吉",
            url: "https://maps.app.goo.gl/CK5gJNxdk4Sdunqd7",
          },
        ],
      },
      {
        time: "17:00–18:00",
        title: "回大阪",
        place: "Osaka Station",
        description: "搭電車回大阪站。",
        transit: {
          from: "JR 宇治站",
          to: "JR 大阪站",
          duration: "約 55–70 分",
          route: "搭 JR 奈良線至京都，轉 JR 京都線至大阪。",
        },
        links: [
          {
            label: "開啟地圖",
            url: "https://maps.app.goo.gl/e3ewL9Tqz7dgV21b6",
          },
        ],
      },
      {
        time: "18:00–",
        title: "晚餐・大阪燒",
        place: "Okonomiyaki Sakura",
        description: "在新梅田食道街吃大阪燒。",
        transit: {
          from: "JR 大阪站",
          to: "Okonomiyaki Sakura",
          duration: "步行約 3–5 分",
          route: "步行前往新梅田食道街。",
        },
        note: "額外推薦：Hanadako 章魚燒",
        links: [
          {
            label: "大阪燒",
            url: "https://maps.app.goo.gl/bGM7wGdXHQeDamZn8",
          },
          {
            label: "Hanadako 章魚燒",
            url: "https://maps.app.goo.gl/isNHfEBea2z7Zoy59",
          },
        ],
      },
      {
        time: "晚餐後",
        title: "返回大阪住宿",
        place: "柏凱の家",
        transit: {
          from: "東梅田站",
          to: "井高野站",
          duration: "約 35–45 分",
          route: "步行至東梅田，搭地鐵至井高野。",
        },
        links: osakaHomeLinks,
      },
      {
        time: "24:00–",
        title: "休息",
      },
    ],
  },
  {
    date: "2026-08-17",
    dateLabel: "08.17",
    weekday: "MON · 星期一",
    title: "勝尾寺・最後採買",
    route: "大阪 → 勝尾寺 → 大阪or難波",
    status: "confirmed",
    events: [
      {
        time: "07:30–08:00",
        title: "早安",
        place: "柏凱の家",
        description: "起床、準備出門。",
        links: osakaHomeLinks,
      },
      {
        time: "08:30–10:00",
        title: "出發勝尾寺",
        place: "Katsuoji",
        transit: {
          from: "井高野站",
          to: "勝尾寺",
          duration: "約 1 小時 35–50 分",
          route: "搭地鐵至梅田站，搭御堂筋線至箕面萱野，再由 8 號乘車處搭阪急巴士 30 直達。",
        },
        links: [
          {
            label: "開啟地圖",
            url: "https://maps.app.goo.gl/UCEXQx89C9GFr89b7",
          },
        ],
      },
      {
        time: "10:00–12:00",
        title: "勝尾寺",
        description: "看一大堆柏澂",
      },
      {
        time: "12:30–14:00",
        title: "午餐",
        place: "Minoh-kayano Station",
        description: "車站附近隨興吃。",
        transit: {
          from: "勝尾寺",
          to: "箕面萱野站",
          duration: "約 25–45 分",
          route: "搭巴士回箕面萱野",
        },
        links: [
          {
            label: "開啟地圖",
            url: "https://maps.app.goo.gl/2nTZMZBDPa4xBP1Q8",
          },
          {
            label: "附近美食",
            url: "https://tabelog.com/tw/osaka/A2706/A270603/R13850/rstLst/?LstSmoking=0&SrtT=rt&railroad=true&svd=20260731&svps=2&svt=1900&vac_net=0",
          },
        ],
      },
      {
        time: "14:30–19:30",
        title: "最後採買",
        place: "大阪車站或心齋橋",
        description: "買買買。",
        note: "自己注意晚餐時間。",
        transit: {
          from: "箕面萱野站",
          to: "梅田站／心齋橋站",
          duration: "約 25–40 分",
          route: "搭御堂筋線直通，至梅田約 25–30 分、至心齋橋約 35–40 分。",
        },
        links: [
          {
            label: "參考地圖",
            url: "https://maps.app.goo.gl/fmrGdQDLzBpBgYco8or",
          },
        ],
      },
      {
        time: "20:00–21:30",
        title: "晚餐・壽司吃到飽",
        place: "Sushi Bar FUJIYAMA TOKYO Osaka Namba",
        transit: {
          from: "心齋橋／大阪站",
          to: "四ツ橋站／餐廳",
          duration: "約 5–20 分",
          route: "心齋橋可步行約 5–10 分；大阪站則由西梅田搭四つ橋線至四ツ橋，再步行前往。",
        },
        note: "已訂位 · 20:00",
        links: [
          {
            label: "開啟地圖",
            url: "https://maps.app.goo.gl/guY3YSUwAbjDeKkw6",
          },
        ],
      },
      {
        time: "21:30–22:30",
        title: "返回大阪住宿",
        place: "柏凱の家",
        transit: {
          from: "心齋橋站",
          to: "井高野站（I11）",
          duration: "約 40–50 分",
          route: "搭地鐵至井高野。",
        },
        links: osakaHomeLinks,
      },
      {
        time: "22:30–",
        title: "整理行李與打掃",
        place: "大型コインランドリーTOYOTSU",
        description: "整理行李、打掃、洗棉被。",
        transit: {
          from: "柏凱の家",
          to: "大型コインランドリーTOYOTSU",
          duration: "步行約 5–7 分",
          route: "洗衣店在附近。",
        },
        links: [
          {
            label: "開啟地圖",
            url: "https://maps.app.goo.gl/icJhfpgcDE2YcwwC7",
          },
        ],
      },
      {
        time: "完成後",
        title: "休息",
        note: "可能沒時間睡",
      },
    ],
  },
  {
    date: "2026-08-18",
    dateLabel: "08.18",
    weekday: "TUE · 星期二",
    title: "要回家了嗚嗚",
    route: "大阪 → 關西機場 → 台灣",
    status: "confirmed",
    events: [
      {
        time: "03:30–04:30",
        title: "非常煎熬地起床",
        place: "柏凱の家",
        description: "起床、最後整理。",
        note: "離開前要打掃乾淨",
        links: osakaHomeLinks,
      },
      {
        time: "04:30–05:30",
        title: "機場接送",
        description: "搭車前往關西機場第二航廈。",
        transit: {
          from: "柏凱の家",
          to: "關西機場第二航廈",
          duration: "約 60–75 分",
          route: "機場接送車直達。",
        },
      },
      {
        time: "05:30–",
        title: "辦理登機",
        place: "關西國際機場",
        description: "辦理登機手續，也能最後買お土産。",
      },
      {
        time: "07:55–",
        title: "起飛回台灣",
        note: "沒有飛機餐",
      },
    ],
  },
];

const checklistItems = [
  "謝謝你的注意",
  "護照 !!",
  "足量日幣",
  "役男出境申請",
  "Visit Japan Web入境申請",
  "旅遊不便險、平安險",
  "腦男出境申請",
  "買eSIM",
  "黃靖愉超strong",
  "日文駕照譯本（老司機們）",
  "換洗衣物(可洗衣服)",
  "三天兩夜用的包包(去和歌山)",
  "會去海灘(泳褲?、野餐墊、哲哥、防曬乳熊、沙灘玩具)",
  "個人毛巾、浴巾",
  "拖鞋",
  "牙刷、牙膏(日本買也行)",
  "小電風扇或扇子(很熱)",
  "雨傘、雨衣、陽傘",
  "領巾 !",
  "芯如超愛裕民",
  "延長線 (Maybe一間房一個)",
  "辦行動交通卡 (搭電車、便利商店買東西皆可用)",
];

const fixedExpenseItems = [
  { name: "機票", amount: 9950, category: "交通" },
  { name: "住宿", amount: 2872, category: "住宿" },
  { name: "環球影城", amount: 1959, category: "景點／門票" },
  { name: "租車", amount: 1175, category: "交通" },
  { name: "大阪機場接送", amount: 929, category: "交通" },
  { name: "關西地區鐵路周遊券", amount: 2258, category: "交通" },
];

const expenseCategories = ["餐飲", "交通", "購物", "景點／門票", "住宿", "其他"];
const expenseCurrencies = ["TWD", "JPY"];
const fixedExpenseTotal = fixedExpenseItems.reduce((sum, item) => sum + item.amount, 0);
const expenseNumberFormatter = new Intl.NumberFormat("zh-TW", {
  maximumFractionDigits: 0,
});
const converterNumberFormatter = new Intl.NumberFormat("zh-TW", {
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
});

const itineraryList = document.querySelector("#itineraryList");
const mobileDayLinks = document.querySelector("#mobileDayLinks");
const toggleAllDays = document.querySelector("#toggleAllDays");
const checklist = document.querySelector("#checklist");
const checklistProgress = document.querySelector("#checklistProgress");
const checklistProgressBar = document.querySelector("#checklistProgressBar");
const resetChecklist = document.querySelector("#resetChecklist");
const siteHeader = document.querySelector("#siteHeader");
const backToTop = document.querySelector("#backToTop");
const menuToggle = document.querySelector("#menuToggle");
const menuClose = document.querySelector("#menuClose");
const menuBackdrop = document.querySelector("#menuBackdrop");
const mobileMenu = document.querySelector("#mobileMenu");
const sectionTabs = document.querySelector("#sectionTabs");
const sectionTabLinks = [...document.querySelectorAll("[data-section-tab]")];
const sectionPanels = [...document.querySelectorAll("[data-section-panel]")];
const drawerSectionLinks = [...mobileMenu.querySelectorAll("nav a[href^='#']")];
const expenseProfileForm = document.querySelector("#expenseProfileForm");
const expenseProfileSelect = document.querySelector("#expenseProfileSelect");
const expenseNewProfileField = document.querySelector("#expenseNewProfileField");
const expenseOwnerName = document.querySelector("#expenseOwnerName");
const expenseProfileButton = document.querySelector("#expenseProfileButton");
const expenseProfileMessage = document.querySelector("#expenseProfileMessage");
const expenseLedger = document.querySelector("#expenseLedger");
const expenseActiveName = document.querySelector("#expenseActiveName");
const expenseExchangeRate = document.querySelector("#expenseExchangeRate");
const expenseFixedTotal = document.querySelector("#expenseFixedTotal");
const expenseCustomTotal = document.querySelector("#expenseCustomTotal");
const expenseEntryCount = document.querySelector("#expenseEntryCount");
const expenseGrandTotal = document.querySelector("#expenseGrandTotal");
const expenseGrandTotalHint = document.querySelector("#expenseGrandTotalHint");
const expenseEntryForm = document.querySelector("#expenseEntryForm");
const expenseDate = document.querySelector("#expenseDate");
const expenseItem = document.querySelector("#expenseItem");
const expenseCategory = document.querySelector("#expenseCategory");
const expenseCurrency = document.querySelector("#expenseCurrency");
const expenseAmount = document.querySelector("#expenseAmount");
const expenseFormMessage = document.querySelector("#expenseFormMessage");
const expenseCategorySummary = document.querySelector("#expenseCategorySummary");
const expenseHistory = document.querySelector("#expenseHistory");
const expenseEmpty = document.querySelector("#expenseEmpty");
const currencyConverterTrigger = document.querySelector("#currencyConverterTrigger");
const currencyConverterDialog = document.querySelector("#currencyConverterDialog");
const currencyConverterClose = document.querySelector("#currencyConverterClose");
const converterRate = document.querySelector("#converterRate");
const converterJpyAmount = document.querySelector("#converterJpyAmount");
const converterTwdResult = document.querySelector("#converterTwdResult");
const converterResultHint = document.querySelector("#converterResultHint");
const converterRateSource = document.querySelector("#converterRateSource");
const converterApplyRate = document.querySelector("#converterApplyRate");
const converterStatus = document.querySelector("#converterStatus");
const converterQuickAmounts = document.querySelector(".converter-quick-amounts");

const checklistStorageKey = "grad-trip-checklist-v1";
const expenseBookStorageKey = "graduation-trip-2026:personal-expenses:v1";
const converterRateStorageKey = "graduation-trip-2026:converter-rate:v1";
let menuReturnFocus = null;
let menuCloseTimer = null;
let currentDayIndex = 0;
let printOpenStates = [];
let expenseBookState = loadExpenseBookState();
let savedConverterRate = loadSavedConverterRate();

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderLinks(links = []) {
  if (!links.length) return "";

  return links
    .map(
      (link) => `
        <a
          class="map-link"
          href="${escapeHtml(link.url)}"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="${escapeHtml(link.label)}（另開新分頁）"
        >${escapeHtml(link.label)}</a>
      `,
    )
    .join("");
}

function renderTransit(transit) {
  if (!transit?.from || !transit?.to || !transit?.route) return "";

  return `
    <div class="event-transit" aria-label="交通方式">
      <span class="event-transit-label">交通</span>
      <div class="event-transit-content">
        <div class="event-transit-head">
          <strong>${escapeHtml(transit.from)} → ${escapeHtml(transit.to)}</strong>
          ${transit.duration ? `<span>${escapeHtml(transit.duration)}</span>` : ""}
        </div>
        <p>${escapeHtml(transit.route)}</p>
      </div>
    </div>
  `;
}

function renderEvent(event) {
  return `
    <li class="timeline-item">
      <span class="timeline-time">${escapeHtml(event.time || "時間彈性")}</span>
      <div class="timeline-body">
        <h4>${escapeHtml(event.title)}</h4>
        ${event.place ? `<p class="event-place">${escapeHtml(event.place)}</p>` : ""}
        ${
          event.description
            ? `<p class="event-description">${escapeHtml(event.description)}</p>`
            : ""
        }
        ${renderTransit(event.transit)}
        ${event.note ? `<p class="event-note">${escapeHtml(event.note)}</p>` : ""}
        ${renderLinks(event.links)}
      </div>
    </li>
  `;
}

function renderItinerary() {
  itineraryList.innerHTML = tripData
    .map(
      (day, index) => `
        <details class="day-card" id="day-${day.date.slice(5).replace("-", "")}" ${
          index === 0 ? "open" : ""
        }>
          <summary>
            <span class="day-index">${String(index + 1).padStart(2, "0")}</span>
            <span class="day-date">
              <strong>${escapeHtml(day.dateLabel)}</strong>
              <span>${escapeHtml(day.weekday)}</span>
            </span>
            <span class="day-title">
              <h3>${escapeHtml(day.title)}</h3>
              <p>${escapeHtml(day.route)}</p>
            </span>
            <span class="status-badge ${day.status === "planning" ? "planning" : ""}">
              ${day.status === "planning" ? "規劃中" : "已排程"}
            </span>
            <span class="day-arrow" aria-hidden="true">＋</span>
          </summary>
          <div class="day-content">
            <ol class="timeline">
              ${day.events.map(renderEvent).join("")}
            </ol>
            ${day.footnote ? `<p class="day-footnote">${escapeHtml(day.footnote)}</p>` : ""}
          </div>
        </details>
      `,
    )
    .join("");

  document.querySelectorAll(".day-card").forEach((details) => {
    details.addEventListener("toggle", updateToggleAllButton);
  });
}

function populateDayControls() {
  mobileDayLinks.innerHTML = tripData
    .map(
      (day, index) =>
        `<a href="#day-${day.date.slice(5).replace("-", "")}" data-day-index="${index}">${day.dateLabel}</a>`,
    )
    .join("");
}

function getDayCards() {
  return [...document.querySelectorAll(".day-card")];
}

function updateToggleAllButton() {
  const cards = getDayCards();
  const allOpen = cards.length > 0 && cards.every((card) => card.open);
  toggleAllDays.firstChild.textContent = allOpen ? "全部收合 " : "全部展開 ";
  toggleAllDays.querySelector("span").textContent = allOpen ? "－" : "＋";
  toggleAllDays.setAttribute("aria-expanded", String(allOpen));
}

function openDay(index, shouldScroll = true, scrollBehavior = "smooth") {
  const cards = getDayCards();
  const target = cards[index];
  if (!target) return;

  target.open = true;

  if (shouldScroll) {
    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "auto"
      : scrollBehavior;
    target.scrollIntoView({ behavior, block: "start" });
    window.setTimeout(() => {
      target.querySelector("summary")?.focus({ preventScroll: true });
    }, behavior === "smooth" ? 450 : 0);
  }
}

function updateTripStatus() {
  const now = new Date();
  const tripStart = new Date("2026-08-07T00:00:00+09:00");
  const tripEnd = new Date("2026-08-19T00:00:00+09:00");
  const dayMs = 24 * 60 * 60 * 1000;
  const statusText = document.querySelector("#tripStatus");
  const statusDate = document.querySelector("#tripStatusDate");
  const progress = document.querySelector("#tripProgress");
  let percentage = 0;

  currentDayIndex = tripData.findIndex((day, index) => {
    const start = new Date(`${day.date}T00:00:00+09:00`);
    const next =
      index === tripData.length - 1
        ? tripEnd
        : new Date(`${tripData[index + 1].date}T00:00:00+09:00`);
    return now >= start && now < next;
  });

  if (now < tripStart) {
    const daysLeft = Math.ceil((tripStart - now) / dayMs);
    statusText.textContent =
      daysLeft === 0 ? "今天出發，準備前往機場！" : `距離出發還有 ${daysLeft} 天`;
    statusDate.textContent = "AUG 07";
    currentDayIndex = 0;
  } else if (now < tripEnd) {
    const safeIndex = Math.max(0, currentDayIndex);
    statusText.textContent = `旅行第 ${safeIndex + 1} 天 · ${tripData[safeIndex].title}`;
    statusDate.textContent = tripData[safeIndex].dateLabel.replace(".", " / ");
    percentage = ((now - tripStart) / (tripEnd - tripStart)) * 100;
    openDay(safeIndex, false);
  } else {
    statusText.textContent = "旅程完成 · 腦男還在耍腦";
    statusDate.textContent = "MEMORIES";
    currentDayIndex = tripData.length - 1;
    percentage = 100;
  }

  const safePercentage = Math.min(100, Math.max(0, percentage));
  progress.setAttribute("aria-valuenow", String(Math.round(safePercentage)));
  progress.querySelector("span").style.width = `${safePercentage}%`;
}

function loadChecklistState() {
  try {
    const saved = JSON.parse(localStorage.getItem(checklistStorageKey) || "[]");
    return Array.isArray(saved) ? new Set(saved) : new Set();
  } catch {
    return new Set();
  }
}

function renderChecklist() {
  const checkedItems = loadChecklistState();

  checklist.innerHTML = checklistItems
    .map(
      (item, index) => `
        <label class="check-item">
          <input
            type="checkbox"
            value="${index}"
            ${checkedItems.has(index) ? "checked" : ""}
          />
          <span class="check-box" aria-hidden="true"></span>
          <span class="check-label">${escapeHtml(item)}</span>
        </label>
      `,
    )
    .join("");

  checklist.querySelectorAll('input[type="checkbox"]').forEach((input) => {
    input.addEventListener("change", saveChecklistState);
  });

  updateChecklistProgress();
}

function saveChecklistState() {
  const checked = [...checklist.querySelectorAll("input:checked")].map((input) =>
    Number(input.value),
  );

  try {
    localStorage.setItem(checklistStorageKey, JSON.stringify(checked));
  } catch {
    // The checklist still works for the current page if storage is unavailable.
  }

  updateChecklistProgress();
}

function updateChecklistProgress() {
  const completed = checklist.querySelectorAll("input:checked").length;
  const total = checklistItems.length;
  const percentage = total ? (completed / total) * 100 : 0;

  checklistProgress.textContent = `${completed} / ${total} 完成`;
  checklistProgressBar.style.width = `${percentage}%`;
}

function createEmptyExpenseBookState() {
  return {
    version: 1,
    activeProfileId: "",
    profiles: [],
  };
}

function generateExpenseId(prefix) {
  if (globalThis.crypto?.randomUUID) {
    return `${prefix}-${globalThis.crypto.randomUUID()}`;
  }

  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function normalizeExpenseProfileName(value) {
  return String(value || "").trim().replace(/\s+/g, " ").slice(0, 20);
}

function sanitizeExpenseEntry(entry) {
  if (!entry || typeof entry !== "object") return null;

  const item = String(entry.item || "").trim().slice(0, 40);
  const category = expenseCategories.includes(entry.category) ? entry.category : "其他";
  const currency = expenseCurrencies.includes(entry.currency) ? entry.currency : "TWD";
  const amount = Number(entry.amount);
  const date = /^\d{4}-\d{2}-\d{2}$/.test(String(entry.date || ""))
    ? String(entry.date)
    : "2026-08-07";

  if (!item || !Number.isSafeInteger(amount) || amount <= 0) return null;

  return {
    id:
      typeof entry.id === "string" && entry.id.length <= 100
        ? entry.id
        : generateExpenseId("entry"),
    item,
    category,
    currency,
    amount,
    date,
    createdAt:
      typeof entry.createdAt === "string" && Number.isFinite(Date.parse(entry.createdAt))
        ? entry.createdAt
        : `${date}T00:00:00.000Z`,
  };
}

function sanitizeExpenseProfile(profile) {
  if (!profile || typeof profile !== "object") return null;

  const name = normalizeExpenseProfileName(profile.name);
  if (!name) return null;

  const parsedRate = Number(profile.exchangeRate);
  const exchangeRate =
    profile.exchangeRate !== null &&
    profile.exchangeRate !== "" &&
    Number.isFinite(parsedRate) &&
    parsedRate > 0 &&
    parsedRate <= 10
      ? parsedRate
      : null;

  const expenses = Array.isArray(profile.expenses)
    ? profile.expenses.map(sanitizeExpenseEntry).filter(Boolean)
    : [];

  return {
    id:
      typeof profile.id === "string" && profile.id.length <= 100
        ? profile.id
        : generateExpenseId("profile"),
    name,
    exchangeRate,
    expenses,
  };
}

function loadExpenseBookState() {
  try {
    const parsed = JSON.parse(localStorage.getItem(expenseBookStorageKey) || "null");
    if (!parsed || parsed.version !== 1 || !Array.isArray(parsed.profiles)) {
      return createEmptyExpenseBookState();
    }

    const seenIds = new Set();
    const profiles = parsed.profiles
      .map(sanitizeExpenseProfile)
      .filter((profile) => {
        if (!profile || seenIds.has(profile.id)) return false;
        seenIds.add(profile.id);
        return true;
      });
    const activeProfileId = profiles.some(
      (profile) => profile.id === parsed.activeProfileId,
    )
      ? parsed.activeProfileId
      : profiles[0]?.id || "";

    return { version: 1, activeProfileId, profiles };
  } catch {
    return createEmptyExpenseBookState();
  }
}

function setExpenseMessage(element, message = "", type = "") {
  element.textContent = message;
  element.classList.remove("error", "success");
  if (type) element.classList.add(type);
}

function saveExpenseBookState(messageElement = expenseFormMessage) {
  try {
    localStorage.setItem(expenseBookStorageKey, JSON.stringify(expenseBookState));
    return true;
  } catch {
    setExpenseMessage(
      messageElement,
      "這筆資料目前只能暫存在頁面中，瀏覽器無法永久儲存。",
      "error",
    );
    return false;
  }
}

function getActiveExpenseProfile() {
  return (
    expenseBookState.profiles.find(
      (profile) => profile.id === expenseBookState.activeProfileId,
    ) || null
  );
}

function formatExpenseAmount(amount, currency) {
  const formatted = expenseNumberFormatter.format(amount);
  return currency === "JPY" ? `¥ ${formatted}` : `NT$ ${formatted}`;
}

function getDefaultExpenseDate() {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Tokyo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })
    .formatToParts(new Date())
    .reduce((result, part) => {
      result[part.type] = part.value;
      return result;
    }, {});
  const today = `${parts.year}-${parts.month}-${parts.day}`;

  return today >= "2026-08-07" && today <= "2026-08-18"
    ? today
    : "2026-08-07";
}

function syncExpenseProfileForm() {
  const isNewProfile = expenseProfileSelect.value === "__new__";
  expenseNewProfileField.hidden = !isNewProfile;
  expenseOwnerName.required = isNewProfile;
  expenseProfileButton.textContent = isNewProfile ? "建立帳本" : "開啟帳本";
}

function populateExpenseProfiles() {
  const newProfileOption = document.createElement("option");
  newProfileOption.value = "__new__";
  newProfileOption.textContent = "＋ 新增帳本";
  expenseProfileSelect.replaceChildren(newProfileOption);

  expenseBookState.profiles.forEach((profile) => {
    const option = document.createElement("option");
    option.value = profile.id;
    option.textContent = profile.name;
    expenseProfileSelect.append(option);
  });

  expenseProfileSelect.value = getActiveExpenseProfile()?.id || "__new__";
  syncExpenseProfileForm();
}

function calculateExpenseTotals(profile) {
  return profile.expenses.reduce(
    (totals, entry) => {
      totals[entry.currency] += entry.amount;
      return totals;
    },
    { TWD: 0, JPY: 0 },
  );
}

function renderExpenseCategorySummary(profile) {
  const totals = new Map(
    expenseCategories.map((category) => [category, { TWD: 0, JPY: 0 }]),
  );

  fixedExpenseItems.forEach((item) => {
    totals.get(item.category).TWD += item.amount;
  });
  profile.expenses.forEach((entry) => {
    totals.get(entry.category)[entry.currency] += entry.amount;
  });

  expenseCategorySummary.innerHTML = expenseCategories
    .map((category) => {
      const value = totals.get(category);
      if (!value.TWD && !value.JPY) return "";
      const amounts = [
        value.TWD ? formatExpenseAmount(value.TWD, "TWD") : "",
        value.JPY ? formatExpenseAmount(value.JPY, "JPY") : "",
      ].filter(Boolean);
      return `<span class="category-total-chip">${escapeHtml(category)} · ${escapeHtml(
        amounts.join(" / "),
      )}</span>`;
    })
    .join("");
}

function renderExpenseHistory(profile) {
  const entries = [...profile.expenses].sort((a, b) => {
    const dateComparison = b.date.localeCompare(a.date);
    return dateComparison || b.createdAt.localeCompare(a.createdAt);
  });

  expenseHistory.innerHTML = entries
    .map(
      (entry) => `
        <li class="expense-history-item">
          <div class="expense-history-info">
            <div class="expense-history-meta">
              <span>${escapeHtml(entry.category)}</span>
              <time datetime="${escapeHtml(entry.date)}">${escapeHtml(
                entry.date.replaceAll("-", "."),
              )}</time>
            </div>
            <strong>${escapeHtml(entry.item)}</strong>
          </div>
          <strong class="expense-history-amount">${escapeHtml(
            formatExpenseAmount(entry.amount, entry.currency),
          )}</strong>
          <button
            class="expense-delete"
            type="button"
            data-expense-id="${escapeHtml(entry.id)}"
            aria-label="刪除 ${escapeHtml(entry.item)}"
          >刪除</button>
        </li>
      `,
    )
    .join("");

  expenseHistory.hidden = entries.length === 0;
  expenseEmpty.hidden = entries.length > 0;
}

function renderExpenseBook() {
  const profile = getActiveExpenseProfile();
  if (!profile) {
    expenseLedger.hidden = true;
    return;
  }

  const customTotals = calculateExpenseTotals(profile);
  const totalTwd = fixedExpenseTotal + customTotals.TWD;
  expenseLedger.hidden = false;
  expenseActiveName.textContent = profile.name;
  expenseExchangeRate.value = profile.exchangeRate ?? "";
  expenseFixedTotal.textContent = formatExpenseAmount(fixedExpenseTotal, "TWD");
  expenseCustomTotal.textContent = `${formatExpenseAmount(
    customTotals.TWD,
    "TWD",
  )} · ${formatExpenseAmount(customTotals.JPY, "JPY")}`;
  expenseEntryCount.textContent = `${profile.expenses.length} 筆紀錄`;

  if (profile.exchangeRate && customTotals.JPY > 0) {
    const estimatedTotal = Math.round(totalTwd + customTotals.JPY * profile.exchangeRate);
    expenseGrandTotal.textContent = formatExpenseAmount(estimatedTotal, "TWD");
    expenseGrandTotalHint.textContent = `含 ${formatExpenseAmount(
      customTotals.JPY,
      "JPY",
    )}，以 ¥1 = NT$ ${profile.exchangeRate} 估算並四捨五入`;
  } else if (customTotals.JPY > 0) {
    expenseGrandTotal.textContent = `${formatExpenseAmount(
      totalTwd,
      "TWD",
    )} + ${formatExpenseAmount(customTotals.JPY, "JPY")}`;
    expenseGrandTotalHint.textContent = "輸入日圓匯率後可換算為單一台幣總額";
  } else {
    expenseGrandTotal.textContent = formatExpenseAmount(totalTwd, "TWD");
    expenseGrandTotalHint.textContent = "目前沒有日圓支出";
  }

  renderExpenseCategorySummary(profile);
  renderExpenseHistory(profile);
}

function initializeExpenseBook() {
  expenseDate.value = getDefaultExpenseDate();
  populateExpenseProfiles();
  renderExpenseBook();
}

function loadSavedConverterRate() {
  try {
    const rate = Number(localStorage.getItem(converterRateStorageKey));
    return Number.isFinite(rate) && rate > 0 && rate <= 10 ? rate : null;
  } catch {
    return null;
  }
}

function saveConverterRate(rate) {
  savedConverterRate = rate;
  try {
    localStorage.setItem(converterRateStorageKey, String(rate));
    return true;
  } catch {
    setExpenseMessage(
      converterStatus,
      "瀏覽器無法保存匯率，但目前仍可繼續換算。",
      "error",
    );
    return false;
  }
}

function getValidConverterRate() {
  const rate = Number(converterRate.value);
  return Number.isFinite(rate) && rate > 0 && rate <= 10 ? rate : null;
}

function updateCurrencyConversion() {
  const rate = getValidConverterRate();
  const rawAmount = converterJpyAmount.value.trim();
  const amount = Number(rawAmount);

  if (!rate) {
    converterTwdResult.textContent = "NT$ —";
    converterResultHint.textContent = "請先輸入有效的換匯匯率";
    return;
  }
  if (!rawAmount) {
    converterTwdResult.textContent = "NT$ —";
    converterResultHint.textContent = "請輸入要換算的日圓金額";
    return;
  }
  if (!Number.isSafeInteger(amount) || amount < 0 || amount > 1_000_000_000_000) {
    converterTwdResult.textContent = "NT$ —";
    converterResultHint.textContent = "請輸入有效的日圓金額";
    return;
  }

  const converted = amount * rate;
  converterTwdResult.textContent = `≈ NT$ ${converterNumberFormatter.format(converted)}`;
  converterResultHint.textContent = `${formatExpenseAmount(
    amount,
    "JPY",
  )} × ${rate}`;
}

function refreshConverterRateSource() {
  const profile = getActiveExpenseProfile();
  converterApplyRate.hidden = !profile;
  converterApplyRate.textContent = profile
    ? `將此匯率套用到「${profile.name}」帳本`
    : "";

  if (profile?.exchangeRate && Number(converterRate.value) === profile.exchangeRate) {
    converterRateSource.textContent = `已帶入「${profile.name}」帳本的匯率。`;
  } else if (savedConverterRate) {
    converterRateSource.textContent = "已帶入這台裝置上次使用的匯率。";
  } else {
    converterRateSource.textContent = "請依自己的實際換匯價格輸入匯率。";
  }
}

function openCurrencyConverter() {
  const profile = getActiveExpenseProfile();
  const preferredRate = profile?.exchangeRate || savedConverterRate;
  if (preferredRate) converterRate.value = String(preferredRate);

  setExpenseMessage(converterStatus);
  refreshConverterRateSource();
  updateCurrencyConversion();
  currencyConverterDialog.showModal();
  currencyConverterTrigger.setAttribute("aria-expanded", "true");
  document.body.classList.add("converter-open");

  window.setTimeout(() => {
    (converterRate.value ? converterJpyAmount : converterRate).focus();
  }, 0);
}

function closeCurrencyConverter() {
  if (currencyConverterDialog.open) currencyConverterDialog.close();
}

function resetCurrencyConverterState() {
  currencyConverterTrigger.setAttribute("aria-expanded", "false");
  document.body.classList.remove("converter-open");
}

function getFocusableElements(container) {
  return [
    ...container.querySelectorAll(
      'a[href], button:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',
    ),
  ].filter((element) => !element.hidden);
}

function openMenu() {
  window.clearTimeout(menuCloseTimer);
  menuReturnFocus = document.activeElement;
  mobileMenu.hidden = false;
  menuBackdrop.hidden = false;
  mobileMenu.setAttribute("aria-hidden", "false");
  menuToggle.setAttribute("aria-expanded", "true");
  menuToggle.setAttribute("aria-label", "關閉導覽選單");
  document.body.classList.add("menu-open");
  window.requestAnimationFrame(() => {
    mobileMenu.classList.add("is-open");
    menuBackdrop.classList.add("is-open");
    menuClose.focus();
  });
}

function closeMenu(restoreFocus = true) {
  if (mobileMenu.hidden) return;

  mobileMenu.classList.remove("is-open");
  menuBackdrop.classList.remove("is-open");
  mobileMenu.setAttribute("aria-hidden", "true");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "打開導覽選單");
  document.body.classList.remove("menu-open");

  if (restoreFocus && menuReturnFocus instanceof HTMLElement) {
    menuReturnFocus.focus();
  }

  menuCloseTimer = window.setTimeout(() => {
    if (!mobileMenu.classList.contains("is-open")) {
      mobileMenu.hidden = true;
      menuBackdrop.hidden = true;
    }
  }, 230);
}

function handleMenuKeydown(event) {
  if (event.key === "Escape") {
    closeMenu();
    return;
  }

  if (event.key !== "Tab") return;

  const focusable = getFocusableElements(mobileMenu);
  if (!focusable.length) return;

  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

function normalizeRouteHash(hash = window.location.hash) {
  let route = String(hash).replace(/^#/, "");
  try {
    route = decodeURIComponent(route);
  } catch {
    // Keep the original value when the URL contains malformed encoding.
  }
  return route.replace(/^\/+/, "").replace(/\/+$/, "");
}

function getDayRoute(index) {
  const day = tripData[index];
  return day ? `day-${day.date.slice(5).replace("-", "")}` : "";
}

function getDayIndexFromRoute(route) {
  return tripData.findIndex((_, index) => getDayRoute(index) === route);
}

function getSectionIdForRoute(route) {
  if (sectionPanels.some((panel) => panel.dataset.sectionPanel === route)) return route;
  return getDayIndexFromRoute(route) >= 0 ? "itinerary" : null;
}

function keepActiveSectionTabVisible(activeTab) {
  const track = sectionTabs.querySelector(".section-tabs-inner");
  if (!track || track.scrollWidth <= track.clientWidth) return;

  const tabLeft = activeTab.offsetLeft;
  const tabRight = tabLeft + activeTab.offsetWidth;
  const viewLeft = track.scrollLeft;
  const viewRight = viewLeft + track.clientWidth;
  let nextLeft = null;

  if (tabLeft < viewLeft) nextLeft = Math.max(0, tabLeft - 14);
  if (tabRight > viewRight) nextLeft = tabRight - track.clientWidth + 14;
  if (nextLeft === null) return;

  track.scrollTo({
    left: nextLeft,
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "auto"
      : "smooth",
  });
}

function updateSectionNavigation(sectionId) {
  sectionTabLinks.forEach((link) => {
    if (link.dataset.sectionTab === sectionId) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });

  drawerSectionLinks.forEach((link) => {
    const linkSectionId = normalizeRouteHash(link.getAttribute("href"));
    if (linkSectionId === sectionId) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });

  const activeTab = sectionTabLinks.find((link) => link.dataset.sectionTab === sectionId);
  if (activeTab) window.requestAnimationFrame(() => keepActiveSectionTabVisible(activeTab));
}

function activateSection(sectionId) {
  if (!getSectionIdForRoute(sectionId) || getDayIndexFromRoute(sectionId) >= 0) return false;

  sectionPanels.forEach((panel) => {
    panel.hidden = panel.dataset.sectionPanel !== sectionId;
  });
  updateSectionNavigation(sectionId);
  return true;
}

function scrollToSection(sectionId, { behavior = "smooth", focus = false } = {}) {
  const panel = sectionPanels.find((item) => item.dataset.sectionPanel === sectionId);
  if (!panel) return;

  const preferredBehavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ? "auto"
    : behavior;
  window.requestAnimationFrame(() => {
    panel.scrollIntoView({ behavior: preferredBehavior, block: "start" });
    if (!focus) return;

    window.setTimeout(() => {
      const heading = panel.querySelector("h2");
      if (heading) {
        heading.setAttribute("tabindex", "-1");
        heading.focus({ preventScroll: true });
      } else {
        panel.focus({ preventScroll: true });
      }
    }, preferredBehavior === "smooth" ? 420 : 0);
  });
}

function pushRoute(route) {
  const canonicalHash = `#${route}`;
  if (window.location.hash === canonicalHash) return;
  window.history.pushState(null, "", canonicalHash);
}

function navigateToSection(sectionId, { focus = false } = {}) {
  if (!activateSection(sectionId)) return;
  pushRoute(sectionId);
  scrollToSection(sectionId, { focus });
}

function navigateToDay(index) {
  const route = getDayRoute(index);
  if (!route) return;

  activateSection("itinerary");
  pushRoute(route);
  window.requestAnimationFrame(() => openDay(index));
}

function syncSectionFromLocation({ initial = false, scroll = false } = {}) {
  const route = normalizeRouteHash();

  if (!route) {
    activateSection("itinerary");
    return;
  }

  const sectionId = getSectionIdForRoute(route);
  if (!sectionId) {
    if (initial) activateSection("itinerary");
    return;
  }

  activateSection(sectionId);
  const dayIndex = getDayIndexFromRoute(route);
  if (dayIndex >= 0) {
    window.requestAnimationFrame(() => openDay(dayIndex, scroll, initial ? "auto" : "smooth"));
  } else if (scroll) {
    scrollToSection(sectionId, { behavior: initial ? "auto" : "smooth" });
  }
}

function initializeSectionNavigation() {
  const route = normalizeRouteHash();
  const hasRecognizedRoute = Boolean(getSectionIdForRoute(route));
  syncSectionFromLocation({ initial: true, scroll: hasRecognizedRoute });
}

function handleScroll() {
  const isScrolled = window.scrollY > 24;
  siteHeader.classList.toggle("scrolled", isScrolled);
  backToTop.classList.toggle("visible", window.scrollY > 640);
}

renderItinerary();
populateDayControls();
renderChecklist();
initializeExpenseBook();
updateTripStatus();
updateToggleAllButton();
initializeSectionNavigation();
handleScroll();

toggleAllDays.addEventListener("click", () => {
  const cards = getDayCards();
  const shouldOpen = !cards.every((card) => card.open);
  cards.forEach((card) => {
    card.open = shouldOpen;
  });
  updateToggleAllButton();
});

resetChecklist.addEventListener("click", () => {
  checklist.querySelectorAll("input").forEach((input) => {
    input.checked = false;
  });
  try {
    localStorage.removeItem(checklistStorageKey);
  } catch {
    // Nothing else is needed when storage is unavailable.
  }
  updateChecklistProgress();
});

expenseProfileSelect.addEventListener("change", () => {
  syncExpenseProfileForm();
  setExpenseMessage(expenseProfileMessage);

  if (expenseProfileSelect.value === "__new__") {
    expenseLedger.hidden = true;
    expenseOwnerName.focus();
    return;
  }

  const selectedProfile = expenseBookState.profiles.find(
    (profile) => profile.id === expenseProfileSelect.value,
  );
  if (!selectedProfile) return;

  expenseBookState.activeProfileId = selectedProfile.id;
  const wasSaved = saveExpenseBookState(expenseProfileMessage);
  renderExpenseBook();
  if (wasSaved) {
    setExpenseMessage(
      expenseProfileMessage,
      `已切換到「${selectedProfile.name}」帳本。`,
      "success",
    );
  }
});

expenseProfileForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let profile = null;

  if (expenseProfileSelect.value === "__new__") {
    const name = normalizeExpenseProfileName(expenseOwnerName.value);
    if (!name) {
      setExpenseMessage(expenseProfileMessage, "請先輸入名字或暱稱。", "error");
      expenseOwnerName.focus();
      return;
    }

    profile = expenseBookState.profiles.find(
      (item) => item.name.toLocaleLowerCase("zh-Hant") === name.toLocaleLowerCase("zh-Hant"),
    );
    if (!profile) {
      profile = {
        id: generateExpenseId("profile"),
        name,
        exchangeRate: null,
        expenses: [],
      };
      expenseBookState.profiles.push(profile);
    }
    expenseOwnerName.value = "";
  } else {
    profile = expenseBookState.profiles.find(
      (item) => item.id === expenseProfileSelect.value,
    );
  }

  if (!profile) {
    setExpenseMessage(expenseProfileMessage, "找不到這份帳本，請重新選擇。", "error");
    return;
  }

  expenseBookState.activeProfileId = profile.id;
  const wasSaved = saveExpenseBookState(expenseProfileMessage);
  populateExpenseProfiles();
  renderExpenseBook();
  if (wasSaved) {
    setExpenseMessage(expenseProfileMessage, `已開啟「${profile.name}」帳本。`, "success");
  }
  expenseItem.focus();
});

expenseExchangeRate.addEventListener("change", () => {
  const profile = getActiveExpenseProfile();
  if (!profile) return;

  const rawValue = expenseExchangeRate.value.trim();
  if (!rawValue) {
    profile.exchangeRate = null;
  } else {
    const rate = Number(rawValue);
    if (!Number.isFinite(rate) || rate <= 0 || rate > 10) {
      setExpenseMessage(expenseFormMessage, "請輸入有效的日圓換算匯率。", "error");
      expenseExchangeRate.focus();
      return;
    }
    profile.exchangeRate = rate;
  }

  const wasSaved = saveExpenseBookState(expenseFormMessage);
  renderExpenseBook();
  if (wasSaved) {
    setExpenseMessage(expenseFormMessage, "匯率已更新。", "success");
  }
});

expenseEntryForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const profile = getActiveExpenseProfile();
  if (!profile) {
    setExpenseMessage(expenseFormMessage, "請先建立或開啟一份帳本。", "error");
    return;
  }

  const item = expenseItem.value.trim();
  const amount = Number(expenseAmount.value);
  const date = expenseDate.value;
  const category = expenseCategory.value;
  const currency = expenseCurrency.value;

  if (!item) {
    setExpenseMessage(expenseFormMessage, "請輸入支出項目。", "error");
    expenseItem.focus();
    return;
  }
  if (!Number.isSafeInteger(amount) || amount <= 0 || amount > 1_000_000_000) {
    setExpenseMessage(expenseFormMessage, "金額請輸入 1 以上的正整數。", "error");
    expenseAmount.focus();
    return;
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    setExpenseMessage(expenseFormMessage, "請選擇支出日期。", "error");
    expenseDate.focus();
    return;
  }
  if (!expenseCategories.includes(category) || !expenseCurrencies.includes(currency)) {
    setExpenseMessage(expenseFormMessage, "分類或幣別不正確，請重新選擇。", "error");
    return;
  }

  profile.expenses.push({
    id: generateExpenseId("entry"),
    item: item.slice(0, 40),
    amount,
    date,
    category,
    currency,
    createdAt: new Date().toISOString(),
  });

  const wasSaved = saveExpenseBookState(expenseFormMessage);
  renderExpenseBook();
  expenseItem.value = "";
  expenseAmount.value = "";
  if (wasSaved) {
    setExpenseMessage(expenseFormMessage, `已加入「${item.slice(0, 40)}」。`, "success");
  }
  expenseItem.focus();
});

expenseHistory.addEventListener("click", (event) => {
  const button = event.target.closest("[data-expense-id]");
  if (!button) return;

  const profile = getActiveExpenseProfile();
  const entry = profile?.expenses.find((item) => item.id === button.dataset.expenseId);
  if (!profile || !entry) return;
  if (!window.confirm(`確定要刪除「${entry.item}」嗎？`)) return;

  profile.expenses = profile.expenses.filter((item) => item.id !== entry.id);
  const wasSaved = saveExpenseBookState(expenseFormMessage);
  renderExpenseBook();
  if (wasSaved) {
    setExpenseMessage(expenseFormMessage, `已刪除「${entry.item}」。`, "success");
  }
  expenseItem.focus();
});

currencyConverterTrigger.addEventListener("click", openCurrencyConverter);
currencyConverterClose.addEventListener("click", closeCurrencyConverter);

converterRate.addEventListener("input", updateCurrencyConversion);
converterJpyAmount.addEventListener("input", updateCurrencyConversion);

converterRate.addEventListener("change", () => {
  const rate = getValidConverterRate();
  if (!converterRate.value.trim()) {
    setExpenseMessage(converterStatus);
    updateCurrencyConversion();
    return;
  }
  if (!rate) {
    setExpenseMessage(converterStatus, "請輸入有效的換匯匯率。", "error");
    converterRate.focus();
    return;
  }

  if (saveConverterRate(rate)) {
    setExpenseMessage(converterStatus, "已記住這個換匯匯率。", "success");
  }
  refreshConverterRateSource();
  updateCurrencyConversion();
});

converterQuickAmounts.addEventListener("click", (event) => {
  const button = event.target.closest("[data-converter-amount]");
  if (!button) return;
  converterJpyAmount.value = button.dataset.converterAmount;
  updateCurrencyConversion();
});

converterApplyRate.addEventListener("click", () => {
  const profile = getActiveExpenseProfile();
  const rate = getValidConverterRate();
  if (!profile) {
    setExpenseMessage(converterStatus, "目前沒有開啟的個人帳本。", "error");
    return;
  }
  if (!rate) {
    setExpenseMessage(converterStatus, "請先輸入有效的換匯匯率。", "error");
    converterRate.focus();
    return;
  }

  profile.exchangeRate = rate;
  saveConverterRate(rate);
  const wasSaved = saveExpenseBookState(converterStatus);
  renderExpenseBook();
  refreshConverterRateSource();
  if (wasSaved) {
    setExpenseMessage(
      converterStatus,
      `已將匯率套用到「${profile.name}」帳本。`,
      "success",
    );
  }
});

currencyConverterDialog.addEventListener("click", (event) => {
  if (event.target === currencyConverterDialog) closeCurrencyConverter();
});

currencyConverterDialog.addEventListener("cancel", resetCurrencyConverterState);

currencyConverterDialog.addEventListener("close", () => {
  resetCurrencyConverterState();
  currencyConverterTrigger.focus();
});

sectionTabs.addEventListener("click", (event) => {
  const link = event.target.closest("[data-section-tab]");
  if (!link) return;

  event.preventDefault();
  navigateToSection(link.dataset.sectionTab);
});

menuToggle.addEventListener("click", () => {
  if (mobileMenu.hidden) {
    openMenu();
  } else {
    closeMenu();
  }
});
menuClose.addEventListener("click", () => closeMenu());
menuBackdrop.addEventListener("click", () => closeMenu());
mobileMenu.addEventListener("keydown", handleMenuKeydown);
drawerSectionLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    closeMenu();
    navigateToSection(normalizeRouteHash(link.getAttribute("href")), { focus: true });
  });
});
mobileDayLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const dayIndex = Number(event.currentTarget.dataset.dayIndex);
    closeMenu();
    navigateToDay(dayIndex);
  });
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
window.addEventListener("scroll", handleScroll, { passive: true });
window.addEventListener("hashchange", () => syncSectionFromLocation({ scroll: true }));
window.addEventListener("popstate", () => syncSectionFromLocation({ scroll: true }));

window.addEventListener("storage", (event) => {
  if (event.key === expenseBookStorageKey) {
    expenseBookState = loadExpenseBookState();
    populateExpenseProfiles();
    renderExpenseBook();
    setExpenseMessage(
      expenseProfileMessage,
      "帳本已同步這個瀏覽器中其他分頁的變更。",
      "success",
    );
  }

  if (event.key === converterRateStorageKey) {
    savedConverterRate = loadSavedConverterRate();
  }
});

window.addEventListener("beforeprint", () => {
  const cards = getDayCards();
  printOpenStates = cards.map((card) => card.open);
  cards.forEach((card) => {
    card.open = true;
  });
});

window.addEventListener("afterprint", () => {
  getDayCards().forEach((card, index) => {
    card.open = printOpenStates[index] ?? false;
  });
});
