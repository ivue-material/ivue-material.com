let code = {};


code.polyfill = `// my-project/
$ yarn add babel-polyfill
// OR
$ npm install babel-polyfill --save
`;

code.index = `// my-project/src/index.js
import 'babel-polyfill'
...
new Vue()
`;


code.preset = `$ yarn add @babel/preset-env -d
// OR
$ npm install @babel/preset-env --save-dev
`;


code.babelrc = `// .babelrc
{
  "presets": ["@babel/preset-env"]
}

// babel.config.js
module.exports = {
  presets: ['@babel/preset-env']
}
`;


code.config = `module.exports = {
      transpileDependencies:[/node_modules[/\\\\]ivue-material[/\\\\]/]
}
`;

code.cdn = `<!-- 引入 stylesheet -->
<link rel="stylesheet" href="//unpkg.com/ivue-material/dist/styles/ivue.css">
<!-- 引入 Vue.js -->
<script src="//vuejs.org/js/vue.min.js"></script>
<!-- 引入 ivue-material -->
<script src="//unpkg.com/ivue-material/dist/ivue.min.js"></script>
`;


code.example = `
<html>
  <head>
    <meta charset="utf-8">
    <title>example</title>
   <!-- 引入 stylesheet -->
    <link rel="stylesheet" href="//unpkg.com/ivue-material/dist/styles/ivue.css">
    <!-- 引入 Vue.js -->
    <script src="//vuejs.org/js/vue.min.js"></script>
    <!-- 引入 ivue-material -->
    <script src="//unpkg.com/ivue-material/dist/ivue.min.js"></script>
  </head>

  <body>
    <div id="app">
      <ivue-button>example</ivue-button>
    </div>
    
    <script>
    new Vue({
        el: '#app'
    })
  </script>
  </body>
</html>
`;

code.npm = `$ npm install ivue-material --save`


export default code;
