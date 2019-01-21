let code = {};


code.base = `
<template>
      <IvueBottomNav :value="true" :active.sync="bottomNav">
            <IvueButton flat color="primary">
                  <span>Recents</span>
                  <IvueIcon>history</IvueIcon>
            </IvueButton>
            <IvueButton flat color="pink">
                  <span>Favorites</span>
                  <IvueIcon>favorite</IvueIcon>
            </IvueButton>
      </IvueBottomNav>
</template>

<script>
export default {
      data () {
            return {
                  bottomNav: 0
            }
      }
}
</script>
`;

code.shift = `
<template>
      <IvueBottomNav :value="true" :active.sync="bottomNav" shift>
            <IvueButton flat color="primary">
                  <span>Recents</span>
                  <IvueIcon>history</IvueIcon>
            </IvueButton>
            <IvueButton flat color="pink">
                  <span>Favorites</span>
                  <IvueIcon>favorite</IvueIcon>
            </IvueButton>
      </IvueBottomNav>
</template>

<script>
export default {
      data () {
            return {
                  bottomNav: 0
            }
      }
}
</script>
`;


code.hide = `
<template>
      <div class="hide-wrapper">
            <IvueButton @click="showNav = !showNav">显示/隐藏</IvueButton>

            <IvueBottomNav v-model="showNav" :active.sync="bottomNav" position="absolute">
                  <IvueButton flat color="primary">
                        <span>Recents</span>
                        <IvueIcon>history</IvueIcon>
                  </IvueButton>
                  <IvueButton flat color="pink">
                        <span>Favorites</span>
                        <IvueIcon>favorite</IvueIcon>
                  </IvueButton>
            </IvueBottomNav>
      </div>
</template>

<script>
      export default {
            data () {
                  return {
                        showNav: true,
                        bottomNav: 0
                  }
            }
      }
</script>


<style lang="scss" scoped>
      .hide-wrapper {
            position: relative;
            height: 200px;
            padding: 20px;
            overflow: hidden;
      }
</style>
`;

export default code;
