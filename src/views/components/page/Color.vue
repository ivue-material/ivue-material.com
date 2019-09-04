<template>
    <div>
        <IvuePage :total="100" :bgList="bgList" :colorList="colorList"></IvuePage>
    </div>
</template>

<script>
export default {
    data () {
        return {
            colorList: ['#fff'],
            bgList: ['#F41D74', 'orange', '#FFC009', '#6DBF07', '#009FC7']
        }
    }
}
</script>
