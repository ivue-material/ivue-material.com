<template>
      <div>
            <IvueDatePicker v-model="dates" type="month"></IvueDatePicker>
      </div>
</template>

<script>
export default {
      data () {
            return {
                  dates: new Date().toISOString().substr(0, 7)
            }
      }
}
</script>
