<template>
      <div>
            <IvueButton @click="time">Displays a closable message</IvueButton>
      </div>
</template>

<script>
export default {
      methods: {
            time () {
                  this.$IvueMessage.info({
                        content: 'Tips for manual closing',
                        duration: 10,
                        closable: true
                  });
            }
      }
}
</script>
