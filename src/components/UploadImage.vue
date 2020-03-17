<template>
  <div>
    <input type="file" @change="onFileSelected" />
    <button @click="onUpload">Upload</button>
  </div>
</template>

<script>
import axios from "axios";
import store from "@/store/index.js";

export default {
  name: "UploadImage",
  data() {
    return {
      selectedFile: null,
      project: ""
    };
  },
  methods: {
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
      this.project = window.prompt("Project Name");
    },
    onUpload() {
      const fd = new FormData();
      fd.append("image", this.selectedFile, this.selectedFile.name);
      store.commit("setImage", this.selectedFile.name);
      store.commit("setProject", this.project);
      console.log(store.getters.image);
      axios
        .post(
          "https://us-central1-rhythm-day.cloudfunctions.net/uploadFile",
          fd,
          {
            headers: { project: this.project }
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
