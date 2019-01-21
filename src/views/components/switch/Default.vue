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