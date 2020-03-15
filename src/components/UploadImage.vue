<template>
  <div>
    <input type="file" @change="onFileSelected" />
    <button @click="onUpload">Upload</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "UploadImage",
  data() {
    return {
      selectedFile: null
    };
  },
  methods: {
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
    },
    onUpload() {
      const fd = new FormData();
      fd.append("image", this.selectedFile, this.selectedFile.name);
      axios
        .post(
          "https://us-central1-rhythm-day.cloudfunctions.net/uploadFile",
          fd,
          {
            headers: { project: "Amazon" }
          }
        )
        .then(res => {
          console.log(res);
        });
    }
  }
};
</script>

<style lang="scss" scoped></style>
