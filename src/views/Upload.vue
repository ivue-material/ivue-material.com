<template>
      <div v-highlight v-html="UploadMdContent"></div>
</template>

<script>
import UploadMd from '../markdown/Upload.md';

export default {
      name: 'ivue-upload',
      computed: {
          UploadMdContent () {
                  return UploadMd;
            }
      }
}
</script>

<style lang="scss" scope>
</style>
