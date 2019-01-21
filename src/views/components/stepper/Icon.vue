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
