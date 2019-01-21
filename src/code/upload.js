let code = {};


code.base = `
<template>
      <div>
            <IvueUpLoad :upload-url="'//jsonplaceholder.typicode.com/posts/'">
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
`;


code.multiple = `
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
`;


code.manualUpload = `
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
`;


code.drag = `
<template>
      <div>
            <IvueUpLoad
                  multiple
                  :upload-url="'//jsonplaceholder.typicode.com/posts/'"
                  type="drag"
            >
                  <div style="padding: 20px 0">
                        <p>Click or drag files here to upload</p>
                  </div>
            </IvueUpLoad>
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
            <IvueUpLoad
                  :upload-url="'//jsonplaceholder.typicode.com/posts/'"
                  multiple
                  :show-upload-list="false"
                  :default-file-list="defaultList"
                  :on-success="handleSuccess"
                  :on-format-error="handleFormatError"
                  :before-upload="handleBeforeUpload"
                  type="drag"
                  style="display: inline-block;width:58px;"
                  ref="upload"
            >
                  <div style="width: 58px;height:58px;line-height: 58px;">
                        <p>Click or drag files here to upload</p>
                  </div>
            </IvueUpLoad>
            <img
                  v-for="(item,index) in uploadList"
                  :src="item.url"
                  :key="index"
                  v-if="item.status === 'finished'"
            >
      </div>
</template>

<script>
      export default {
            data () {
                  return {
                        defaultList: [{
                              'name': '1',
                              'url': 'https://cn.vuejs.org/images/logo.png'
                        },
                        {
                              'name': '2',
                              'url': 'https://cn.vuejs.org/images/logo.png'
                        }
                        ],
                        uploadList: []
                  }
            },
            mounted () {
                  this.uploadList = this.$refs.upload.fileList;
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
                        }, 1500);
                  },
                  handleSuccess (res, file) {
                        file.url = 'https://cn.vuejs.org/images/logo.png';
                        file.name = '7eb99afb9d5f317c912f08b5212fd69a';
                  },
                  handleFormatError (file) {
                        console.error('File format of ' + file.name + ' is incorrect, please select jpg or png.');
                  },
                  handleBeforeUpload () {
                        const check = this.uploadList.length <= 5;
                        if (!check) {
                              console.error('Up to five pictures can be uploaded.');
                        }
                        return check;
                  }
            }
      }
</script>

<style lang="scss" scoped>
      .upload {
            border: 1px solid #dcdee2;
      }

      img {
            width: 50px;
            height: 50px;
      }
</style>
`;


export default code;
