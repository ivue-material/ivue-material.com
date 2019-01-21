<template>
      <IvueSelect :value="value">
            <IvueOption v-for="item in data" :value="item.value" :key="item.value">
                  <span>{{ item.label }}</span>
            </IvueOption>
      </IvueSelect>
</template>

<script>
export default {
      data () {
            return {
                  value: '',
                  data: [{
                        value: 'Foo',
                        label: 'Foo'
                  },
                  {
                        value: 'Bar',
                        label: 'Bar'
                  },
                  {
                        value: 'Fizz',
                        label: 'Fizz'
                  },
                  {
                        value: 'Buzz',
                        label: 'Buzz'
                  }
                  ]
            }
      }
}
</script>
