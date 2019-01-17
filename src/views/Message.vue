<template>
      <div v-highlight v-html="MessageMdContent"></div>
</template>

<script>
import MessageMd from '../markdown/Message.md';

export default {
      name: 'ivue-message',
      computed: {
            MessageMdContent () {
                  return MessageMd;
            }
      }
}
</script>

<style lang="scss" scope>
</style>
