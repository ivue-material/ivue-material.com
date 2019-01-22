<template>
      <div>
            <ivue-affix :offset-bottom="20">
                  <div class="demo-affix">固定在距离底部 20px 的位置</div>
            </ivue-affix>
      </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.demo-affix {
      width: 100px;
      height: 30px;
      text-align: center;
      line-height: 30px;
      font-size: 12px;
      border-radius: 5px;
      background: #4177f6;
      color: #fff;
}
</style>