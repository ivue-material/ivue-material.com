<template>
      <div>
            <IvueDatePicker v-model="dates"></IvueDatePicker>
            <IvueDatePicker v-model="dates" landscape full-width></IvueDatePicker>
      </div>
</template>

<script>
export default {
      data () {
            return {
                  dates: new Date().toISOString().substr(0, 10)
            }
      }
}
</script>
