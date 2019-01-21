<template>
      <div>
            <IvueTabs right color="#fff">
                  <IvueTab v-for="n in 3" :key="n" color="#000">Item {{ n }}</IvueTab>
            </IvueTabs>
      </div>
</template>

<script>
export default {
}
</script>
