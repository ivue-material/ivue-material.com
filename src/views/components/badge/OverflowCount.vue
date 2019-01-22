<template>
      <div>
            <IvueBadge :count="100">
                  <a href="#" class="demo-badge"></a>
            </IvueBadge>

            <IvueBadge :count="1000" overflow-count="999">
                  <a href="#" class="demo-badge"></a>
            </IvueBadge>
      </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.ivue-badge{
      margin-right: 10px;
}
.demo-badge {
      width: 42px;
      height: 42px;
      background: #eee;
      border-radius: 6px;
      display: inline-block;
}
</style>