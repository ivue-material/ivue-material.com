<template>
      <div>
            <p>单项选择</p>
            <IvueSelect :value="value1" filterable>
                  <IvueOption v-for="item in data" :value="item.value" :key="item.value">
                        <span>{{ item.label }}</span>
                  </IvueOption>
            </IvueSelect>
            <p>多项选择</p>
            <IvueSelect :value="value2" filterable multiple>
                  <IvueOption v-for="item in data" :value="item.value" :key="item.value">
                        <span>{{ item.label }}</span>
                  </IvueOption>
            </IvueSelect>
      </div>
</template>

<script>
export default {
      data () {
            return {
                  value1: '',
                  value2: [],
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
