<template>
      <div>
            <p>输入框图标 属性方式</p>
            <IvueInput placeholder="someing messasge" prefix="face"></IvueInput>
            <IvueInput placeholder="someing messasge" suffix="search"></IvueInput>
            <p>输入框图标 slot方式</p>
            <IvueInput placeholder="someing messasge" number>
                  <ivue-icon slot="prefix">face</ivue-icon>
            </IvueInput>
            <IvueInput placeholder="someing messasge">
                  <ivue-icon slot="suffix">search</ivue-icon>
            </IvueInput>
      </div>
</template>

<script>
export default {
}
</script>
