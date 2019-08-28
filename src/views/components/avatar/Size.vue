<template>
    <div class="size-wrapper">
        <div class="input-wrapper">
            <p>要设置的大小</p>
        </div>
        <div class="input-wrapper">
            <IvueInput v-model="input" placeholder="请输入大小"></IvueInput>
        </div>
        <div>
            <IvueAvatar color="#F41D74" :size="input" shape="square">
                <p :style="{
                fontSize: `${input / 2}px`
            }">{{input}}</p>
            </IvueAvatar>
            <IvueAvatar
                color="orange"
                :size="input"
                src="https://raw.githubusercontent.com/qq282126990/ivue-ui/master/logo.png"
            ></IvueAvatar>
            <IvueAvatar
                color="#FFC009"
                :size="input"
                icon="brightness_5"
                :style="{
                fontSize: `${input / 2}px`
            }"
            ></IvueAvatar>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            input: 40
        }
    }
}
</script>

<style lang="scss" scoped>
.size-wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  .ivue-avatar {
    margin-right: 20px;
  }
}
.input-wrapper {
  width: 100px;
  margin-bottom: 20px;
}
</style>
