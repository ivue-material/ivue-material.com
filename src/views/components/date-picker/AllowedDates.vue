<template>
      <div>
            <IvueDatePicker v-model="dates" :allowed-dates="allowedDates"></IvueDatePicker>
      </div>
</template>

<script>
export default {
      data () {
            return {
                  dates: new Date().toISOString().substr(0, 10)
            }
      },
      methods: {
            allowedDates: val => {
                  return parseInt(val.split('-')[2], 10) % 2 === 0
            }
      }
}
</script>
