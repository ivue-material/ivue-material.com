let code = {};


code.base = `
<template>
      <div>
            <IvueButton @click="start">Start</IvueButton>
            <IvueButton @click="finish">Finish</IvueButton>
            <IvueButton @click="error">Error</IvueButton>
      </div>
</template>

<script>
      export default {
            methods: {
                  start () {
                        this.$IvueLoadingBar.start();
                  },
                  finish () {
                        this.$IvueLoadingBar.finish();
                  },
                  error () {
                        this.$IvueLoadingBar.error();
                  }
            }
      }
</script>
`;


code.route = `// 部分代码省略
import IvueMaterial from 'ivue-material';
Vue.use(IvueMaterial);

router.beforeEach((to, from, next) => {
    IvueMaterial.IvueLoadingBar.start();
    next();
});

router.afterEach(route => {
    IvueMaterial.IvueLoadingBar.finish();
});
`

code.ajax = `// 以jQuery的Ajax为例，部分代码省略
import $ from 'jquery';
export default {
    methods: {
        getData () {
            this.$IvueLoadingBar.start();
            $.ajax({
                url: '/api/someurl',
                type: 'get',
                success: () => {
                    this.$IvueLoadingBar.finish();
                }
                error: () => {
                    this.$IvueLoadingBar.error();
                }
            });
        }
    }
}
`;

code.config = `this.$IvueLoadingBar.config({
      color: '#5cb85c',
      failedColor: '#f0ad4e',
      height: 5
});
`;

export default code;
