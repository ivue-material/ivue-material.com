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
