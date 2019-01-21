<template>
      <div>
            <IvueSelect filterable>
                  <IvueOptionGroup :label="'one'">
                        <IvueOption
                              v-for="(item,index) in grop1"
                              :value="item.value"
                              :label="item.label"
                              :key="index"
                        >
                              <span>{{ item.label }}</span>
                        </IvueOption>
                  </IvueOptionGroup>
                  <IvueOptionGroup :label="'two'">
                        <IvueOption
                              v-for="(item,index) in grop2"
                              :value="item.value"
                              :label="item.label"
                              :key="index"
                        >
                              <span>{{ item.label }}</span>
                        </IvueOption>
                  </IvueOptionGroup>
            </IvueSelect>
      </div>
</template>

<script>
export default {
      data () {
            return {
                  value1: [],
                  grop1: [{
                        value: 'New York',
                        label: 'New York'
                  },
                  {
                        value: 'London',
                        label: 'London'
                  },
                  {
                        value: 'Sydney',
                        label: 'Sydney'
                  }
                  ],
                  grop2: [{
                        value: 'Ottawa',
                        label: 'Ottawa'
                  },
                  {
                        value: 'Paris',
                        label: 'Paris'
                  },
                  {
                        value: 'Canberra',
                        label: 'Canberra'
                  }
                  ]
            }
      }
}
</script>
