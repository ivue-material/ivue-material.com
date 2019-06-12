<template>
    <div class="default">
        <IvueTooltip color="#303133">
            <IvueButton>slot</IvueButton>
            <div slot="content" class="slot-content">
                <IvueButton icon color="grey">
                    <ivue-icon>shopping_cart</ivue-icon>
                </IvueButton>
                <p>This is a shopping cart</p>
            </div>
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
