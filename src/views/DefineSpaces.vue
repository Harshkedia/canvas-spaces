<template>
  <div>
    <canvas-clicker
      :width="canvasWidth"
      :height="canvasHeight"
      image="fp.png"
    ></canvas-clicker>
  </div>
</template>

<script>
import CanvasClicker from "@/components/CanvasClicker.vue";

export default {
  name: "DefineSpaces",
  components: {
    CanvasClicker
  },
  data() {
    return {
      canvasWidth: 800,
      canvasHeight: 400
    };
  }
};
</script>

<style></style>
