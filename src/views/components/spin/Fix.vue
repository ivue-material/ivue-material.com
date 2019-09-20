<template>
    <div class="spin-wrapper">
        <div class="spin-container">
            <IvueSpin fix></IvueSpin>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.spin-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.spin-container {
  display: inline-block;
  width: 200px;
  height: 100px;
  position: relative;
  border: 1px solid #000;
}
</style>
