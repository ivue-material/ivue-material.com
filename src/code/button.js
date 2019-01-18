let code = {};


code.base = `
<template>
      <div>
            <IvueButton color="primary">primary</IvueButton>
            <IvueButton color="warning">warning</IvueButton>
            <IvueButton color="red">error</IvueButton>
            <IvueButton color="green">success</IvueButton>
      </div>
</template>

<script>
      export default {
      }
</script>
`;

code.flat = `
<template>
      <div>
            <IvueButton flat color="primary">primary</IvueButton>
            <IvueButton flat color="warning">warning</IvueButton>
            <IvueButton flat color="red">error</IvueButton>
            <IvueButton flat color="green">success</IvueButton>
      </div>
</template>

<script>
export default {
}
</script>
`

code.depressed = `
<template>
      <div>
            <IvueButton depressed>默认效果</IvueButton>
            <IvueButton depressed color="primary">primary</IvueButton>
            <IvueButton depressed color="warning">warning</IvueButton>
            <IvueButton depressed color="red">error</IvueButton>
            <IvueButton depressed color="green">success</IvueButton>
      </div>
</template>

<script>
export default {
}
</script>
`

export default code;
