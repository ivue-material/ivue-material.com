<template>
    <div>
        <IvueSwitch v-model="open1" @on-change="handleChange" color="#F41D74"></IvueSwitch>
        <IvueSwitch v-model="open2" color="orange"></IvueSwitch>
        <IvueSwitch v-model="open3" color="#FFC009"></IvueSwitch>
        <IvueSwitch v-model="open4" color="#6DBF07"></IvueSwitch>
        <IvueSwitch v-model="open5" color="#009FC7"></IvueSwitch>
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
    },
    methods: {
        handleChange () {
            this.$IvueMessage.success({
                content: '当前开关状态' + this.open1,
                closable: true
            });
        }
    }
}
</script>

<style lang="scss" scoped>
.ivue-switch {
  margin-right: 20px;
}
</style>
