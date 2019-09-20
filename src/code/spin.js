let code = {};


code.base = `
<template>
    <div class="spin-wrapper">
        <IvueSpin></IvueSpin>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.spin-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
`

code.size = `
<template>
    <div class="spin-wrapper">
        <p>小</p>
        <IvueSpin size="small"></IvueSpin>
        <p>中</p>
        <IvueSpin></IvueSpin>
        <p>大</p>
        <IvueSpin size="large"></IvueSpin>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.spin-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
`

code.fix = `
<template>
    <div class="spin-wrapper">
        <div class="spin-container">
            <IvueSpin fix></IvueSpin>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.spin-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.spin-container {
  display: inline-block;
  width: 200px;
  height: 100px;
  position: relative;
  border: 1px solid #000;
}
</style>
`;

code.content = `
<template>
    <div>
        <div class="spin-col">
            <IvueSpin fix>加载中...</IvueSpin>
        </div>
        <div class="spin-col">
            <IvueSpin fix>
                <IvueIcon class="spin-icon-load">donut_large</IvueIcon>
                <div>Loading</div>
            </IvueSpin>
        </div>
        <div class="spin-col">
            <IvueSpin fix>
                <div class="loader">
                    <svg class="circular" viewBox="25 25 50 50">
                        <circle
                            class="path"
                            cx="50"
                            cy="50"
                            r="20"
                            fill="none"
                            stroke-width="5"
                            stroke-miterlimit="10"
                        ></circle>
                    </svg>
                </div>
            </IvueSpin>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.spin-col {
  margin-bottom: 20px;
  height: 100px;
  position: relative;
  border: 1px solid #eee;
}

.spin-icon-load {
  animation: ani-demo-spin 1s linear infinite;
}

@keyframes ani-demo-spin {
  from {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.loader {
  width: 30px;
  height: 30px;
  position: relative;
  margin: 0 auto;
}

.circular {
  animation: rotate 2s linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.path {
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
  stroke-linecap: round;
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124;
  }
}

@keyframes color {
  0%,
  100% {
    stroke: #f41d74;
  }
  40% {
    stroke: #ffa700;
  }
  66% {
    stroke: #ffc009;
  }
  80% {
    stroke: #6DBF07;
  }
  90% {
    stroke: #009FC7;
  }
}
</style>
`

code.loading = `
<template>
    <div>
        <IvueButton @click="handleSpinShow">整页显示，3秒后关闭</IvueButton>
        <IvueButton @click="handleSpinCustom">自定义显示内容</IvueButton>
    </div>
</template>

<script>
export default {
    methods: {
        handleSpinShow () {
            this.$IvueSpin.show();
            setTimeout(() => {
                this.$IvueSpin.hide();
            }, 3000)
        },
        handleSpinCustom () {
            this.$IvueSpin.show({
                render: (h) => {
                    return h('div', [
                        h('IvueIcon', {
                            'class': 'spin-icon-load',
                        }, 'donut_large'),
                        h('div', 'Loading')
                    ])
                }
            });

            setTimeout(() => {
                this.$IvueSpin.hide();
            }, 3000);
        }
    }
}
</script>

<style lang="scss">
.spin-icon-load {
  animation: ani-demo-spin 1s linear infinite;
}

@keyframes ani-demo-spin {
  from {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
`;

export default code;
