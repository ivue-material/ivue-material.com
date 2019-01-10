<template>
      <div v-highlight v-html="BottomNavMdContent"></div>
</template>

<script>
import BottomNavMd from '../markdown/BottomNav.md';

export default {
      name: 'ivue-bottom-nav',
      computed: {
            BottomNavMdContent () {
                  return BottomNavMd;
            }
      }
}
</script>

<style lang="scss" scope>
</style>
