<template>
    <div>
        <IvueRadio v-model="value1" color="#F41D74" textColor="#F41D74" size="small">Small</IvueRadio>
        <IvueRadio v-model="value2" color="orange" textColor="orange">default</IvueRadio>
        <IvueRadio v-model="value3" color="#FFC009" textColor="#FFC009" size="large">Large</IvueRadio>
    </div>
</template>

<script>
export default {
    data () {
        return {
            value1: false,
            value2: false,
            value3: false,
        }
    }
}
</script>

<style lang="scss" scoped>
.ivue-radio-wrapper {
  margin-right: 20px;
}
</style>
