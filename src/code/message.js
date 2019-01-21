let code = {};


code.base = `
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
`;

code.type = `
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
`;


code.loading = `
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
`;


code.duration = `
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
`;


code.closable = `
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
`;


code.render = `
<template>
      <div>
            <IvueButton @click="renderFunc">message</IvueButton>
      </div>
</template>

<script>
      export default {
            methods: {
                  renderFunc () {
                        this.$IvueMessage.info({
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
