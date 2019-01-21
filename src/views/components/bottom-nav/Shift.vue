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
