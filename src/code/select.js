let code = {};


code.base = `
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
`;

code.mltiple = `
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
`;


code.filterable = `
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
`;


code.disabled = `
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
`;


code.group = `
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
`;

export default code;
