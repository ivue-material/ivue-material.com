let code = {};


code.base = `
<template>
    <div>
        <IvueChip>Default</IvueChip>
        <IvueChip disabled>Disabled</IvueChip>
        <IvueChip color="orange" text-color="#ffffff" close>Close</IvueChip>
        <IvueChip outline color="green">Outline</IvueChip>
        <IvueChip square color="indigo" text-color="#ffffff">Square</IvueChip>
        <IvueChip color="cyan" text-color="#ffffff">
            <IvueIcon>mood</IvueIcon>Icon
        </IvueChip>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
</style>
`;

code.icon = `
<template>
    <div>
        <IvueChip color="#F41D74" text-color="#ffffff">
            <IvueIcon>account_circle</IvueIcon>AccountCircle
        </IvueChip>
        <IvueChip color="orange" text-color="#ffffff">
            <IvueIcon>star</IvueIcon>Star
        </IvueChip>
        <IvueChip color="#FFC009" text-color="#ffffff">
            <IvueIcon>touch_app</IvueIcon>Touch
        </IvueChip>
        <IvueChip color="#6DBF07" text-color="#ffffff" close>
            <IvueIcon>room</IvueIcon>Room
        </IvueChip>
        <IvueChip color="#009FC7" text-color="#ffffff" close closeIcon="delete_forever">
            <IvueIcon>face</IvueIcon>Race
        </IvueChip>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
</style>
`

code.outline = `
<template>
    <div>
        <IvueChip color="#F41D74" outline>
            <IvueIcon>account_circle</IvueIcon>AccountCircle
        </IvueChip>
        <IvueChip color="orange" outline>
            <IvueIcon>star</IvueIcon>Star
        </IvueChip>
        <IvueChip color="#FFC009" outline>
            <IvueIcon>touch_app</IvueIcon>Touch
        </IvueChip>
        <IvueChip color="#6DBF07" close outline>
            <IvueIcon>room</IvueIcon>Room
        </IvueChip>
        <IvueChip color="#009FC7" close closeIcon="delete_forever" outline>
            <IvueIcon>face</IvueIcon>Race
        </IvueChip>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
</style>
`

code.square = `<template>
<div>
    <IvueChip color="#F41D74" text-color="#ffffff" square>
        <IvueIcon>account_circle</IvueIcon>AccountCircle
    </IvueChip>
    <IvueChip color="orange" text-color="#ffffff" square>
        <IvueIcon>star</IvueIcon>Star
    </IvueChip>
    <IvueChip color="#FFC009" text-color="#ffffff" square>
        <IvueIcon>touch_app</IvueIcon>Touch
    </IvueChip>
    <IvueChip color="#6DBF07" text-color="#ffffff" close square>
        <IvueIcon>room</IvueIcon>Room
    </IvueChip>
    <IvueChip color="#009FC7" text-color="#ffffff" close closeIcon="delete_forever" square>
        <IvueIcon>face</IvueIcon>Race
    </IvueChip>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
</style>
`


code.close = `
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
`

export default code;
