<template>
      <div>
            <IvueDatePicker
                  v-model="dates"
                  prev-icon="arrow_back"
                  next-icon="arrow_forward"
                  year-icon="event_note"
            ></IvueDatePicker>
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

<style scoped>
</style>