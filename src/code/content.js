let code = {};


code.base = `
<template>
      <IvueContent>默认渲染为div</IvueContent>
</template>

<script>
      export default {
      }
</script>
`;

code.tag = `
<template>
      <IvueContent ivueTag="a">标签输出为a</IvueContent>
</template>

<script>
      export default {
      }
</script>
`;



export default code;
