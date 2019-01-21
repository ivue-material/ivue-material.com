<template>
      <div>
            <IvueTabs v-model="active" color="#fff" show-arrows>
                  <IvueTab v-for="n in 30" :key="`item${n}`" color="#000">Item {{ n }}</IvueTab>

                  <IvueTabItem v-for="i in 30" :id="'tab-' + i" :key="i">{{ text }}{{i}}</IvueTabItem>
            </IvueTabs>
      </div>
</template>

<script>
export default {
      data () {
            return {
                  active: 0,
                  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            }
      }
}
</script>

<style lang="scss">
.ivue-tabs-icon {
      color: #000 !important;
}
</style>
