<template>
      <div>
            <IvueButton @click="open">Open notice</IvueButton>
      </div>
</template>

<script>
export default {
      methods: {
            open () {
                  this.$IvueMessage.info('This is created by ')
            }
      }
}
</script>
