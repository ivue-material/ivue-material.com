let code = {};


code.linear = `
<template>
      <div>
            <IvueProgressLinear :percent="40" status="active"></IvueProgressLinear>
            <IvueProgressLinear :percent="65" status="wrong"></IvueProgressLinear>
            <IvueProgressLinear :percent="100"></IvueProgressLinear>
            <IvueProgressLinear :percent="80" hideText></IvueProgressLinear>
            <IvueProgressLinear :percent="100">
                  <span>成功</span>
            </IvueProgressLinear>
      </div>
</template>

<script>
      export default {
      }
</script>
`;

code.circular = `
<template>
      <div>
            <IvueProgressCircular :percent="20"></IvueProgressCircular>
            <IvueProgressCircular :percent="60" status="wrong"></IvueProgressCircular>
            <IvueProgressCircular :percent="80"></IvueProgressCircular>
            <IvueProgressCircular :percent="100"></IvueProgressCircular>
      </div>
</template>

<script>
      export default {
      }
</script>
`;


code.indeterminate = `
<template>
      <div>
            <IvueProgressCircular :percent="20" indeterminate></IvueProgressCircular>
      </div>
</template>

<script>
      export default {
      }
</script>
`;


code.customize = `
<template>
      <div>
            <IvueProgressLinear :percent="50" height="5">
                  <span>成功</span>
            </IvueProgressLinear>

            <IvueProgressLinear :percent="50" height="5">
                  <span>成功</span>
            </IvueProgressLinear>
      </div>
</template>

<script>
      export default {
      }
</script>
`;

export default code;
