<template>
    <div class="default">
        <IvueTooltip color="#303133" content="left" placement="left">
            <IvueButton>left</IvueButton>
        </IvueTooltip>
        <IvueTooltip color="#303133" content="top" placement="top">
            <IvueButton>top</IvueButton>
        </IvueTooltip>
        <IvueTooltip color="#303133" content="bottom" placement="bottom">
            <IvueButton>bottom</IvueButton>
        </IvueTooltip>

        <IvueTooltip color="#303133" content="right" placement="right">
            <IvueButton>right</IvueButton>
        </IvueTooltip>
    </div>
</template>

<script>
export default {

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
}
</style>
