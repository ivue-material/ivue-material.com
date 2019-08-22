<template>
    <div>
        <IvueRadio v-model="value1" color="#F41D74" textColor="#F41D74">Radio1 {{value1}}</IvueRadio>
        <IvueRadio v-model="value2" color="orange" textColor="orange">Radio2 {{value2}}</IvueRadio>
        <IvueRadio v-model="value3" color="#FFC009" textColor="#FFC009">Radio3 {{value3}}</IvueRadio>
        <IvueRadio v-model="value4" color="#6DBF07" textColor="#6DBF07">Radio4 {{value4}}</IvueRadio>
        <IvueRadio v-model="value5" color="#009FC7" textColor="#009FC7">Radio5 {{value5}}</IvueRadio>
    </div>
</template>

<script>
export default {
    data () {
        return {
            value1: false,
            value2: false,
            value3: false,
            value4: false,
            value5: false,
        }
    }
}
</script>

<style lang="scss" scoped>
.ivue-radio-wrapper {
  margin-right: 20px;
}
</style>
