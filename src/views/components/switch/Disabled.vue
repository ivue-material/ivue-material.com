<template>
      <div>
            <IvueSwitch :disabled="disabled"></IvueSwitch>

            <IvueButton @click="handlClick">开启禁用/关闭禁用</IvueButton>
      </div>
</template>

<script>
export default {
      data () {
            return {
                  disabled: true
            }
      },
      methods: {
            handlClick () {
                  this.disabled = !this.disabled
            }
      }
}
</script>
