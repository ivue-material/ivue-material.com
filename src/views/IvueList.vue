<template>
      <div v-highlight v-html="IvueListMdContent"></div>
</template>

<script>
import IvueListMd from '../markdown/IvueList.md';

export default {
      name: 'ivue-list',
      computed: {
            IvueListMdContent () {
                  return IvueListMd;
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
