const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
      lintOnSave: false,
      outputDir: 'ui',
      publicPath: isProduction ? 'https://cdn.lovevuerk.com/ui/' : '/ui/',

      chainWebpack: config => {
            config.module
                  .rule('markdown')
                  .test(/\.md$/)
                  .use('html-loader')
                  .loader('html-loader')
                  .end();
            config.module
                  .rule('markdown')
                  .test(/\.md$/)
                  .use('markdown-loader')
                  .loader('markdown-loader')
                  .end();
      }
}
