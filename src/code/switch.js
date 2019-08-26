let code = {};


code.base = `
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
`;

code.emboss = `
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
`;

code.size = `
<template>
    <div>
        <p>默认样式</p>
        <IvueSwitch size="large" color="#F41D74" v-model="open1"></IvueSwitch>
        <IvueSwitch color="orange" v-model="open2"></IvueSwitch>
        <IvueSwitch size="small" color="#FFC009" v-model="open3"></IvueSwitch>
        <p>浮雕样式</p>
        <IvueSwitch size="large" emboss color="#F41D74" v-model="open4"></IvueSwitch>
        <IvueSwitch emboss color="orange" v-model="open5"></IvueSwitch>
        <IvueSwitch size="small" emboss color="#FFC009" v-model="open6"></IvueSwitch>
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
            open6: true,
        }
    }
}
</script>

<style lang="scss" scoped>
.ivue-switch, .ivue-switch-emboss--wrapper {
  margin-right: 20px;
}
</style>
`;

code.text = `
<template>
    <div>
        <p>默认样式</p>
        <IvueSwitch color="#F41D74" v-model="open1">
            <span slot="open">开</span>
            <span slot="close">关</span>
        </IvueSwitch>
        <IvueSwitch color="orange" v-model="open2">
            <span slot="open">
                <ivue-icon>check</ivue-icon>
            </span>
            <span slot="close">
                <ivue-icon>close</ivue-icon>
            </span>
        </IvueSwitch>
        <IvueSwitch size="large" color="#FFC009" v-model="open3">
            <span slot="open">开启</span>
            <span slot="close">关闭</span>
        </IvueSwitch>
        <p>浮雕样式</p>
        <IvueSwitch color="#F41D74" v-model="open1" emboss>
            <span slot="open">开</span>
            <span slot="close">关</span>
        </IvueSwitch>
        <IvueSwitch color="orange" v-model="open2" emboss>
            <span slot="open">
                <ivue-icon>check</ivue-icon>
            </span>
            <span slot="close">
                <ivue-icon>close</ivue-icon>
            </span>
        </IvueSwitch>
        <IvueSwitch size="large" color="#FFC009" v-model="open3" emboss>
            <span slot="open">开启</span>
            <span slot="close">关闭</span>
        </IvueSwitch>
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
            open6: true,
        }
    }
}
</script>

<style lang="scss" scoped>
.ivue-icon {
  font-size: 12px;
  min-width: 12px;
  font-weight: bold;
}

.ivue-switch,
.ivue-switch-emboss--wrapper {
  margin-right: 20px;
}
</style>
`;


code.disabled = `
<template>
    <div>
        <p>普通样式</p>
        <IvueSwitch :disabled="disabled" color="#F41D74"></IvueSwitch>
        <p>浮雕样式</p>
        <IvueSwitch :disabled="disabled" color="#F41D74" emboss></IvueSwitch>
        <p>是否开启禁用</p>
        <IvueSwitch color="#FFC009" v-model="disabled" emboss>
            <span slot="open">禁用</span>
            <span slot="close">关闭</span>
        </IvueSwitch>
    </div>
</template>

<script>
export default {
    data () {
        return {
            disabled: true,
            open1: true
        }
    }
}
</script>

<style lang="scss" scoped>
.ivue-switch-emboss--wrapper {
  margin-right: 20px;
}
</style>
`;

code.loading = `
<template>
    <div>
        <p>普通样式</p>
        <IvueSwitch loading :value="true" size="small" color="#F41D74"></IvueSwitch>
        <IvueSwitch loading :value="true" color="orange"></IvueSwitch>
        <IvueSwitch loading :value="true" size="large" color="#FFC009"></IvueSwitch>
        <p>浮雕样式</p>
        <IvueSwitch loading :value="true" size="small" color="#F41D74" loadingColor="#fff" emboss></IvueSwitch>
        <IvueSwitch loading :value="true" color="orange" loadingColor="#fff" emboss></IvueSwitch>
        <IvueSwitch loading :value="true" size="large" loadingColor="#fff" color="#FFC009" emboss></IvueSwitch>
    </div>
</template>

<script>
export default {
}
</script>


<style lang="scss" scoped>
.ivue-switch {
  margin-right: 20px;
}
</style>
`;

export default code;
