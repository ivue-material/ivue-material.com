<template>
      <div>
            <IvueBadge :count="3">
                  <a href="#" class="demo-badge"></a>
            </IvueBadge>
      </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.demo-badge {
      width: 42px;
      height: 42px;
      background: #eee;
      border-radius: 6px;
      display: inline-block;
}
</style>