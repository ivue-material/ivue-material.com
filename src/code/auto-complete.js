let code = {};


code.base = `
<template>
      <IvueAutoComplete v-model="value" :data="data" @on-search="handleSearch"></IvueAutoComplete>
</template>

<script>
      export default {
            data () {
                  return {
                        value: '',
                        data: []
                  }
            },
            methods: {
                  handleSearch (value) {
                        this.data = !value ? [] : [
                              value,
                              value + value,
                              value + value + value
                        ];
                  }
            }
      }
</script>
`;


code.slot = `
<template>
      <div>
            <IvueAutoComplete v-model="value" :data="data" @on-search="handleSearch">
                  <IvueOption v-for="item in data" :value="item" :key="item">
                        <span>{{ item }}</span>
                  </IvueOption>
            </IvueAutoComplete>
      </div>
</template>

<script>
      export default {
            data () {
                  return {
                        value: '',
                        data: []
                  }
            },
            methods: {
                  handleSearch (value) {
                        this.data = !value || value.indexOf('@') >= 0 ? [] : [
                              value + '@qq.com',
                              value + '@sina.com',
                              value + '@163.com'
                        ];
                  }
            }
      }
</script>
`;

code.noUpperCase = `
<template>
      <IvueAutoComplete :value="value" :data="data" :filter-method="filterMethod"></IvueAutoComplete>
</template>

<script>
      export default {
            data () {
                  return {
                        value: '',
                        data: ['Steve Jobs', 'Stephen Gary Wozniak', 'Jonathan Paul Ive']
                  }
            },
            methods: {
                  filterMethod (value, option) {
                        return option.toUpperCase().indexOf(value.toUpperCase()) !== -1;
                  },
            }
      }
</script>
`;



export default code;
