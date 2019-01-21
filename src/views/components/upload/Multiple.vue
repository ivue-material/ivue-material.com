<template>
      <div>
            <IvueUpLoad :upload-url="'//jsonplaceholder.typicode.com/posts/'" multiple>
                  <IvueButton class="upload">
                        <IvueIcon>cloud_upload</IvueIcon>上传
                  </IvueButton>
            </IvueUpLoad>
      </div>
</template>

<script>
export default {
}
</script>
