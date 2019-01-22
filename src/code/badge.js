let code = {};


code.base = `
<template>
      <div>
            <IvueBadge :count="3">
                  <a href="#" class="demo-badge"></a>
            </IvueBadge>
      </div>
</template>

<script>
      export default {
      }
</script>

<style lang="scss" scoped>
      .demo-badge {
            width: 42px;
            height: 42px;
            background: #eee;
            border-radius: 6px;
            display: inline-block;
      }
</style>
`;


code.dot = `
<template>
      <div>
            <IvueBadge dot>
                  <a href="#" class="demo-badge"></a>
            </IvueBadge>

            <IvueBadge dot>
                  <ivue-icon class="demo-badge">notifications</ivue-icon>
            </IvueBadge>
      </div>
</template>

<script>
      export default {
      }
</script>

<style lang="scss" scoped>
      .badge {
            display: table;
            margin-right: 40px;
      }
      .demo-badge {
            width: 42px;
            height: 42px;
            background: #eee;
            border-radius: 6px;
            display: inline-block;
      }
</style>
`;


code.overflowCount = `
<template>
      <div>
            <IvueBadge :count="100">
                  <a href="#" class="demo-badge"></a>
            </IvueBadge>

            <IvueBadge :count="1000" overflow-count="999">
                  <a href="#" class="demo-badge"></a>
            </IvueBadge>
      </div>
</template>

<script>
      export default {
      }
</script>

<style lang="scss" scoped>
      .demo-badge {
            width: 42px;
            height: 42px;
            background: #eee;
            border-radius: 6px;
            display: inline-block;
      }
</style>
`;


code.show = `
<template>
      <div>
            <IvueBadge :count="3" :show="show">
                  <a href="#" class="demo-badge"></a>
            </IvueBadge>

            <button @click="onShow">show</button>
      </div>
</template>

<script>
      export default {
            data () {
                  return {
                        show: true
                  }
            },
            methods: {
                  onShow () {
                        this.show = !this.show
                  }
            }
      }
</script>

<style lang="scss" scoped>
      .ivue-badge {
            margin-right: 10px;
      }
      .demo-badge {
            width: 42px;
            height: 42px;
            background: #eee;
            border-radius: 6px;
            display: inline-block;
      }
</style>
`;

export default code;
