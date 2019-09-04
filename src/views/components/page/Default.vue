<template>
    <div>
        <p>当前页数:{{value}}</p>
        <IvuePage :total="100" v-model="value"></IvuePage>
    </div>
</template>

<script>
export default {
    data () {
        return {
            value: 1
        }
    }
}
</script>
