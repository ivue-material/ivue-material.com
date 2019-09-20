<template>
    <div>
        <IvueTable
            :tableHeader="tableHeader"
            :tableData="tableData"
            highlightRow
            ref="IvueTable"
            @on-current-row="handleCurrentRow"
        ></IvueTable>
        <p>newData: {{currentRow }}</p>
        <p>oldData: {{oldCurrentRow}}</p>
        <IvueButton @click="handleClear">清除选择</IvueButton>
    </div>
</template>

<script>
export default {
    data () {
        return {
            tableHeader: [
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
                    date: '2016-10-03'
                },
                {
                    name: 'Jim Green',
                    age: 24,
                    address: 'London No. 1 Lake Park',
                    date: '2016-10-01'
                },
                {
                    name: 'Joe Black',
                    age: 30,
                    address: 'Sydney No. 1 Lake Park',
                    date: '2016-10-02'
                },
                {
                    name: 'Jon Snow',
                    age: 26,
                    address: 'Ottawa No. 2 Lake Park',
                    date: '2016-10-04'
                }
            ],
            currentRow: null,
            oldCurrentRow: null,
        }
    },
    methods: {
        handleCurrentRow (currentRow, oldCurrentRow) {
            this.currentRow = currentRow;
            this.oldCurrentRow = oldCurrentRow;
        },
        handleClear () {
            this.currentRow = [];
            this.oldCurrentRow = [];

            this.$refs.IvueTable.clearCurrentRow();
        },
    }
}
</script>

<style lang="scss" scoped>
.ivue-button {
  margin: 0;
}
</style>
