<template>
    <div>
        <p>默认样式</p>
        <IvueSwitch size="large" color="#F41D74" v-model="open1"></IvueSwitch>
        <IvueSwitch color="orange" v-model="open2"></IvueSwitch>
        <IvueSwitch size="small" color="#FFC009" v-model="open3"></IvueSwitch>
        <p>浮雕样式</p>
        <IvueSwitch size="large" emboss color="#F41D74" v-model="open4"></IvueSwitch>
        <IvueSwitch emboss color="orange" v-model="open5"></IvueSwitch>
        <IvueSwitch size="small" emboss color="#FFC009" v-model="open6"></IvueSwitch>
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
.ivue-switch, .ivue-switch-emboss--wrapper {
  margin-right: 20px;
}
</style>
