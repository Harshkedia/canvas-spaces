<template>
  <div id="app">
    <canvas-clicker :width="canvasWidth" :height="canvasHeight" :image="canvasImage"></canvas-clicker>
    <upload-image></upload-image>
  </div>
</template>

<script>
import CanvasClicker from './components/CanvasClicker.vue'
import UploadImage from './components/UploadImage'

export default {
  name: 'App',
  components: {
    CanvasClicker,
    UploadImage
  },
  data: () => ({
    canvasWidth: 1200,
    canvasHeight: 600,
    canvasImage: 'fp.png'
  })
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
