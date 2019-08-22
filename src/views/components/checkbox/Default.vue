<template>
    <div>
        <IvueCheckbox color="#F41D74" textColor="#F41D74" v-model="value1">Checkbox1 {{value1}}</IvueCheckbox>
        <IvueCheckbox color="orange" textColor="orange" v-model="value2">Checkbox2 {{value2}}</IvueCheckbox>
        <IvueCheckbox color="#FFC009" textColor="#FFC009" v-model="value3">Checkbox3 {{value3}}</IvueCheckbox>
        <IvueCheckbox color="#6DBF07" textColor="#6DBF07" v-model="value4">Checkbox4 {{value4}}</IvueCheckbox>
        <IvueCheckbox color="#009FC7" textColor="#009FC7" v-model="value5">Checkbox5 {{value5}}</IvueCheckbox>
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
</style>
