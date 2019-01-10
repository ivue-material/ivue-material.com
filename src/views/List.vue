<template>
      <div v-highlight v-html="ListMdContent"></div>
</template>

<script>
import ListMd from '../markdown/List.md';

export default {
      name: 'ivue-list',
      computed: {
            ListMdContent () {
                  return ListMd;
            }
      }
}
</script>

<style lang="scss" scope>
      li {
            list-style: square;
      }
      ul{
            margin-left: 20px;
      }
</style>
