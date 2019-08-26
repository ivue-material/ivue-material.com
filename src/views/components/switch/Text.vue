<template>
    <div>
        <p>默认样式</p>
        <IvueSwitch color="#F41D74" v-model="open1">
            <span slot="open">开</span>
            <span slot="close">关</span>
        </IvueSwitch>
        <IvueSwitch color="orange" v-model="open2">
            <span slot="open">
                <ivue-icon>check</ivue-icon>
            </span>
            <span slot="close">
                <ivue-icon>close</ivue-icon>
            </span>
        </IvueSwitch>
        <IvueSwitch size="large" color="#FFC009" v-model="open3">
            <span slot="open">开启</span>
            <span slot="close">关闭</span>
        </IvueSwitch>
        <p>浮雕样式</p>
        <IvueSwitch color="#F41D74" v-model="open1" emboss>
            <span slot="open">开</span>
            <span slot="close">关</span>
        </IvueSwitch>
        <IvueSwitch color="orange" v-model="open2" emboss>
            <span slot="open">
                <ivue-icon>check</ivue-icon>
            </span>
            <span slot="close">
                <ivue-icon>close</ivue-icon>
            </span>
        </IvueSwitch>
        <IvueSwitch size="large" color="#FFC009" v-model="open3" emboss>
            <span slot="open">开启</span>
            <span slot="close">关闭</span>
        </IvueSwitch>
    </div>
</template>

<script>
export default {
    data () {
        return {
            open1: true,
            open2: true,
            open3: true,
            open4: true,
            open5: true,
            open6: true,
        }
    }
}
</script>

<style lang="scss" scoped>
.ivue-icon {
  font-size: 12px;
  min-width: 12px;
  font-weight: bold;
}

.ivue-switch,
.ivue-switch-emboss--wrapper {
  margin-right: 20px;
}
</style>
