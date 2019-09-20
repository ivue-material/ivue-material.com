<template>
    <div class="ivue-table-color">
        <IvueTable :headerColor="headerColor" :tableHeader="tableHeader" :tableData="tableData"></IvueTable>
        <IvueTable :tableHeader="tableHeader1" :tableData="tableData1"></IvueTable>
        <IvueTable :rowClassName="rowClassName" :tableHeader="tableHeader1" :tableData="tableData2"></IvueTable>
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
                    className: 'one-column'
                },
                {
                    title: 'Age',
                    key: 'age',
                    className: 'two-column'
                },
                {
                    title: 'Address',
                    key: 'address',
                    className: 'three-column'
                },
                {
                    title: 'Date',
                    key: 'date',
                    className: 'four-column'
                },
                {
                    title: 'Time',
                    key: 'time',
                    className: 'fives-column'
                },
            ],
            tableHeader1: [
                {
                    title: 'Name',
                    key: 'name',
                },
                {
                    title: 'Age',
                    key: 'age',
                },
                {
                    title: 'Address',
                    key: 'address',
                },
                {
                    title: 'Date',
                    key: 'date',
                },
                {
                    title: 'Time',
                    key: 'time',
                },
            ],
            tableData: [
                {
                    name: 'John Brown',
                    age: 18,
                    address: 'New York No. 1 Lake Park',
                    date: '2016-10-03',
                    time: '10:00',
                },
                {
                    name: 'Jim Green',
                    age: 24,
                    address: 'London No. 1 Lake Park',
                    date: '2016-10-01',
                    time: '11:00',
                },
                {
                    name: 'Joe Black',
                    age: 30,
                    address: 'Sydney No. 1 Lake Park',
                    date: '2016-10-02',
                    time: '12:00',
                },
                {
                    name: 'Jon Snow',
                    age: 26,
                    address: 'Ottawa No. 2 Lake Park',
                    date: '2016-10-04',
                    time: '13:00',
                }
            ],
            tableData1: [
                {
                    name: 'John Brown',
                    age: 18,
                    address: 'New York No. 1 Lake Park',
                    date: '2016-10-03',
                    time: '10:00',
                    cellClassName: {
                        name: 'one-column',
                        age: 'two-column',
                        address: 'three-column',
                        date: 'four-column',
                        time: 'fives-column',
                    },
                },
                {
                    name: 'Jim Green',
                    age: 24,
                    address: 'London No. 1 Lake Park',
                    date: '2016-10-01',
                    time: '11:00',
                },
                {
                    name: 'Joe Black',
                    age: 30,
                    address: 'Sydney No. 1 Lake Park',
                    date: '2016-10-02',
                    time: '12:00',
                    cellClassName: {
                        name: 'one-column',
                        age: 'two-column',
                        address: 'three-column',
                        date: 'four-column',
                        time: 'fives-column',
                    },
                },
                {
                    name: 'Jon Snow',
                    age: 26,
                    address: 'Ottawa No. 2 Lake Park',
                    date: '2016-10-04',
                    time: '13:00',
                }
            ],
            tableData2: [
                {
                    name: 'John Brown',
                    age: 18,
                    address: 'New York No. 1 Lake Park',
                    date: '2016-10-03',
                    time: '10:00',
                },
                {
                    name: 'Jim Green',
                    age: 24,
                    address: 'London No. 1 Lake Park',
                    date: '2016-10-01',
                    time: '11:00',
                },
                {
                    name: 'Joe Black',
                    age: 30,
                    address: 'Sydney No. 1 Lake Park',
                    date: '2016-10-02',
                    time: '12:00',
                },
                {
                    name: 'Jon Snow',
                    age: 26,
                    address: 'Ottawa No. 2 Lake Park',
                    date: '2016-10-04',
                    time: '13:00',
                }
            ],
            headerColor: [
                {
                    bg: '#F41D74',
                    color: '#fff'
                }, {
                    bg: 'orange',
                    color: '#fff'
                },
                {
                    bg: '#FFC009',
                    color: '#fff'
                },
                {
                    bg: '#6DBF07',
                    color: '#fff'
                },
                {
                    bg: '#009FC7',
                    color: '#fff'
                }
            ]
        }
    },
    methods: {
        rowClassName (row, index) {
            return `table-info-row-${index + 1}`;
        },
    }
}
</script>

<style lang="scss">
.ivue-table-color {
  .ivue-table-wrapper {
    margin-bottom: 50px;
  }
}

.ivue-table .ivue-table-td.one-column {
  background-color: #009fc7;
  color: #fff;
}

.ivue-table .ivue-table-td.two-column {
  background-color: #6dbf07;
  color: #fff;
}

.ivue-table .ivue-table-td.three-column {
  background-color: #ffc009;
  color: #fff;
}

.ivue-table .ivue-table-td.four-column {
  background-color: orange;
  color: #fff;
}

.ivue-table .ivue-table-td.fives-column {
  background-color: #f41d74;
  color: #fff;
}

.ivue-table .table-info-row-1 .ivue-table-td {
  background-color: #009fc7;
  color: #fff;
}

.ivue-table .table-info-row-2 .ivue-table-td {
  background-color: #ffc009;
  color: #fff;
}

.ivue-table .table-info-row-3 .ivue-table-td {
  background-color: orange;
  color: #fff;
}

.ivue-table .table-info-row-4 .ivue-table-td {
  background-color: #f41d74;
  color: #fff;
}
</style>
