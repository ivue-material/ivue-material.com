<template>
      <IvueList>
            <IvueListItem ivue-expand :ivue-expanded.sync="expandNews">
                  <span class="ivue-list-item-text">News</span>

                  <IvueList slot="ivue-expand">
                        <IvueListItem class="ivue-inset">World</IvueListItem>
                        <IvueListItem class="ivue-inset">World</IvueListItem>
                  </IvueList>
            </IvueListItem>
      </IvueList>
</template>

<script>
export default {
      data () {
            return {
                  expandNews: false,
                  expandSingle: false
            }
      }
}
</script>

<style lang="scss" scoped>
</style>