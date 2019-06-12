<template>
    <div class="default">
        <IvueTooltip color="#303133" content="Tooltip">
            <IvueButton>button</IvueButton>
        </IvueTooltip>
        <IvueTooltip color="#303133" content="Tooltip">
            <IvueIcon>home</IvueIcon>
        </IvueTooltip>
        <IvueTooltip color="#303133" content="Tooltip">
            <span>this is a text</span>
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
    margin-right: 100px;
  }
}
</style>
