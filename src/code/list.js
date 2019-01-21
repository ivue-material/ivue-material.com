let code = {};


code.base = `
<template>
      <IvueList>
            <IvueListItem @click="" v-for="item in items" :key="item.title">
                  <IvueIcon :class="item.icon ? 'icon-color' : ''">star</IvueIcon>
                  <p class="title">{{item.title}}</p>
                  <IvueIcon>
                        <img class="img" :src="item.avatar">
                  </IvueIcon>
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

      .icon-color {
            color:#ff9900;
      }

      .title {
            flex: 1;
            padding-left: 10px;
      }
</style>
`;

code.combination = `
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
      font-size: 12px
      }
</style>
`;


code.complex = `
<template>
      <IvueList>
            <IvueListItem>Plain Text</IvueListItem>
            <IvueListItem :disabled="true">button</IvueListItem>
            <IvueListItem @click>button</IvueListItem>
            <IvueListItem href="'www.baidu.com'">link</IvueListItem>
            <IvueListItem to="/">routerLink</IvueListItem>
      </IvueList>
</template>

<script>
      export default {
      }
</script>

<style lang="scss" scoped>
      .ivue-list {
            width: 320px;
            max-width: 100%;
            display: inline-block;
            vertical-align: top;
            border: 1px solid rgba(#000, 0.12);
            margin: 0;
            li {
                  list-style: none;
            }
      }
</style>
`;


code.expand = `
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
      .ivue-list {
            margin: 0;
            li {
                  list-style: none;
            }
      }
</style>
`;

export default code;
