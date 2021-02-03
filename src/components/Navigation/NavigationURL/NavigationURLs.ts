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
