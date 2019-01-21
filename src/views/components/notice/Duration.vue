<template>
      <div>
            <IvueButton @click="open">Open notice</IvueButton>
      </div>
</template>

<script>
export default {
      methods: {
            open () {
                  this.$IvueNotice.open({
                        title: 'Notification title',
                        desc: 'Here is the notification description. Here is the notification description. ',
                        duration: 0
                  });
            }
      }
}
</script>
