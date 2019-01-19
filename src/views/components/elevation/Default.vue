<template>
      <div>
            <div class="elevation-demo">
                  <div
                        :class="`ivue-elevation-${index} ivue-content`"
                        v-for="(item,index) in 25"
                        :key="index"
                  >{{index}}</div>
            </div>
      </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.elevation-demo {
      padding: 16px;
      display: flex;
      flex-wrap: wrap;
}
.ivue-content {
      width: 100px;
      height: 100px;
      margin: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
}
</style>