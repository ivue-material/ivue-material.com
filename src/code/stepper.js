let code = {};


code.base = `
<template>
      <IvueStepper :current-step="current">
            <IvueStepperStep title="已完成" content="这里是该步骤的描述信息"></IvueStepperStep>
            <IvueStepperStep title="进行中" content="这里是该步骤的描述信息"></IvueStepperStep>
            <IvueStepperStep title="待进行" content="这里是该步骤的描述信息"></IvueStepperStep>
            <IvueStepperStep title="待进行" content="这里是该步骤的描述信息"></IvueStepperStep>
      </IvueStepper>
</template>

<script>
      export default {
            data () {
                  return {
                        current: 1
                  }
            }
      }
</script>
`;


code.vertical = `
<template>
      <IvueStepper :current-step="current" direction="vertical">
            <IvueStepperStep title="已完成" content="这里是该步骤的描述信息"></IvueStepperStep>
            <IvueStepperStep title="进行中" content="这里是该步骤的描述信息"></IvueStepperStep>
            <IvueStepperStep title="待进行" content="这里是该步骤的描述信息"></IvueStepperStep>
            <IvueStepperStep title="待进行" content="这里是该步骤的描述信息"></IvueStepperStep>
      </IvueStepper>
</template>

<script>
      export default {
            data () {
                  return {
                        current: 1
                  }
            }
      }
</script>
`;

code.icon = `
<template>
      <IvueStepper :current-step="current">
            <IvueStepperStep title="注册" icon="edit"></IvueStepperStep>
            <IvueStepperStep title="进行中" icon="touch_app"></IvueStepperStep>
            <IvueStepperStep title="待进行" icon="trending_flat"></IvueStepperStep>
            <IvueStepperStep title="待进行" icon="trending_up"></IvueStepperStep>
      </IvueStepper>
</template>

<script>
      export default {
            data () {
                  return {
                        current: 1
                  }
            }
      }
</script>
`;


code.next = `
<template>
      <div>
            <p>当前正在进行第 {{ current + 1 }} 步</p>
            <IvueStepper :current-step="current">
                  <IvueStepperStep title="注册"></IvueStepperStep>
                  <IvueStepperStep title="进行中"></IvueStepperStep>
                  <IvueStepperStep title="待进行"></IvueStepperStep>
                  <IvueStepperStep title="待进行"></IvueStepperStep>
            </IvueStepper>
            <IvueButton @click="next">Next step</IvueButton>
      </div>
</template>

<script>
      export default {
            data () {
                  return {
                        current: 1
                  }
            },
            methods: {
                  next () {
                        if (this.current == 3) {
                              this.current = 0;
                        } else {
                              this.current += 1;
                        }
                  }
            }
      }
</script>
`;


code.clickStep = `
<template>
      <IvueStepper :current-step="current">
            <IvueStepperStep title="已完成" content="这里是该步骤的描述信息" editable></IvueStepperStep>
            <IvueStepperStep title="进行中" content="这里是该步骤的描述信息" editable></IvueStepperStep>
            <IvueStepperStep title="待进行" content="这里是该步骤的描述信息" editable></IvueStepperStep>
            <IvueStepperStep title="待进行" content="这里是该步骤的描述信息" editable></IvueStepperStep>
      </IvueStepper>
</template>

<script>
      export default {
            data () {
                  return {
                        current: 1
                  }
            }
      }
</script>
`;


code.error = `
<template>
      <IvueStepper :current-step="current" status="error">
            <IvueStepperStep title="已完成" content="这里是该步骤的描述信息"></IvueStepperStep>
            <IvueStepperStep title="进行中" content="这里是该步骤的描述信息"></IvueStepperStep>
            <IvueStepperStep title="待进行" content="这里是该步骤的描述信息"></IvueStepperStep>
            <IvueStepperStep title="待进行" content="这里是该步骤的描述信息"></IvueStepperStep>
      </IvueStepper>
</template>

<script>
      export default {
            data () {
                  return {
                        current: 1
                  }
            }
      }
</script>
`;

export default code;
