<template>
    <IvueList>
        <IvueListItem
            v-for="color in ['primary', 'yellow', 'amber', 'purple', 'warning', 'red']"
            :key="color"
            v-ripple="{ class: `${color}--text` }"
        >
           Item with "{{ color }}" class
        </IvueListItem>
    </IvueList>
</template>

<script>
export default {

}
</script>

<style scoped>
.headline {
  text-align: center;
  padding: 48px 48px;
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: normal;
  font-family: "Roboto", sans-serif;
}
.secondary--text{
    background: #fb8c00;
    color: #fb8c00;
}
</style>
