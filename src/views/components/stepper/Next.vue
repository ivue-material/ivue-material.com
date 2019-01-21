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
