import { v4 as uuid } from "uuid";

export const categories = [
  {
    id: 1,
    name: "Face"
  },
  {
    id: 2,
    name: "Eyes"
  },
  {
    id: 3,
    name: "Lips"
  },
  {
    id: 4,
    name: "Brushes and tools"
  },
  {
    id: 5,
    name: "Best products"
  }
];

export const videoList = [
  {
    title: "MY SIGNATURE MAKEUP LOOK | Malvika Sitlani",
    url: "Gw2DiGhSKlY",
    channel: {
      name: "Malvika Sitlani",
      thumbnail:
        "AAUvwnhZaMoCC9iKvXOVDNBxDA-pbG4LFO1GSZ18Bhnr4IQ=s68-c-k-c0x00ffffff-no-rj"
    },
    duration: "12:51",
    publishDate: "Feb 8, 2018",
    category: [
      {
        id: 1,
        name: "Face"
      }
    ]
  },
  {
    title:
      "Easy Fresh Face Makeup | How to use Lip & Cheek Tints? | Malvika Sitlani Aryan",
    url: "fOgeGeyZXs8",
    channel: {
      name: "Malvika Sitlani",
      thumbnail:
        "AAUvwnhZaMoCC9iKvXOVDNBxDA-pbG4LFO1GSZ18Bhnr4IQ=s68-c-k-c0x00ffffff-no-rj"
    },
    duration: "25:18",
    publishDate: "Feb 4, 2021",
    category: [
      {
        id: 1,
        name: "Face"
      },
      {
        id: 3,
        name: "Lips"
      }
    ]
  },
  {
    title: "Drab to Fab in 5 mins! | Office Makeup | Malvika Sitlani",
    url: "JAgmwmJCbGU",
    channel: {
      name: "Malvika Sitlani",
      thumbnail:
        "AAUvwnhZaMoCC9iKvXOVDNBxDA-pbG4LFO1GSZ18Bhnr4IQ=s68-c-k-c0x00ffffff-no-rj"
    },
    duration: "7:47",
    publishDate: "Oct 21, 2018",
    category: [
      {
        id: 1,
        name: "Face"
      }
    ]
  },
  {
    title: "Make-up KIT for beginners! | Drugstore | Malvika Sitlani",
    url: "A_TtphQ7PuU",
    channel: {
      name: "Malvika Sitlani",
      thumbnail:
        "AAUvwnhZaMoCC9iKvXOVDNBxDA-pbG4LFO1GSZ18Bhnr4IQ=s68-c-k-c0x00ffffff-no-rj"
    },
    duration: "6:12",
    publishDate: "Mar 4, 2017",
    category: [
      {
        id: 4,
        name: "Brushes and tools"
      },
      {
        id: 5,
        name: "Best products"
      }
    ]
  },
  {
    title: "TOP AFFORDABLE MAKEUP PRODUCTS ! Malvika Sitlani",
    url: "k4TJDYrLz8M",
    channel: {
      name: "Malvika Sitlani",
      thumbnail:
        "AAUvwnhZaMoCC9iKvXOVDNBxDA-pbG4LFO1GSZ18Bhnr4IQ=s68-c-k-c0x00ffffff-no-rj"
    },
    duration: "44:46",
    publishDate: "Jun 28, 2020",
    category: [
      {
        id: 5,
        name: "Best products"
      }
    ]
  },
  {
    title:
      "MY TOP 10 FAV NUDE LIPSTICKS OF ALL TIME! Swatches | Malvika Sitlani",
    url: "fis1Q5OodbQ",
    channel: {
      name: "Malvika Sitlani",
      thumbnail:
        "AAUvwnhZaMoCC9iKvXOVDNBxDA-pbG4LFO1GSZ18Bhnr4IQ=s68-c-k-c0x00ffffff-no-rj"
    },
    duration: "16:55",
    publishDate: "May 23, 2017",
    category: [
      {
        id: 3,
        name: "Lips"
      }
    ]
  },
  {
    title:
      "Class 1 - HOW TO GET THE PERFECT BASE | For beginners | Malvika Sitlani",
    url: "_LSdzsWeHDA",
    channel: {
      name: "Malvika Sitlani",
      thumbnail:
        "AAUvwnhZaMoCC9iKvXOVDNBxDA-pbG4LFO1GSZ18Bhnr4IQ=s68-c-k-c0x00ffffff-no-rj"
    },
    duration: "",
    publishDate: "",
    category: [
      {
        id: 1,
        name: "Face"
      }
    ]
  },
  {
    title:
      "Class 2 - How to Contour, Blush & Highlight | For Beginners | Malvika Sitlani",
    url: "IrSeCL6ZmEk",
    channel: {
      name: "Malvika Sitlani",
      thumbnail:
        "AAUvwnhZaMoCC9iKvXOVDNBxDA-pbG4LFO1GSZ18Bhnr4IQ=s68-c-k-c0x00ffffff-no-rj"
    },
    duration: "",
    publishDate: "",
    category: [
      {
        id: 1,
        name: "Face"
      }
    ]
  },
  {
    title: "Class 3 - EYEBROWS & EYESHADOW | For beginners | Malvika Sitlani",
    url: "iYGPp0aPk2g",
    channel: {
      name: "Malvika Sitlani",
      thumbnail:
        "AAUvwnhZaMoCC9iKvXOVDNBxDA-pbG4LFO1GSZ18Bhnr4IQ=s68-c-k-c0x00ffffff-no-rj"
    },
    duration: "",
    publishDate: "",
    category: [
      {
        id: 2,
        name: "Eyes"
      }
    ]
  },

  {
    title:
      "MASK PROOF & LONG LASTING SUMMER MAKEUP TUTORIAL | STEP BY STEP TUTORIAL WITH HACKS",
    url: "1NTtNmH-F1Q",
    channel: {
      name: "The DayDream Project",
      thumbnail:
        "AAUvwngQ_6zT_qd0DDDF4BgZpbEHf4t7kt7DWTxc2U7rBA=s176-c-k-c0x00ffffff-no-rj"
    },
    duration: "",
    publishDate: "",
    category: [
      {
        id: 1,
        name: "Face"
      }
    ]
  },
  {
    title:
      "LONG-LASTING & FRESH MAKEUP FOR COLLEGE AND OFFICE | DRUGSTORE TUTORIAL WITH LESS PRODUCTS",
    url: "bTiPIdJCYJ0",
    channel: {
      name: "The DayDream Project",
      thumbnail:
        "AAUvwngQ_6zT_qd0DDDF4BgZpbEHf4t7kt7DWTxc2U7rBA=s176-c-k-c0x00ffffff-no-rj"
    },
    duration: "",
    publishDate: "",
    category: [
      {
        id: 1,
        name: "Face"
      }
    ]
  },
  {
    title: "HOW TO CREATE THE PERFECT WINGED LINER | EASY TUTORIAL",
    url: "XEImnG7s4L0",
    channel: {
      name: "The DayDream Project",
      thumbnail:
        "AAUvwngQ_6zT_qd0DDDF4BgZpbEHf4t7kt7DWTxc2U7rBA=s176-c-k-c0x00ffffff-no-rj"
    },
    duration: "",
    publishDate: "",
    category: [
      {
        id: 2,
        name: "Eyes"
      }
    ]
  },
  {
    title: "BEGINNERS MAKEUP KIT 2021 | THE BEST OF MAKEUP UNDER 1000",
    url: "jKXmDLj0FLA",
    channel: {
      name: "The DayDream Project",
      thumbnail:
        "AAUvwngQ_6zT_qd0DDDF4BgZpbEHf4t7kt7DWTxc2U7rBA=s176-c-k-c0x00ffffff-no-rj"
    },
    duration: "",
    publishDate: "",
    category: [
      {
        id: 4,
        name: "Brushes and tools"
      },
      {
        id: 5,
        name: "Best products"
      }
    ]
  },
  {
    title:
      "NO FOUNDATION, NO CONCEALER FRESH MAKEUP TUTORIAL | MY GO TO MAKEUP LOOK",
    url: "RXM5BmBjBv8",
    channel: {
      name: "The DayDream Project",
      thumbnail:
        "AAUvwngQ_6zT_qd0DDDF4BgZpbEHf4t7kt7DWTxc2U7rBA=s176-c-k-c0x00ffffff-no-rj"
    },
    duration: "",
    publishDate: "",
    category: [
      {
        id: 1,
        name: "Face"
      }
    ]
  },
  {
    title:
      "MY MOST USED DRUGSTORE NUDE LIP SHADES YOU NEED TO TRY | UNDER 799 INR",
    url: "a7Gi520OyLc",
    channel: {
      name: "The DayDream Project",
      thumbnail:
        "AAUvwngQ_6zT_qd0DDDF4BgZpbEHf4t7kt7DWTxc2U7rBA=s176-c-k-c0x00ffffff-no-rj"
    },
    duration: "",
    publishDate: "",
    category: [
      {
        id: 3,
        name: "Lips"
      }
    ]
  },
  {
    title:
      "MAKEUP BRUSHES YOU NEED FOR A FLAWLESS LOOK | MY MAKEUP BRUSH COLLECTION",
    url: "rJ89YSLT6ik",
    channel: {
      name: "The DayDream Project",
      thumbnail:
        "AAUvwngQ_6zT_qd0DDDF4BgZpbEHf4t7kt7DWTxc2U7rBA=s176-c-k-c0x00ffffff-no-rj"
    },
    duration: "",
    publishDate: "",
    category: [
      {
        id: 4,
        name: "Brushes and tools"
      }
    ]
  },
  {
    title: "ONE MAKEUP LOOK FOR THREE DIFFERENT STYLES ft. DANIEL WELLINGTON",
    url: "zfaup4KKppI",
    channel: {
      name: "The DayDream Project",
      thumbnail:
        "AAUvwngQ_6zT_qd0DDDF4BgZpbEHf4t7kt7DWTxc2U7rBA=s176-c-k-c0x00ffffff-no-rj"
    },
    duration: "",
    publishDate: "",
    category: [
      {
        id: 1,
        name: "Face"
      }
    ]
  },

  {
    title: "MY NATURAL MAKEUP TUTORIAL 2017",
    url: "KnONBC1X1tA",
    channel: {
      name: "Laura Lee",
      thumbnail:
        "AAUvwng7oWpya6-wUvigZntDoKHhu0FgiwGIZjoiv6pH5g=s176-c-k-c0x00ffffff-no-rj-mo"
    },
    duration: "",
    publishDate: "",
    category: [
      {
        id: 1,
        name: "Face"
      }
    ]
  },
  {
    title: "My Everyday 10 Minute Makeup Tutorial | UPDATED",
    url: "SMvZa784oow",
    channel: {
      name: "Laura Lee",
      thumbnail:
        "AAUvwng7oWpya6-wUvigZntDoKHhu0FgiwGIZjoiv6pH5g=s176-c-k-c0x00ffffff-no-rj-mo"
    },
    duration: "",
    publishDate: "",
    category: [
      {
        id: 1,
        name: "Face"
      }
    ]
  },
  {
    title: "Eyeshadow Do's and Don'ts",
    url: "KRmmtEJGzrE",
    channel: {
      name: "Laura Lee",
      thumbnail:
        "AAUvwng7oWpya6-wUvigZntDoKHhu0FgiwGIZjoiv6pH5g=s176-c-k-c0x00ffffff-no-rj-mo"
    },
    duration: "",
    publishDate: "",
    category: [
      {
        id: 2,
        name: "Eyes"
      }
    ]
  },
  {
    title: "How To Perfect Winged Eyeliner | Easiest Technique",
    url: "Y2d8iSl9xjs",
    channel: {
      name: "Laura Lee",
      thumbnail:
        "AAUvwng7oWpya6-wUvigZntDoKHhu0FgiwGIZjoiv6pH5g=s176-c-k-c0x00ffffff-no-rj-mo"
    },
    duration: "",
    publishDate: "",
    category: [
      {
        id: 2,
        name: "Eyes"
      }
    ]
  },
  {
    title: "Easy Natural Makeup | 5 MINUTE MAKEUP | Laura Lee",
    url: "2fK5eHr42UA",
    channel: {
      name: "Laura Lee",
      thumbnail:
        "AAUvwng7oWpya6-wUvigZntDoKHhu0FgiwGIZjoiv6pH5g=s176-c-k-c0x00ffffff-no-rj-mo"
    },
    duration: "",
    publishDate: "",
    category: [
      {
        id: 1,
        name: "Face"
      }
    ]
  },

  {
    title: "How I Do My Make-up Step By Step ( Hindi) | Roshni Bhatia",
    url: "vWUq1MAOHpA",
    channel: {
      name: "Roshni Bhatia",
      thumbnail:
        "AAUvwnh_83jXEERhpz2AT5uFgMnRk26T4xq0MSOkVZgUOw=s176-c-k-c0x00ffffff-no-rj"
    },
    duration: "",
    publishDate: "",
    category: [
      {
        id: 1,
        name: "Face"
      }
    ]
  },
  {
    title: "Easy Smokey Eye Make up Tutorial (हिन्दी) | Roshni Bhatia",
    url: "9ttieUrFZaw",
    channel: {
      name: "Roshni Bhatia",
      thumbnail:
        "AAUvwnh_83jXEERhpz2AT5uFgMnRk26T4xq0MSOkVZgUOw=s176-c-k-c0x00ffffff-no-rj"
    },
    duration: "",
    publishDate: "",
    category: [
      {
        id: 2,
        name: "Eyes"
      }
    ]
  },
  {
    title:
      "How to avoid make-up mistakes( हिन्दी में) । Do’s and Don’ts| Roshni Bhatia",
    url: "r3ZDujULoY8",
    channel: {
      name: "Roshni Bhatia",
      thumbnail:
        "AAUvwnh_83jXEERhpz2AT5uFgMnRk26T4xq0MSOkVZgUOw=s176-c-k-c0x00ffffff-no-rj"
    },
    duration: "",
    publishDate: "",
    category: [
      {
        id: 1,
        name: "Face"
      }
    ]
  },
  {
    title:
      "GET UNREADY WITH ME | How I take care of my SKIN at NIGHT| Roshni Bhatia",
    url: "s5gFPYwNvqs",
    channel: {
      name: "Roshni Bhatia",
      thumbnail:
        "AAUvwnh_83jXEERhpz2AT5uFgMnRk26T4xq0MSOkVZgUOw=s176-c-k-c0x00ffffff-no-rj"
    },
    duration: "",
    publishDate: "",
    category: [
      {
        id: 1,
        name: "Face"
      }
    ]
  },
  {
    title: "My favourite lipsticks for winter | Roshni Bhatia",
    url: "QWkzYorMXhY",
    channel: {
      name: "Roshni Bhatia",
      thumbnail:
        "AAUvwnh_83jXEERhpz2AT5uFgMnRk26T4xq0MSOkVZgUOw=s176-c-k-c0x00ffffff-no-rj"
    },
    duration: "",
    publishDate: "",
    category: [
      {
        id: 3,
        name: "Lips"
      }
    ]
  },
  {
    title:
      "Everyday Eye makeup for Work / College | How to Cover Dark circles, Puffy Eyes",
    url: "D2jHc_QgBKM",
    channel: {
      name: "PrettyPrettyMoon",
      thumbnail:
        "AAUvwnhQw6Wo48L24Y1pEYeIEX8FST2iIw2rnbHRLeLf=s176-c-k-c0x00ffffff-no-rj"
    },
    duration: "",
    publishDate: "",
    category: [
      {
        id: 2,
        name: "Eyes"
      }
    ]
  }
];

export const playlists = [
  {
    id: uuid(),
    title: "Everyday Makeup",
    list: [
      {
        title:
          "Easy Fresh Face Makeup | How to use Lip & Cheek Tints? | Malvika Sitlani Aryan",
        url: "fOgeGeyZXs8",
        channel: {
          name: "Malvika Sitlani",
          thumbnail:
            "AAUvwnhZaMoCC9iKvXOVDNBxDA-pbG4LFO1GSZ18Bhnr4IQ=s68-c-k-c0x00ffffff-no-rj"
        },
        category: [
          {
            id: 1,
            name: "Face"
          },
          {
            id: 3,
            name: "Lips"
          }
        ]
      },
      {
        title:
          "Everyday Eye makeup for Work / College | How to Cover Dark circles, Puffy Eyes",
        url: "D2jHc_QgBKM",
        channel: {
          name: "PrettyPrettyMoon",
          thumbnail:
            "AAUvwnhQw6Wo48L24Y1pEYeIEX8FST2iIw2rnbHRLeLf=s176-c-k-c0x00ffffff-no-rj"
        },
        category: [
          {
            id: 2,
            name: "Eyes"
          }
        ]
      },
      {
        title:
          "MASK PROOF & LONG LASTING SUMMER MAKEUP TUTORIAL | STEP BY STEP TUTORIAL WITH HACKS",
        url: "1NTtNmH-F1Q",
        channel: {
          name: "The DayDream Project",
          thumbnail:
            "AAUvwngQ_6zT_qd0DDDF4BgZpbEHf4t7kt7DWTxc2U7rBA=s176-c-k-c0x00ffffff-no-rj"
        },
        category: [
          {
            id: 1,
            name: "Face"
          }
        ]
      }
    ]
  },
  {
    id: uuid(),
    title: "Do's and Don'ts",
    list: [
      {
        title: "Eyeshadow Do's and Don'ts",
        url: "KRmmtEJGzrE",
        channel: {
          name: "Laura Lee",
          thumbnail:
            "AAUvwng7oWpya6-wUvigZntDoKHhu0FgiwGIZjoiv6pH5g=s176-c-k-c0x00ffffff-no-rj-mo"
        },
        category: [
          {
            id: 2,
            name: "Eyes"
          }
        ]
      },
      {
        title:
          "How to avoid make-up mistakes( हिन्दी में) । Do’s and Don’ts| Roshni Bhatia",
        url: "r3ZDujULoY8",
        channel: {
          name: "Roshni Bhatia",
          thumbnail:
            "AAUvwnh_83jXEERhpz2AT5uFgMnRk26T4xq0MSOkVZgUOw=s176-c-k-c0x00ffffff-no-rj"
        },
        category: [
          {
            id: 1,
            name: "Face"
          }
        ]
      }
    ]
  }
];
