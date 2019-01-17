<template>
      <div v-highlight v-html="DatePickerMdContent"></div>
</template>

<script>
import DatePickerMd from '../markdown/DatePicker.md';

export default {
      name: 'ivue-date-picker',
      computed: {
            DatePickerMdContent () {
                  return DatePickerMd;
            }
      }
}
</script>

<style lang="scss" scope>
</style>
