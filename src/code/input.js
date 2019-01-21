let code = {};


code.base = `
<template>
     <IvueInput v-model="input" placeholder="请输入数据"></IvueInput>
</template>

<script>
      export default {
            data () {
                  return {
                  input: ''
                  }
            }
      }
</script>
`;

code.clearable = `
<template>
     <IvueInput v-model="input" placeholder="请输入数据" clearable></IvueInput>
</template>

<script>
      export default {
            data () {
                  return {
                  input: ''
                  }
            }
      }
</script>
`;

code.icon = `
<template>
      <div id="app">
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
`;


code.textarea = `
<template>
      <div>
            <IvueInput placeholder="请输入数据" type="textarea"></IvueInput>
            <IvueInput placeholder="请输入数据" type="textarea" :rows="4"></IvueInput>
      </div>
</template>

<script>
      export default {
      }
</script>
`;


code.disabled = `
<template>
      <div>
            <p>普通输入框</p>
            <IvueInput placeholder="请输入数据" disabled></IvueInput>
            <p>文本输入框</p>
            <IvueInput placeholder="请输入数据" type="textarea" disabled></IvueInput>
      </div>
</template>

<script>
      export default {
      }
</script>
`;

export default code;
