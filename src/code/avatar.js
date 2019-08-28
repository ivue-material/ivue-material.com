let code = {};


code.base = `
<template>
    <div class="default">
        <IvueAvatar src="https://raw.githubusercontent.com/qq282126990/ivue-ui/master/logo.png"></IvueAvatar>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.default {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
`

code.size = `
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
                fontSize: '\${input / 2\}px'
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
                    fontSize: '\${input / 2\}px'
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
`;

code.color = `
<template>
    <div>
        <IvueAvatar color="#F41D74" :size="50">#F41D74</IvueAvatar>
        <IvueAvatar color="orange" :size="50">orange</IvueAvatar>
        <IvueAvatar color="#FFC009" :size="50">#FFC009</IvueAvatar>
        <IvueAvatar color="#6DBF07" :size="50">#6DBF07</IvueAvatar>
        <IvueAvatar color="#009FC7" :size="50">#009FC7</IvueAvatar>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.ivue-avatar {
  margin-right: 20px;
}
</style>
`

code.square = `
<template>
    <div>
        <IvueAvatar color="#F41D74" size="40" shape="square">square</IvueAvatar>
        <IvueAvatar color="orange" size="40" shape="circle">circle</IvueAvatar>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.ivue-avatar {
  margin-right: 20px;
}
</style>
`;



export default code;
