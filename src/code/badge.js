let code = {};


code.base = `
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
`;


code.dot = `
<template>
      <div>
            <IvueBadge dot>
                  <a href="#" class="demo-badge"></a>
            </IvueBadge>

            <IvueBadge dot>
                  <ivue-icon class="demo-badge">notifications</ivue-icon>
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
`;

export default code;
