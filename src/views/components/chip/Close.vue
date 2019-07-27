<template>
    <div>
        <IvueChip color="#F41D74" text-color="#ffffff" close v-model="chip1">
            <IvueIcon>account_circle</IvueIcon>AccountCircle
        </IvueChip>
        <IvueChip color="orange" text-color="#ffffff" close v-model="chip2">
            <IvueIcon>star</IvueIcon>Star
        </IvueChip>
        <IvueChip color="#FFC009" text-color="#ffffff" close v-model="chip3">
            <IvueIcon>touch_app</IvueIcon>Touch
        </IvueChip>
        <IvueChip color="#6DBF07" text-color="#ffffff" close v-model="chip4">
            <IvueIcon>room</IvueIcon>Room
        </IvueChip>
        <IvueChip
            color="#009FC7"
            text-color="#ffffff"
            close
            closeIcon="delete_forever"
            v-model="chip5"
        >
            <IvueIcon>face</IvueIcon>Race
        </IvueChip>
    </div>
</template>

<script>
export default {
    data () {
        return {
            chip1: true,
            chip2: true,
            chip3: true,
            chip4: true,
            chip5: true
        }
    }
}
</script>

<style lang="scss" scoped>
</style>
