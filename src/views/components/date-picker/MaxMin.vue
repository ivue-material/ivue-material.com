<template>
      <div>
            <IvueDatePicker v-model="dates" min="2019-01-01" max="2019-03-20"></IvueDatePicker>
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
