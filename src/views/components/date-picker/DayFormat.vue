<template>
      <div>
            <IvueDatePicker
                  v-model="dates"
                  :day-format="format('zh-CN',{ day: 'numeric', timeZone: 'UTC' })"
            ></IvueDatePicker>
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
            format (locale, options) {
                  // 适配IOS
                  const makeIsoString = (dateString) => {
                        const [year, month, date] = dateString.trim().split(' ')[0].split('-');

                        return [year, this.padStart(month || 1, 2, 0), this.padStart(date || 1, 2, 0)].join('-');
                  }
                  // 初始化 根据语言来格式化日期和时间的对象
                  const intlFormatter = new Intl.DateTimeFormat(locale || undefined, options);

                  return (dateString) => {
                        return intlFormatter.format(new Date(`${makeIsoString(dateString)}T00:00:00+00:00`))
                  }
            },
            padStart (string, targetLength, padString) {
                  targetLength = targetLength >> 0;
                  string = String(string);
                  padString = String(padString);
                  if (string.length > targetLength) {
                        return String(string);
                  }

                  targetLength = targetLength - string.length;

                  if (targetLength > padString.length) {
                        padString += padString.repeat(targetLength / padString.length);
                  }

                  return padString.slice(0, targetLength) + String(string);
            }
      }
}
</script>

<style scoped>
</style>