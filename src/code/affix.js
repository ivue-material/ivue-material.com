let code = {};


code.base = `
<template>
      <div>
            <IvueAffix>
                  <div class="demo-affix">固定在最顶部</div>
            </IvueAffix>
      </div>
</template>

<script>
      export default {
      }
</script>

<style scoped>
      .demo-affix {
            width: 100px;
            height: 30px;
            text-align: center;
            line-height: 30px;
            font-size: 12px;
            border-radius: 5px;
            background: #4177f6;
            color: #fff;
      }
</style>
`;



code.offsetTop = `
<template>
      <div>
            <IvueAffix :offset-top="50">
                  <div class="demo-affix">固定在最顶部</div>
            </IvueAffix>
      </div>
</template>

<script>
      export default {
      }
</script>

<style scoped>
      .demo-affix {
            width: 100px;
            height: 30px;
            text-align: center;
            line-height: 30px;
            font-size: 12px;
            border-radius: 5px;
            background: #4177f6;
            color: #fff;
      }
</style>
`;


code.offsetBottom = `
<template>
      <div>
            <ivue-affix :offset-bottom="20">
                  <div class="demo-affix">固定在距离底部 20px 的位置</div>
            </ivue-affix>
      </div>
</template>

<script>
      export default {
      }
</script>

<style scoped>
      .demo-affix {
            width: 100px;
            height: 30px;
            text-align: center;
            line-height: 30px;
            font-size: 12px;
            border-radius: 5px;
            background: #4177f6;
            color: #fff;
      }
</style>
`;


let status = '${status}'

code.change = `
<template>
      <div>
            <IvueAffix @on-change="change">
                  <div class="demo-affix">固定状态改变时的回调</div>
            </IvueAffix>
      </div>
</template>

<script>
      export default {
            methods: {
                  change (status) {
                        this.$IvueMessage.info(Status: ${status});
                  }
            }
      }
</script>

<style scoped>
      .demo-affix {
            width: 100px;
            height: 30px;
            text-align: center;
            line-height: 30px;
            font-size: 12px;
            border-radius: 5px;
            background: #4177f6;
            color: #fff;
      }
</style>
`;

export default code;
