<template>
      <div>
            <IvueDatePicker v-model="dates" :landscape="landscape"></IvueDatePicker>

            <IvueButton @click="landscape = true">landscape</IvueButton>

            <IvueButton @click="landscape = false">reactive</IvueButton>
      </div>
</template>

<script>
export default {
      data () {
            return {
                  dates: new Date().toISOString().substr(0, 10),
                  landscape: false
            }
      }
}
</script>
