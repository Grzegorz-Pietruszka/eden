interface navigationURLs {
    navbar: navigationURL[],
    sidebar: navigationURL[]
}

interface navigationURL {
    titleURL: string,
    pathURL: string
}

export const navigationURLs: navigationURLs = {
    navbar: [
        {
            titleURL: 'Home',
            pathURL: '/home'
        },
        {
            titleURL: 'About',
            pathURL: '/about'
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
        }
    ]
}
