<template>
    <div class="ivue-table-width">
        <IvueTable :tableHeader="tableHeader" :tableData="tableData" width="300" height="200"></IvueTable>
    </div>
</template>

<script>
export default {
    data () {
        return {
            tableHeader: [
                {
                    title: 'Name',
                    key: 'name',
                    width: 200,
                },
                {
                    title: 'Age',
                    key: 'age',
                    width: 200,
                },
                {
                    title: 'Address',
                    key: 'address',
                    width: 200,
                }
            ],
            tableData: [
                {
                    name: 'John Brown',
                    age: 18,
                    address: 'New York No. 1 Lake Park',
                    date: '2016-10-03',
                    width: 100,
                },
                {
                    name: 'Jim Green',
                    age: 24,
                    address: 'London No. 1 Lake Park',
                    date: '2016-10-01',
                    width: 100,
                },
                {
                    name: 'Joe Black',
                    age: 30,
                    address: 'Sydney No. 1 Lake Park',
                    date: '2016-10-02',
                    width: 100,
                },
                {
                    name: 'Jon Snow',
                    age: 26,
                    address: 'Ottawa No. 2 Lake Park',
                    date: '2016-10-04',
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.ivue-table-width {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
