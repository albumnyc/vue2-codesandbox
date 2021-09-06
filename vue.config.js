const config= {
    lintOnSave: true,

    chainWebpack: config => {
        config.plugins.delete('prefetch');
        config.plugins.delete('preload');
    },
    
    devServer: {
        port: 8086,
        // proxy: {
            // '/rest': {
            //     target: 'http://localhost:3030/',
            //     changeOrigin: true,
            // },
        // },
        // overlay: {
        //     warnings: false,
        //     errors: false,
        // },
        // before(app) {
        //     apiMocker(app, path.resolve(__dirname, '../../mocker/index.js'));
        // },
        disableHostCheck: true,
    },
};
module.exports = config;