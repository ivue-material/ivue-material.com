<template>
    <div class="default">
        <IvueButton @click="show = !show">click</IvueButton>
        <IvueTooltip color="#303133" content="v-model" v-model="show">
            <IvueButton>v-model</IvueButton>
        </IvueTooltip>
    </div>
</template>

<script>
export default {
    data () {
        return {
            show: false
        }
    }
}
</script>

<style lang="scss" scoped>
.default {
  display: flex;
  justify-content: center;
  align-items: center;
  .ivue-tooltip {
    margin-right: 50px;
  }
  .slot-content {
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      font-size: 16px;
    }
  }
}
</style>
