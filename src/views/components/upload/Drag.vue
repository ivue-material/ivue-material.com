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
