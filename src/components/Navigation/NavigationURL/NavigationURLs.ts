interface navigationTypes {
    navbar: navigationURL[],
    sidebar: navigationURL[]
}

interface navigationURL {
    titleURL: string,
    pathURL: string
}

export const navigationURLs: navigationTypes = {
    navbar: [
        {
            titleURL: 'Home',
            pathURL: '/'
        },
        {
            titleURL: 'About',
            pathURL: '/about'
        },
        {
            titleURL: 'Your plants',
            pathURL: '/yourplants'
        },
        {
            titleURL: 'Shop',
            pathURL: '/shop'
        },
        {
            titleURL: 'Game',
            pathURL: '/xD'
        }
    ],
    sidebar: [
        {
            titleURL: 'Plants by kingdom',
            pathURL: '/bykingdom'
        },
        {
            titleURL: 'Plants by family',
            pathURL: '/byfamily'
        },
        {
            titleURL: 'Plants by family',
            pathURL: '/byfamily'
        },
        {
            titleURL: 'Plants by family',
            pathURL: '/byfamily'
        },
        {
            titleURL: 'Plants by family',
            pathURL: '/byfamily'
        },
        {
            titleURL: 'Plants by family',
            pathURL: '/byfamily'
        },
        {
            titleURL: 'Plants by family',
            pathURL: '/byfamily'
        },
        {
            titleURL: 'Plants by family',
            pathURL: '/byfamily'
        }
    ]
}
