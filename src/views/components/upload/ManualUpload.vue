<template>
      <div>
            <IvueUpLoad
                  :upload-url="'//jsonplaceholder.typicode.com/posts/'"
                  :before-upload="handleUpload"
            >
                  <IvueButton class="upload">
                        <IvueIcon>cloud_upload</IvueIcon>上传
                  </IvueButton>
            </IvueUpLoad>
            <div v-if="file !== null">
                  Upload file: {{ file.name }}
                  <IvueButton
                        class="upload"
                        @click="upload"
                        :loading="loadingStatus"
                  >{{ loadingStatus ? 'Uploading' : 'Click to upload' }}</IvueButton>
            </div>
      </div>
</template>

<script>
export default {
      data () {
            return {
                  file: null,
                  loadingStatus: false
            }
      },
      methods: {
            handleUpload (file) {
                  this.file = file;
                  return false;
            },
            upload () {
                  this.loadingStatus = true;
                  setTimeout(() => {
                        this.file = null;
                        this.loadingStatus = false;

                        this.$IvueMessage.success('Success')
                  }, 1500);
            }
      }
}
</script>
