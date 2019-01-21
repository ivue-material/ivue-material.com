<template>
      <div>
            <p>With desc</p>
            <IvueButton @click="success(false)">success</IvueButton>
            <IvueButton @click="info(false)">info</IvueButton>
            <IvueButton @click="warning(false)">warning</IvueButton>
            <IvueButton @click="error(false)">error</IvueButton>
            <p>Only title</p>
            <IvueButton @click="success(true)">success</IvueButton>
            <IvueButton @click="info(true)">info</IvueButton>
            <IvueButton @click="warning(true)">warning</IvueButton>
            <IvueButton @click="error(true)">error</IvueButton>
      </div>
</template>

<script>
export default {
      methods: {
            success (nodesc) {
                  this.$IvueNotice.success({
                        title: 'Notification title',
                        desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
                  });
            },
            info (nodesc) {
                  this.$IvueNotice.info({
                        title: 'Notification title',
                        desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
                  });
            },
            warning (nodesc) {
                  this.$IvueNotice.warning({
                        title: 'Notification title',
                        desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
                  });
            },
            error (nodesc) {
                  this.$IvueNotice.error({
                        title: 'Notification title',
                        desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
                  });
            }
      }
}
</script>
