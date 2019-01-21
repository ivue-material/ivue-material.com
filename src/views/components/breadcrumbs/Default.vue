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
