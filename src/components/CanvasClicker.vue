<template>
  <div>
    <img id="plan-image" src="placeholder" v-show="false" />
    <canvas id="plan" :width="width" :height="height"></canvas>
    <button @click="makeSpace">New</button>
    <button @click="saveData">Save</button>
  </div>
</template>

<script>
import * as apiHandler from "@/lib/BackendHandler";
import * as canvasUtil from "@/lib/CanvasUtilities";
import store from "@/store/index.js";
const db = require("@/lib/Firebase");

export default {
  name: "CanvasClicker",
  props: {
    width: Number,
    height: Number,
    image: String
  },
  data() {
    return {
      currentSpace: { name: "placeholder", points: [] },
      spaces: [],
      canvas: null
    };
  },
  mounted() {
    this.canvas = document.getElementById("plan");
    this.canvas.addEventListener("mousedown", event => {
      this.drawPaths(event);
    });
    this.queryImage();
  },
  methods: {
    queryImage() {
      const storageRef = db.ref(store.getters.project);
      storageRef.getDownloadURL().then(url => {
        const img = document.getElementById("plan-image");
        img.src = url;
        this.renderPlan();
      });
    },
    drawPaths(event) {
      const rect = this.canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      this.currentSpace.points.push({ x: x, y: y });
      canvasUtil.drawPaths(
        this.canvas.getContext("2d"),
        this.currentSpace.points
      );
    },
    renderPlan() {
      const context = this.canvas.getContext("2d");
      const img = document.getElementById("plan-image");
      if (img.complete) {
        context.drawImage(img, 0, 0, this.width, this.height);
        this.currentSpace.name = window.prompt("Space Name", "Default");
      } else {
        img.addEventListener("load", this.renderPlan);
        img.addEventListener("error", function() {
          alert("error");
        });
      }
    },
    makeSpace() {
      this.spaces.push(this.currentSpace);
      this.currentSpace = { name: "placeholder", points: [] };
      this.currentSpace.name = window.prompt("Space Name", "Default");
      canvasUtil.drawLabels(this.canvas.getContext("2d"), this.spaces);
    },
    saveData() {
      this.spaces.map(async space => {
        const spacePoints = space.points.map(point => {
          return `{x: ${point.x}, y: ${point.y}}`;
        });
        const spaceString = apiHandler.getMakeSpaceString(
          space.name,
          "Amazon",
          1,
          1,
          1,
          1,
          spacePoints
        );
        apiHandler.callAPI(spaceString).then(res => {
          console.log(res);
        });
      });
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
