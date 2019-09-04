let code = {};

code.base = `
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
`;

code.pageSize = `
<template>
    <div>
        <IvuePage :total="100" :pageSize="10" :pageSizeOpts="[10,20,30]"></IvuePage>
    </div>
</template>

<script>
export default {

}
</script>
`;

code.elevator = `
<template>
    <div>
        <IvuePage :total="100" showElevator></IvuePage>
    </div>
</template>

<script>
export default {

}
</script>
`;

code.color = `
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
`;

export default code;
