<template>
      <div>
            <IvueButton @click="open(false)">Open notice</IvueButton>
            <IvueButton @click="open(true)">Open notice(only title)</IvueButton>
      </div>
</template>

<script>
export default {
      methods: {
            open (nodesc) {
                  this.$IvueNotice.open({
                        title: 'Notification title',
                        desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
                  });
            }
      }
}
</script>
