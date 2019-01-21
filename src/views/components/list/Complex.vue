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
}
</style>