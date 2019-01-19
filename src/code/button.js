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
`;

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
`;

code.href = `
<template>
      <div>
            <IvueButton href="https://github.com/qq282126990/ivue.com">默认效果</IvueButton>
            <IvueButton href="https://github.com/qq282126990/ivue.com" color="primary">primary</IvueButton>
            <IvueButton href="https://github.com/qq282126990/ivue.com" color="warning">warning</IvueButton>
            <IvueButton href="https://github.com/qq282126990/ivue.com" color="red">error</IvueButton>
            <IvueButton href="https://github.com/qq282126990/ivue.com" color="green">success</IvueButton>
      </div>
</template>

<script>
export default {
}
</script>
`;

code.icon = `
<template>
      <div>
            <IvueButton icon>
                  <ivue-icon>face</ivue-icon>
            </IvueButton>
            <IvueButton icon color="primary">
                  <ivue-icon>face</ivue-icon>
            </IvueButton>
            <IvueButton icon color="warning">
                  <ivue-icon>face</ivue-icon>
            </IvueButton>
            <IvueButton icon color="red">
                  <ivue-icon>face</ivue-icon>
            </IvueButton>
            <IvueButton icon color="green">
                  <ivue-icon>face</ivue-icon>
            </IvueButton>
      </div>
</template>

<script>
export default {
}
</script>
`;

export default code;
