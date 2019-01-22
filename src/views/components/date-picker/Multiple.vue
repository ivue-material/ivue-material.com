<template>
      <div>
            <IvueDatePicker v-model="dates" multiple></IvueDatePicker>
      </div>
</template>

<script>
export default {
      data () {
            return {
                  dates: ['2019-01-01', '2019-01-02']
            }
      }
}
</script>

<style scoped>
</style>