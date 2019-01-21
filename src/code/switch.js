let code = {};


code.base = `
<template>
      <IvueSwitch v-model="open" @on-change="handleChange"></IvueSwitch>
</template>

<script>
      export default {
            data () {
                  return {
                        open: false
                  }
            },
            methods: {
                  handleChange () {
                        this.$IvueMessage.success({
                              content: '当前开关状态' + this.open,
                              closable: true
                        });
                  }
            }
      }
</script>

<style lang="scss" scoped>
      .demo-carousel {
            height: 200px;
            line-height: 200px;
            text-align: center;
            color: #fff;
            font-size: 20px;
            background: #506b9e;
      }
</style>
`;

code.size = `
<template>
      <div>
            <IvueSwitch size="large"></IvueSwitch>
            <IvueSwitch></IvueSwitch>
            <IvueSwitch size="small"></IvueSwitch>
      </div>
</template>

<script>
      export default {
      }
</script>
`;

code.text = `
<template>
      <div>
            <IvueSwitch>
                  <span slot="open">开</span>
                  <span slot="close">关</span>
            </IvueSwitch>

            <IvueSwitch size="large">
                  <span slot="open">开启</span>
                  <span slot="close">关闭</span>
            </IvueSwitch>

            <IvueSwitch>
                  <span slot="open">
                        <ivue-icon>check</ivue-icon>
                  </span>
                  <span slot="close">
                        <ivue-icon>close</ivue-icon>
                  </span>
            </IvueSwitch>
      </div>
</template>

<script>
      export default {
      }
</script>

<style lang="scss" scoped>
      .ivue-icon {
            font-size: 12px;
            min-width: 12px;
            font-weight: bold;
      }
</style>
`;


code.disabled = `
<template>
      <div>
            <IvueSwitch :disabled="disabled"></IvueSwitch>

            <IvueButton @click="handlClick">开启禁用/关闭禁用</IvueButton>
      </div>
</template>

<script>
export default {
      data () {
            return {
                  disabled: true
            }
      },
      methods: {
            handlClick () {
                  this.disabled = !this.disabled
            }
      }
}
</script>
`;

code.loading = `
<template>
      <div>
            <IvueSwitch loading :value="true" size="small" color="primary"></IvueSwitch>
            <IvueSwitch loading :value="true" color="primary"></IvueSwitch>
            <IvueSwitch loading :value="true" size="large" color="primary"></IvueSwitch>
      </div>
</template>

<script>
export default {
}
</script>
`;

export default code;
