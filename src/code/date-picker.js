let code = {};


code.base = `
<template>
      <div>
            <IvueDatePicker v-model="dates"></IvueDatePicker>
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
`;


code.landscape = `
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
`;


code.color = `
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
`;


code.allowedDates = `
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
`;


code.multiple = `
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
`;


code.fullWidth = `
<template>
      <div>
            <IvueDatePicker v-model="dates"></IvueDatePicker>
            <IvueDatePicker v-model="dates" landscape full-width></IvueDatePicker>
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
`;



code.note = `
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
`;


code.locale = `
<template>
      <div>
            <IvueDatePicker v-model="dates" locale="zh-CN"></IvueDatePicker>
            <IvueDatePicker v-model="dates" locale="ja-JP"></IvueDatePicker>
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
`;


code.icon = `
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
`;


code.readonly = `
<template>
      <div>
            <IvueDatePicker v-model="dates" readonly></IvueDatePicker>
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
`;

code.month = `
<template>
      <div>
            <IvueDatePicker v-model="dates" type="month"></IvueDatePicker>
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
`;


code.reactive = `
<template>
      <div>
            <IvueDatePicker v-model="dates" reactive></IvueDatePicker>
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
`;


code.maxMin = `
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
`;

let dateString = '${makeIsoString(dateString)}T00:00:00+00:00';

code.titleDateFormat = `
<template>
      <div>
            <IvueDatePicker
                  v-model="dates"
                  :title-date-format="format('zh-CN',{ weekday: 'short', month: 'short', day: 'numeric', timeZone: 'UTC' })"
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
                              return intlFormatter.format(new Date(${dateString}T00:00:00+00:00))
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
`;


code.titleYearFormat = `
<template>
      <div>
            <IvueDatePicker
                  v-model="dates"
                  :title-year-format="titleYearFormat('zh-CN',{ year: 'numeric', timeZone: 'UTC' })"
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
                  titleYearFormat (locale, options) {
                        // 适配IOS
                        const makeIsoString = (dateString) => {
                              const [year, month, date] = dateString.trim().split(' ')[0].split('-');


                              return [year, month, date].join('-');
                        }
                        // 初始化 根据语言来格式化日期和时间的对象
                        const intlFormatter = new Intl.DateTimeFormat(locale || undefined, options);

                        return (dateString) => {
                              return '12月12日周三'
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
`;


code.dayFormat = `
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
                              return intlFormatter.format(new Date(${dateString}T00:00:00+00:00))
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
`;


code.headerDateFormat = `
<template>
      <div>
            <IvueDatePicker
                  v-model="dates"
                  :header-date-format="format('zh-CN',{ month: 'long', year: 'numeric', timeZone: 'UTC' })"
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
                              return intlFormatter.format(new Date(${dateString}T00:00:00+00:00))
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
`;

export default code;
