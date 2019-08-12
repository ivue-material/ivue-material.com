<template>
    <IvueRadioGroup v-model="value" vertical>
        <IvueRadio color="#F41D74" textColor="#F41D74" label="radio1">Radio1</IvueRadio>
        <IvueRadio color="orange" textColor="orange" label="radio2">Radio2</IvueRadio>
        <IvueRadio color="#FFC009" textColor="#FFC009" label="radio3">Radio3</IvueRadio>
        <IvueRadio color="#6DBF07" textColor="#6DBF07" label="radio4">Radio4</IvueRadio>
        <IvueRadio color="#009FC7" textColor="#009FC7" label="radio5">Radio5</IvueRadio>
    </IvueRadioGroup>
</template>

<script>
export default {
    data () {
        return {
            value: 'radio1',
        }
    }
}
</script>

<style lang="scss" scoped>
.ivue-radio-wrapper {
  margin-right: 20px;
}
</style>
