let code = {};


code.base = `
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
`;

code.guop = `
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
`;


code.disabled = `
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
`;

code.size = `
<template>
    <div>
        <IvueCheckbox v-model="value1" color="#F41D74" textColor="#F41D74" size="small">Small</IvueCheckbox>
        <IvueCheckbox v-model="value2" color="orange" textColor="orange">default</IvueCheckbox>
        <IvueCheckbox v-model="value3" color="#FFC009" textColor="#FFC009" size="large">Large</IvueCheckbox>
    </div>
</template>

<script>
export default {
    data () {
        return {
            value1: false,
            value2: false,
            value3: false
        }
    }
}
</script>

<style lang="scss" scoped>
</style>
`;

code.indeterminate = `
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
        <IvueCheckBoxGroup v-model="group" @on-change="handleGroupChange">
            <IvueCheckbox color="#F41D74" textColor="#F41D74" label="Checkbox1"></IvueCheckbox>
            <IvueCheckbox color="orange" textColor="orange" label="Checkbox2"></IvueCheckbox>
            <IvueCheckbox color="#FFC009" textColor="#FFC009" label="Checkbox3"></IvueCheckbox>
            <IvueCheckbox color="#6DBF07" textColor="#6DBF07" label="Checkbox4"></IvueCheckbox>
            <IvueCheckbox color="#009FC7" textColor="#009FC7" label="Checkbox5"></IvueCheckbox>
        </IvueCheckBoxGroup>
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
`;

export default code;
