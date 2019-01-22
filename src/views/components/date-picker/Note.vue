<template>
      <div>
            <IvueDatePicker v-model="dates" :note="arrayEvents"></IvueDatePicker>
            <IvueDatePicker
                  v-model="dates"
                  :note="arrayEvents"
                  :note-color="date => date[9] % 2 ? 'red' : 'yellow'"
            ></IvueDatePicker>
      </div>
</template>

<script>
export default {
      data () {
            return {
                  dates: new Date().toISOString().substr(0, 10),
                  arrayEvents: null
            }
      },
      mounted () {
            this.arrayEvents = [...Array(6)].map(() => {
                  const day = Math.floor(Math.random() * 30)
                  const d = new Date()
                  d.setDate(day)
                  return d.toISOString().substr(0, 10)
            })
      }
}
</script>
