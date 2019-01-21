let code = {};


code.base = `
<template>
      <IvueBreadcrumbs :items="items" divider=">"></IvueBreadcrumbs>
</template>

<script>
      export default {
            data () {
                  return {
                        items: [{
                              text: 'Link 1',
                              disabled: false,
                              href: 'Link 1'
                        },
                        {
                              text: 'Link 2',
                              disabled: false,
                              href: 'Link 2'
                        },
                        {
                              text: 'Link 3',
                              disabled: true,
                              href: 'Link 3'
                        }
                        ]
                  }
            }
      }
</script>
`;

code.icon = `
<template>
      <div>
            <IvueBreadcrumbs :items="items" divider=">">
                  <ivue-icon slot="divider">forward</ivue-icon>
            </IvueBreadcrumbs>

            <IvueBreadcrumbs :items="items" divider=">">
                  <ivue-icon slot="divider">keyboard_arrow_right</ivue-icon>
            </IvueBreadcrumbs>
      </div>
</template>

<script>
      export default {
            data () {
                  return {
                        items: [{
                              text: 'Link 1',
                              disabled: false,
                              href: 'Link 1'
                        },
                        {
                              text: 'Link 2',
                              disabled: false,
                              href: 'Link 2'
                        },
                        {
                              text: 'Link 3',
                              disabled: true,
                              href: 'Link 3'
                        }
                        ]
                  }
            }
      }
</script>
`;


code.item = `
<template>
      <IvueBreadcrumbs :items="items">
            <IvueBreadcrumbs-item
                  :href="item.href"
                  :disabled="item.disabled"
                  v-for="item in items"
                  :key="item.text"
            >{{item.text}}</IvueBreadcrumbs-item>
      </IvueBreadcrumbs>
</template>

<script>
      export default {
            data () {
                  return {
                        items: [{
                              text: 'Link 1',
                              disabled: false,
                              href: 'Link 1'
                        },
                        {
                              text: 'Link 2',
                              disabled: false,
                              href: 'Link 2'
                        },
                        {
                              text: 'Link 3',
                              disabled: true,
                              href: 'Link 3'
                        }
                        ]
                  }
            }
      }
</script>
`;

export default code;
