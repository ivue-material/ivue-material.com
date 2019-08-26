<template>
    <div>
        <IvueSwitch v-model="open1" color="#F41D74" emboss></IvueSwitch>
        <IvueSwitch v-model="open2" color="orange" emboss></IvueSwitch>
        <IvueSwitch v-model="open3" color="#FFC009" emboss></IvueSwitch>
        <IvueSwitch v-model="open4" color="#6DBF07" emboss></IvueSwitch>
        <IvueSwitch v-model="open5" color="#009FC7" emboss></IvueSwitch>
    </div>
</template>

<script>
export default {
    data () {
        return {
            open1: true,
            open2: true,
            open3: true,
            open4: true,
            open5: true,
        }
    }
}
</script>

<style lang="scss" scoped>
.ivue-switch-emboss--wrapper {
  margin-right: 20px;
}
</style>
