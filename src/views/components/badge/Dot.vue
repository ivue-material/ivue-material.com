<template>
      <div>
            <IvueBadge dot class="badge">
                  <a href="#" class="demo-badge"></a>
            </IvueBadge>

            <IvueBadge dot class="badge">
                  <ivue-icon class="demo-badge">notifications</ivue-icon>
            </IvueBadge>
      </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.badge {
      display: table;
      margin-right: 40px;
}
.demo-badge {
      width: 42px;
      height: 42px;
      background: #eee;
      border-radius: 6px;
      display: inline-block;
}
</style>