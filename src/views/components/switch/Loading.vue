<template>
    <div>
        <p>普通样式</p>
        <IvueSwitch loading :value="true" size="small" color="#F41D74"></IvueSwitch>
        <IvueSwitch loading :value="true" color="orange"></IvueSwitch>
        <IvueSwitch loading :value="true" size="large" color="#FFC009"></IvueSwitch>
        <p>浮雕样式</p>
        <IvueSwitch loading :value="true" size="small" color="#F41D74" loadingColor="#fff" emboss></IvueSwitch>
        <IvueSwitch loading :value="true" color="orange" loadingColor="#fff" emboss></IvueSwitch>
        <IvueSwitch loading :value="true" size="large" loadingColor="#fff" color="#FFC009" emboss></IvueSwitch>
    </div>
</template>

<script>
export default {
}
</script>


<style lang="scss" scoped>
.ivue-switch {
  margin-right: 20px;
}
</style>
