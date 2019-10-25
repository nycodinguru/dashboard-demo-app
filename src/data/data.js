export const settings = [
    {
        title: 'Accounting Settings',
        settings: [
            {
                name: 'Default Currency',
                info: false,
                infoDescription: '',
                description: 'This is the default currency that all of your valuations will be translated to',
                control: 'dropdown',
                ariaLabel: 'default-currency',
                id: '_currencyDropDown',
                values: ['usd', 'eur', 'jpy', 'gbp', 'chf', 'cad']
            },
            {
                name: 'Accounting Methodology',
                info: true,
                infoDescription: '',
                description: 'This is the methodology in which your tax and accounting documentation will be prepared',
                control: 'dropdown',
                ariaLabel: 'accounting methodology',
                id: '_accountingDropDown',
                values: ['fifo', 'lifo']
            }
        ]
    },
    {
        title: 'Notification Settings',
        settings: [
            {
                name: 'SMS Notifications',
                info: false,
                infoDescription: '',
                description: 'We will push all notifications to your mobile devices',
                toggleName: '_smsNotifications',
                control: 'toggle',
                ariaLabel: 'sms notifications',
                values: ['on']
            },
            {
                name: 'Email Notifications',
                info: false,
                infoDescription: '',
                description: 'Your email and phone number will not be searchable',
                toggleName: '_emailNotifications',
                control: 'toggle',
                ariaLabel: 'email notifications',
                values: ['on']
            }
        ]
    },
    {
        title: 'Privacy Settings',
        settings: [
            {
                name: 'Make Profile Private',
                info: true,
                infoDescription: '',
                description: 'Your profile with your wallet info will not be public or searchable',
                toggleName: '_profilePrivacy',
                control: 'toggle',
                ariaLabel: 'make profile private',
                values: ['on']
            },
            {
                name: 'Search Privacy',
                info: true,
                infoDescription: '',
                description: 'Your privacy is critically important to us. In order to protect your personal data we have made opting out as easy as a flip of a switch',
                toggleName: '_searchPrivacy',
                control: 'toggle',
                ariaLabel: 'search privacy',
                values: ['off']
            }
        ]
    }
]

export const themes = [{
        title: 'Navigation Theme',
        themes: [
            {
                name: 'The Purps',
                color: '#fafbfd',
                backgroundColor: '#2e2736',
                class: 'Purps',
                active: false
            },
            {
                name: 'Tatooine',
                color: '#000',
                backgroundColor: '#ddceae',
                class: 'Tatooine',
                active: false
            },
            {
                name: 'Endor',
                color: '#fafbfd',
                backgroundColor: '#425f5f',
                class: 'Endor',
                active: true
            },
            {
                name: 'The Biz',
                color: '#fafbfd',
                backgroundColor: '#233047',
                class: 'Biz',
                active: false
            },
            {
                name: 'Grape Juice',
                color: '#fafbfd',
                backgroundColor: '#332f50',
                class: 'Grape',
                active: false
            },
            {
                name: 'My Boy Blue',
                color: '#fafbfd',
                backgroundColor: '#3254c3',
                class: 'Blue',
                active: false
            },
            {
                name: 'Winterfel',
                borderColor: 'rgba(0, 0, 0, 0.2)',
                class: 'Winterfel',
                color: '#000',
                backgroundColor: '#fff',
                active: false,
                invert: 'none'
            },
            {
                name: 'Suggest One!',
                class: null,
                color: '',
                backgroundColor: ''
            }
        ]
    }
]

export const navMenuItems = [
    {
        group: 'Nav-menu-upper',
        names: [{
                name: 'Accounts',
                ariaLabel: 'accounts',
                link: ''
            },
            {
                name: 'Ledger',
                ariaLabel: 'ledger',
                link: ''
            },
            {
                name: 'Finance',
                ariaLabel: 'finance',
                link: ''
            }]
        },
    {
        group: 'Nav-menu-lower',
        names: [{
                name: 'Learn',
                ariaLabel: 'learn',
                link: ''
            },
            {
                name: 'Marketplace',
                ariaLabel: 'marketplace',
                link: ''
            }]
    }
]

export const dashBoardDropDownItems = {
        links: [{
                name: 'Manage Assets'
            },
            {
                name: 'My Portfolio'
            },
            {
                name: 'Messages'
            },
            {
                name: 'Activity'
            }
        ]
    }
