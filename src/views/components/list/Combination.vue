<template>
      <IvueList>
            <IvueListItem @click v-for="item in items" :key="item.title">
                  <IvueIcon>
                        <img class="img" :src="item.avatar">
                  </IvueIcon>
                  <div class="ivue-list-item-text">
                        <span>Ali Connors</span>
                        <span>Brunch this weekend?</span>
                        <p>I'll be in your neighborhood doing errands this week. Do you want to meet?</p>
                  </div>
            </IvueListItem>
      </IvueList>
</template>

<script>
export default {
      data () {
            return {
                  items: [{
                        icon: true,
                        title: 'Jason Oner',
                        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg'
                  },
                  {
                        title: 'Travis Howard',
                        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg'
                  },
                  {
                        title: 'Ali Connors',
                        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg'
                  },
                  {
                        title: 'Cindy Baker',
                        avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg'
                  }
                  ]
            }
      }
}
</script>

<style lang="scss" scoped>
.img {
      height: 100%;
      width: 100%;
      border-radius: 50%;
}

.ivue-list-item-text {
      padding-left: 10px;
      font-size: 12px;
}

p {
      margin: 0;
}
</style>