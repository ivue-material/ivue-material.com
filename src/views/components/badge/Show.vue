<template>
      <div>
            <IvueBadge :count="3" :show="show">
                  <a href="#" class="demo-badge"></a>
            </IvueBadge>

            <button @click="onShow">show</button>
      </div>
</template>

<script>
export default {
      data () {
            return {
                  show: true
            }
      },
      methods: {
            onShow () {
                  this.show = !this.show
            }
      }
}
</script>

<style lang="scss" scoped>
.ivue-badge {
      margin-right: 10px;
}
.demo-badge {
      width: 42px;
      height: 42px;
      background: #eee;
      border-radius: 6px;
      display: inline-block;
}
</style>