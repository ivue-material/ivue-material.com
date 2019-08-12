<template>
    <div class="radio-group">
        <div>
            <p>自定义内容</p>
            <p>当前选中： {{value1}}</p>
            <IvueRadioGroup v-model="value1">
                <IvueRadio color="#F41D74" textColor="#F41D74" label="radio1">Radio1</IvueRadio>
                <IvueRadio color="orange" textColor="orange" label="radio2">Radio2</IvueRadio>
                <IvueRadio color="#FFC009" textColor="#FFC009" label="radio3">Radio3</IvueRadio>
                <IvueRadio color="#6DBF07" textColor="#6DBF07" label="radio4">Radio4</IvueRadio>
                <IvueRadio color="#009FC7" textColor="#009FC7" label="radio5">Radio5</IvueRadio>
            </IvueRadioGroup>
        </div>
        <div>
            <p>使用label</p>
            <p>当前选中： {{value2}}</p>
            <IvueRadioGroup v-model="value2">
                <IvueRadio color="#F41D74" textColor="#F41D74" label="label1"></IvueRadio>
                <IvueRadio color="orange" textColor="orange" label="label2"></IvueRadio>
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
            value1: 'radio1',
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
