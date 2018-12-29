module.exports = {
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