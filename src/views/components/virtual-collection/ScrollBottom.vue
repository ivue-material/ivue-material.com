<template>
      <div>
            <IvueVirtualCollection
                  :collection="items"
                  :cellSizeAndPositionGetter="cellSizeAndPositionGetter"
                  :height="500"
                  :width="360"
                  :sectionSize="30"
                  @on-reach-bottom="reachBottom"
            >
                  <div slot="cell" slot-scope="props" class="card">{{props.data}}</div>
            </IvueVirtualCollection>
      </div>
</template>

<script>
export default {
      data () {
            return {
                  /**
                   * This will create 1000 items like:
                   * [
                   *   { data: '#0' },
                   *   { data: '#1' },
                   *   ...
                   *   { data: '#999' }
                   * ]
                   */
                  items: new Array(10).fill(0).map((_, index) => ({
                        data: '#' + index
                  }))
            }
      },
      methods: {
            cellSizeAndPositionGetter (item, index) {
                  // compute size and position
                  return {
                        width: 300,
                        height: 150,
                        x: 0,
                        y: parseInt(index) * 160
                  }
            },
            reachBottom () {
                  if (this.items.length === 100) {
                        return
                  }
                  this.items = this.items.concat(new Array(10).fill(0).map((_, index) => ({
                        data: '#' + index * 10
                  })))
            }
      }
}
</script>

<style lang="scss" scoped>
.card {
      background: #aaa;
      width: 100%;
      height: 100%;
      color: #fff;
      line-height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
}
</style>