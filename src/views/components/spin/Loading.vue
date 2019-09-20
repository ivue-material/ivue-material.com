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
