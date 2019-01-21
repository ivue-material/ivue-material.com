<template>
      <div>
            <p>禁用整个选项器</p>
            <IvueSelect :value="value1" disabled>
                  <IvueOption v-for="item in data" :value="item.value" :key="item.value">
                        <span>{{ item.label }}</span>
                  </IvueOption>
            </IvueSelect>
            <p>禁用某个选项</p>
            <IvueSelect :value="value1">
                  <IvueOption
                        v-for="(item,index) in data"
                        :value="item.value"
                        :key="item.value"
                        :disabled="index===0"
                  >
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
