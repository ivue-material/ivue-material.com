<template>
      <div>
            <IvueButton @click="start">Start</IvueButton>
            <IvueButton @click="finish">Finish</IvueButton>
            <IvueButton @click="error">Error</IvueButton>
      </div>
</template>

<script>
export default {
      methods: {
            start () {
                  this.$IvueLoadingBar.start();
            },
            finish () {
                  this.$IvueLoadingBar.finish();
            },
            error () {
                  this.$IvueLoadingBar.error();
            }
      }
}
</script>
