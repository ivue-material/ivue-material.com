<template>
    <div>
        <div>
            <p>禁用单项</p>
            <IvueCheckbox color="#F41D74" textColor="#F41D74" v-model="value1" disabled>Checkbox</IvueCheckbox>
        </div>
        <div>
            <p>禁用选项组单项</p>
            <p>{{value2}}</p>
            <IvueCheckboxGroup v-model="value2">
                <IvueCheckbox color="#F41D74" textColor="#F41D74" label="Checkbox1"></IvueCheckbox>
                <IvueCheckbox color="orange" textColor="orange" label="Checkbox2" disabled></IvueCheckbox>
                <IvueCheckbox color="#FFC009" textColor="#FFC009" label="Checkbox3"></IvueCheckbox>
                <IvueCheckbox color="#6DBF07" textColor="#6DBF07" label="Checkbox4"></IvueCheckbox>
                <IvueCheckbox color="#009FC7" textColor="#009FC7" label="Checkbox5"></IvueCheckbox>
            </IvueCheckboxGroup>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            value1: true,
            value2: ['Checkbox2']
        }
    }
}
</script>

<style lang="scss" scoped>
</style>
