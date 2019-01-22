<template>
      <div>
            <IvueDatePicker v-model="dates" color="blue"></IvueDatePicker>
            <IvueDatePicker v-model="dates" header-color="green"></IvueDatePicker>
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
