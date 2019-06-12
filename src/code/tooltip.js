let code = {};

code.base = `
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
.default{
    display: flex;
    justify-content: center;
    align-items: center;
    .ivue-tooltip{
        margin-right: 100px;
    }
}
</style>
`;

code.placement = `
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
`

code.slot = `
<template>
    <div class="default">
        <IvueTooltip color="#303133">
            <IvueButton>button</IvueButton>
            <div slot="content" class="slot-content">
                <IvueButton icon color="grey">
                    <ivue-icon>shopping_cart</ivue-icon>
                </IvueButton>
                <p>this is a shopping cart</p>
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
  }
}
</style>

`;


export default code;
