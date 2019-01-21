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
