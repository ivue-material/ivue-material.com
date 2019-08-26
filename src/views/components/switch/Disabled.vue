<template>
    <div>
        <p>普通样式</p>
        <IvueSwitch :disabled="disabled" color="#F41D74"></IvueSwitch>
        <p>浮雕样式</p>
        <IvueSwitch :disabled="disabled" color="#F41D74" emboss></IvueSwitch>
        <p>是否开启禁用</p>
        <IvueSwitch color="#FFC009" v-model="disabled" emboss>
            <span slot="open">禁用</span>
            <span slot="close">关闭</span>
        </IvueSwitch>
    </div>
</template>

<script>
export default {
    data () {
        return {
            disabled: true,
            open1: true
        }
    }
}
</script>

<style lang="scss" scoped>
.ivue-switch-emboss--wrapper {
  margin-right: 20px;
}
</style>
