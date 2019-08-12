<template>
    <div class="radio-group">
        <div>
            <p>禁用单项</p>
            <IvueRadio color="#F41D74" textColor="#F41D74" v-model="value1" disabled>Radio1</IvueRadio>
        </div>
        <div>
            <p>禁用选项组单项</p>
            <IvueRadioGroup v-model="value2">
                <IvueRadio color="#F41D74" textColor="#F41D74" label="label1"></IvueRadio>
                <IvueRadio color="orange" textColor="orange" label="label2" disabled></IvueRadio>
                <IvueRadio color="#FFC009" textColor="#FFC009" label="label3"></IvueRadio>
                <IvueRadio color="#6DBF07" textColor="#6DBF07" label="label4"></IvueRadio>
                <IvueRadio color="#009FC7" textColor="#009FC7" label="label5"></IvueRadio>
            </IvueRadioGroup>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            value1: true,
            value2: 'label1',
        }
    }
}
</script>

<style lang="scss" scoped>
.radio-group {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.ivue-radio-wrapper {
  margin-right: 20px;
}
</style>
