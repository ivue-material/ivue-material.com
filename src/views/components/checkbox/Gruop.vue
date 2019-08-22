<template>
    <div>
        <div>
            <p>自定义内容</p>
            <p>当前选中： {{group1}}</p>
            <IvueCheckboxGroup v-model="group1">
                <IvueCheckbox color="#F41D74" textColor="#F41D74" label="Checkbox1">Checkbox1</IvueCheckbox>
                <IvueCheckbox color="orange" textColor="orange" label="Checkbox2">Checkbox2</IvueCheckbox>
                <IvueCheckbox color="#FFC009" textColor="#FFC009" label="Checkbox3">Checkbox3</IvueCheckbox>
                <IvueCheckbox color="#6DBF07" textColor="#6DBF07" label="Checkbox4">Checkbox4</IvueCheckbox>
                <IvueCheckbox color="#009FC7" textColor="#009FC7" label="Checkbox5">Checkbox5</IvueCheckbox>
            </IvueCheckboxGroup>
        </div>
        <div>
            <p>使用label</p>
            <p>当前选中： {{group2}}</p>
            <IvueCheckboxGroup v-model="group2">
                <IvueCheckbox color="#F41D74" textColor="#F41D74" label="Checkbox1"></IvueCheckbox>
                <IvueCheckbox color="orange" textColor="orange" label="Checkbox2"></IvueCheckbox>
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
            group1: ['Checkbox2', 'Checkbox1'],
            group2: ['Checkbox2']
        }
    }
}
</script>

<style lang="scss" scoped>
</style>
