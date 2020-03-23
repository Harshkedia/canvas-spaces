<template>
  <div>
    <input type="file" @change="onFileSelected" />
    <button @click="onUpload">Upload</button>
  </div>
</template>

<script>
import store from "@/store/index.js";
import db from "@/lib/Firebase";

export default {
  name: "UploadImage",
  data() {
    return {
      file: null,
      project: ""
    };
  },
  methods: {
    onFileSelected(event) {
      this.file = event.target.files[0];
      this.project = window.prompt("Project Name");
      store.commit("setProject", this.project);
    },
    onUpload() {
      const storageRef = db.ref();
      const upload = storageRef.child(this.project).put(this.file);
      upload.on(
        "state_changed",
        function(snapshot) {
          var progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        function(error) {
          console.log(error);
        }
      );
    }
  }
};
</script>

<style lang="scss" scoped></style>
