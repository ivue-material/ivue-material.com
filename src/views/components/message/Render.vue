<template>
      <div>
            <IvueButton @click="renderFunc">message</IvueButton>
      </div>
</template>

<script>
export default {
      methods: {
            renderFunc () {
                  this.$IvueMessage.info({
                        render: h => {
                              return h('span', [
                                    'This is created by ',
                                    h('a', 'render'),
                                    ' function'
                              ])
                        }
                  });
            }
      }
}
</script>

