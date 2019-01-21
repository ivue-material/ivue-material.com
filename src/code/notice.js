let code = {};


code.base = `
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
`;

code.type = `
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
`;



code.duration  = `
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
`;


code.render = `
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
                              render: h => {
                                    return h('span', [
                                          'This is created by ',
                                          h('a', 'render'),
                                          ' function'
                                    ])
                              }
                        });
                  }
            }
      }
</script>
`;

export default code;
