<template>
    <div>
        <div class="border">
            <IvueCheckbox
                color="#1D9F3A"
                textColor="#76B431"
                :value="selectAll"
                :indeterminate="indeterminate"
                @click.prevent.native="handleCheckAll"
            >全选</IvueCheckbox>
        </div>
        <IvueCheckboxGroup v-model="group" @on-change="handleGroupChange">
            <IvueCheckbox color="#F41D74" textColor="#F41D74" label="Checkbox1"></IvueCheckbox>
            <IvueCheckbox color="orange" textColor="orange" label="Checkbox2"></IvueCheckbox>
            <IvueCheckbox color="#FFC009" textColor="#FFC009" label="Checkbox3"></IvueCheckbox>
            <IvueCheckbox color="#6DBF07" textColor="#6DBF07" label="Checkbox4"></IvueCheckbox>
            <IvueCheckbox color="#009FC7" textColor="#009FC7" label="Checkbox5"></IvueCheckbox>
        </IvueCheckboxGroup>
    </div>
</template>

<script>
export default {
    data () {
        return {
            indeterminate: true,
            selectAll: true,
            group: ['Checkbox1']
        }
    },
    methods: {
        handleCheckAll () {
            if (this.indeterminate) {
                this.selectAll = false;
            } else {
                this.selectAll = !this.selectAll;
            }
            this.indeterminate = false;

            if (this.selectAll) {
                this.group = ['Checkbox1', 'Checkbox2', 'Checkbox3', 'Checkbox4', 'Checkbox5'];
            } else {
                this.group = [];
            }

        },
        handleGroupChange (group) {
            if (group.length === 5) {
                this.indeterminate = false;
                this.selectAll = true;
            } else if (group.length > 0) {
                this.indeterminate = true;
                this.selectAll = true;
            } else {
                this.indeterminate = false;
                this.selectAll = false;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.border {
  border-bottom: 1px solid #e9e9e9;
  padding-bottom: 6px;
  margin-bottom: 6px;
}
</style>
