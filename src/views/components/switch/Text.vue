<template>
      <div>
            <IvueSwitch>
                  <span slot="open">开</span>
                  <span slot="close">关</span>
            </IvueSwitch>

            <IvueSwitch>
                  <span slot="open">
                        <ivue-icon>check</ivue-icon>
                  </span>
                  <span slot="close">
                        <ivue-icon>close</ivue-icon>
                  </span>
            </IvueSwitch>

            <IvueSwitch size="large">
                  <span slot="open">开启</span>
                  <span slot="close">关闭</span>
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