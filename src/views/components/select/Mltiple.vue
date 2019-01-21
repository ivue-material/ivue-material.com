<template>
      <div>
            {{value}}
            <IvueSelect v-model="value" multiple>
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
                  value: [],
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
