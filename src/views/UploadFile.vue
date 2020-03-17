<template>
  <div>
    <upload-image></upload-image>
  </div>
</template>

<script>
// @ is an alias to /src
import UploadImage from "@/components/UploadImage";

export default {
  name: "UploadFile",
  components: {
    UploadImage
  }
};
</script>
