<template>
    <div>
        <IvueTable
            :tableHeader="tableHeader"
            :tableData="tableData"
            @on-select-change="handleSelectChange"
            @on-select-all="handleSelectAll"
            @on-select-cancel="handleSelectCancel"
        ></IvueTable>
        <p>单选数据：{{selectChange}}</p>
        <p>全选数据：{{selectAll}}</p>
        <p>取消选项的数据：{{selectCancel}}</p>
    </div>
</template>

<script>
export default {
    data () {
        return {
            tableHeader: [
                {
                    type: 'selection',
                    width: 60,
                    checkBoxColor: '#4177f6',
                    align: 'center'
                },
                {
                    title: 'Name',
                    key: 'name'
                },
                {
                    title: 'Age',
                    key: 'age'
                },
                {
                    title: 'Address',
                    key: 'address'
                }
            ],
            tableData: [
                {
                    name: 'John Brown',
                    age: 18,
                    address: 'New York No. 1 Lake Park',
                    date: '2016-10-03',
                    checkBoxColor: '#F41D74',
                },
                {
                    name: 'Jim Green',
                    age: 24,
                    address: 'London No. 1 Lake Park',
                    date: '2016-10-01',
                    checkBoxColor: 'orange',
                },
                {
                    name: 'Joe Black',
                    age: 30,
                    address: 'Sydney No. 1 Lake Park',
                    date: '2016-10-02',
                    checkBoxColor: '#FFC009',
                },
                {
                    name: 'Jon Snow',
                    age: 26,
                    address: 'Ottawa No. 2 Lake Park',
                    date: '2016-10-04',
                    checkBoxColor: '#6DBF07',
                }
            ],
            selectChange: null,
            selectAll: null,
            selectCancel: null,
        }
    },
    methods: {
        handleSelectChange (selection) {
            this.selectChange = selection;
        },
        handleSelectAll (selection) {
            this.selectAll = selection;
        },
        handleSelectCancel (selection, oldSelection) {
            this.selectCancel = oldSelection;
        }
    }
}
</script>

<style lang="scss" scoped>
</style>
