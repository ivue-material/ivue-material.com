<template>
      <div v-highlight v-html="ElevationMdContent"></div>
</template>

<script>
import ElevationMd from '../markdown/Elevation.md';

export default {
      name: 'elevation',
      computed: {
            ElevationMdContent () {
                  return ElevationMd;
            }
      }
}
</script>

<style lang="scss" scope>
    
</style>
