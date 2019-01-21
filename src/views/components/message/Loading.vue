<template>
      <div>
            <IvueButton @click="loading">loading...</IvueButton>
      </div>
</template>

<script>
export default {
      methods: {
            loading () {
                  const msg = this.$IvueMessage.loading({
                        content: 'Loading...',
                        duration: 0
                  });

                  setTimeout(msg, 3000);
            }
      }
}
</script>
