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
                  this.$IvueMessage.info(`Status: ${status}`);
            }
      }
}
</script>

<style scoped>
.demo-affix {
      width: 150px;
      height: 30px;
      text-align: center;
      line-height: 30px;
      font-size: 12px;
      border-radius: 5px;
      background: #4177f6;
      color: #fff;
}
</style>