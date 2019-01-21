<template>
      <div>
            <IvueTabs fixed-tabs color="#fff">
                  <IvueTab v-for="n in 3" :key="n" :rippleCentered="true" color="#000">Item {{ n }}</IvueTab>
            </IvueTabs>
      </div>
</template>

<script>
export default {

}
</script>
