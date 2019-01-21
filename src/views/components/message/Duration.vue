<template>
      <div>
            <IvueButton @click="time">Displays a 10 second prompt</IvueButton>
      </div>
</template>

<script>
export default {
      methods: {
            time () {
                  this.$IvueMessage.info({
                        content: "I'll be gone in 10 seconds",
                        duration: 10
                  });
            }
      }
}
</script>
