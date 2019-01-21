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
