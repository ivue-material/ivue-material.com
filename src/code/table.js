let code = {};

code.base = `
<template>
    <div>
        <IvueTable :tableHeader="tableHeader" :tableData="tableData"></IvueTable>
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
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
</style>
`

code.border = `
<template>
    <div>
        <IvueTable border :tableHeader="tableHeader" :tableData="tableData"></IvueTable>
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
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
</style>
`

code.color = `
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
            return \`table-info-row-\${index+1\}\`;
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
`;

code.height = `
<template>
    <div>
        <IvueTable :tableHeader="tableHeader" :tableData="tableData" height="200"></IvueTable>
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
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
</style>
`;


code.fixed = `
<template>
    <div>
        <IvueTable :tableHeader="tableHeader" :tableData="tableData"></IvueTable>
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
                    fixed: 'left'
                },
                {
                    title: 'Age',
                    key: 'age'
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
            tableData: [
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
`;

code.width = `
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
`


code.highlight = `
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
`;

code.selection = `
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
`

code.isRender = `
<template>
    <div>
        <IvueTable :tableHeader="tableHeader" :tableData="tableData"></IvueTable>
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
                        render: (h, params) => {
                            return h('div', [
                                h('strong', \`\${params.row.name\}\`)
                            ]);
                        }
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
`;

code.slotScope = `
<template>
    <div>
        <IvueTable :tableHeader="tableHeader" :tableData="tableData">
            <template slot-scope="{ row,index }" slot="name">
                <strong>第{{index + 1}}行——{{ row.name }}</strong>
            </template>
        </IvueTable>
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
                    slot: 'name',
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
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
</style>
`;

code.expand = `
<template>
    <div>
        <IvueTable :tableHeader="tableHeader" :tableData="tableData"></IvueTable>
    </div>
</template>

<script>
export default {
    data () {
        return {
            tableHeader: [
                {
                    type: 'expand',
                    width: 50,
                    render: (h, params) => {
                        return h('div', \`\${params.row.name\}\`)
                    }
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
            ]
        }
    }
}
</script>

<style lang="scss">
.ivue-table-header--th,
.ivue-table-td {
  padding: 0 !important;
}

.ivue-table-expanded--cell {
  padding: 20px 50px !important;
}
</style>
`;

code.loading = `
<template>
    <div>
        <IvueTable :tableHeader="tableHeader" :tableData="tableData" loading></IvueTable>
        <div class="text">切换 Loading 状态</div>
        <IvueSwitch color="#F41D74"></IvueSwitch>
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
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.ivue-switch {
  margin-top: 10px;
}
.text {
  margin-top: 10px;
}
</style>
`;

export default code;
