export const settings = [
  {
    title: "Accounting Settings",
    settings: [
      {
        name: "Default Currency",
        info: false,
        infoDescription: "",
        description:
          "This is the default currency that all of your valuations will be translated to",
        control: "dropdown",
        ariaLabel: "default-currency",
        id: "_currencyDropDown",
        values: ["usd", "eur", "jpy", "gbp", "chf", "cad"],
      },
      {
        name: "Accounting Methodology",
        info: true,
        infoDescription: "",
        description:
          "This is the methodology in which your tax and accounting documentation will be prepared",
        control: "dropdown",
        ariaLabel: "accounting methodology",
        id: "_accountingDropDown",
        values: ["fifo", "lifo"],
      },
    ],
  },
  {
    title: "Notification Settings",
    settings: [
      {
        name: "SMS Notifications",
        info: false,
        infoDescription: "",
        description: "We will push all notifications to your mobile devices",
        toggleName: "_smsNotifications",
        control: "toggle",
        ariaLabel: "sms notifications",
      },
      {
        name: "Email Notifications",
        info: false,
        infoDescription: "",
        description: "Your email and phone number will not be searchable",
        toggleName: "_emailNotifications",
        control: "toggle",
        ariaLabel: "email notifications",
      },
    ],
  },
  {
    title: "Privacy Settings",
    settings: [
      {
        name: "Make Profile Private",
        info: true,
        infoDescription: "",
        description:
          "Your profile with your wallet info will not be public or searchable",
        toggleName: "_profilePrivacy",
        control: "toggle",
        ariaLabel: "make profile private",
      },
      {
        name: "Search Privacy",
        info: true,
        infoDescription: "",
        description:
          "Your privacy is critically important to us. In order to protect your personal data we have made opting out as easy as a flip of a switch",
        toggleName: "_searchPrivacy",
        control: "toggle",
        ariaLabel: "search privacy",
      },
    ],
  },
]

export const storedValues = [
  {
    key: "defaultCurrency",
    value: "usd",
  },
  {
    key: "accountingMethodology",
    value: "lifo",
  },
  {
    key: "_smsNotifications",
    value: "on",
  },
  {
    key: "_emailNotifications",
    value: "on",
  },
  {
    key: "_profilePrivacy",
    value: "on",
  },
  {
    key: "_searchPrivacy",
    value: "off",
  },
  {
    key: "navigationTheme",
    value: "Endor",
  },
]

export const themes = [
  {
    title: "Theme",
    themes: [
      {
        name: "The Purps",
        color: "#fafbfd",
        primaryColor: "#2e2736",
        secondaryColor: "#5a4d69",
        darkModeColor: "#fff",
        class: "Purps",
        active: false,
      },
      {
        name: "Purple City",
        color: "#f2f2f2",
        darkModeColor: "#f2f2f2",
        primaryColor: "#6747c7",
        secondaryColor: "#6747c7",
        class: "Purple-city",
        active: true,
      },
      {
        name: "Tatooine",
        color: "#000",
        primaryColor: "#ddceae",
        secondaryColor: "#ffefcc",
        darkModeColor: "#fff",
        class: "Tatooine",
        active: false,
      },
      {
        name: "Endor",
        color: "#fafbfd",
        primaryColor: "#425f5f",
        secondaryColor: "#618b8b",
        darkModeColor: "#fff",
        class: "Endor",
        active: false,
      },
      {
        name: "The Biz",
        color: "#fafbfd",
        primaryColor: "#233047",
        secondaryColor: "#2e3f5d",
        darkModeColor: "#fff",
        class: "Biz",
        active: false,
      },
      {
        name: "Grape Juice",
        color: "#fafbfd",
        primaryColor: "#374b6e",
        secondaryColor: "#3c5277",
        darkModeColor: "#fff",
        class: "Grape",
        active: false,
      },
      {
        name: "My Boy Blue",
        color: "#fafbfd",
        primaryColor: "#3254c3",
        secondaryColor: "#3961e2",
        darkModeColor: "#fff",
        class: "Blue",
        active: false,
      },
      {
        name: "Winterfell",
        borderColor: "rgba(0, 0, 0, 0.2)",
        darkModeColor: "#fff",
        class: "Winterfel",
        color: "#000",
        primaryColor: "#fff",
        secondaryColor: "#fff",
        active: false,
        invert: "none",
      },
      {
        name: "Suggest One!",
        class: null,
        color: "",
        primaryColor: "",
      },
    ],
  },
]

export const navMenuItems = [
  {
    group: "Nav-menu-upper",
    names: [
      {
        name: "Accounts",
        ariaLabel: "accounts",
        link: "",
      },
      {
        name: "Ledger",
        ariaLabel: "ledger",
        link: "",
      },
      {
        name: "Finance",
        ariaLabel: "finance",
        link: "",
      },
    ],
  },
  {
    group: "Nav-menu-lower",
    names: [
      {
        name: "Learn",
        ariaLabel: "learn",
        link: "",
      },
      {
        name: "Marketplace",
        ariaLabel: "marketplace",
        link: "",
      },
    ],
  },
]

export const dashBoardDropDownItems = {
  links: [
    {
      name: "Manage Assets",
    },
    {
      name: "My Portfolio",
    },
    {
      name: "Messages",
    },
    {
      name: "Activity",
    },
  ],
}
