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
