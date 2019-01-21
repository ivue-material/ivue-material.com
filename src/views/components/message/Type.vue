<template>
      <div>
            <p>With desc</p>
            <IvueButton @click="success">success</IvueButton>
            <IvueButton @click="info">info</IvueButton>
            <IvueButton @click="warning">warning</IvueButton>
            <IvueButton @click="error">error</IvueButton>
      </div>
</template>

<script>
export default {
      methods: {
            success (nodesc) {
                  this.$IvueMessage.success('This is created by ');
            },
            info (nodesc) {
                  this.$IvueMessage.info('This is created by ');
            },
            warning (nodesc) {
                  this.$IvueMessage.warning('This is created by ');
            },
            error (nodesc) {
                  this.$IvueMessage.error('This is created by ');
            }
      }
}
</script>
