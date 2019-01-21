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
