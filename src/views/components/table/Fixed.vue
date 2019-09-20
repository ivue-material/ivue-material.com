<template>
    <div>
        <IvueTable :tableHeader="tableHeader1" :tableData="tableData1"></IvueTable>
    </div>
</template>

<script>
export default {
    data () {
        return {
            tableHeader1: [
                {
                    title: 'Name',
                    key: 'name',
                    fixed: 'left',
                },
                {
                    title: 'Age',
                    key: 'age',
                },
                {
                    title: 'Address',
                    key: 'address'
                },
                {
                    title: 'Date',
                    key: 'date',
                    fixed: 'right'
                }
            ],
            tableData1: [
                {
                    name: 'John Brown',
                    age: 18,
                    address: 'New York No. 1 Lake Park',
                    date: '2016-10-03',
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
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
</style>
