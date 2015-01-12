({
    appDir: 'www',
    dir: 'www-release',
    baseUrl: 'js',
    mainConfigFile: 'www/js/common.js',
    modules: [
        {
            name: 'common',
            include: [
                'jquery'
            ]
        },
        {
            name: 'app/index',
            exclude: ['common']
        },
        {
            name: 'app/next',
            exclude: ['common']
        }
    ],
    optimize: 'none'
})
