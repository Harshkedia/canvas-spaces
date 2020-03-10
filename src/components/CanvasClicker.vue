<template>
  <div>
    <img id="plan-image" :src="require('@/assets/' + image)" v-show="false">
    <canvas id="plan" :width="width" :height="height"></canvas>
    <button @click="makeSpace"> New </button>
  </div>
</template>

<script>

export default {
  name: 'CanvasClicker',
  props: {
    width: Number,
    height: Number,
    image: String
  },
  data() {
    return {
      currentSpace: {name: "placeholder", points: []},
      spaces: [],
      canvas: document.getElementById('plan'),
    };
  },
  mounted(){
    this.canvas = document.getElementById('plan');
    this.renderPlan();
    this.canvas.addEventListener("mousedown", event => {
        this.getMousePosition(event);
      });
  },
  methods: {
    getMousePosition(event) { 
      const rect = this.canvas.getBoundingClientRect(); 
      const x = event.clientX - rect.left; 
      const y = event.clientY - rect.top; 
      this.currentSpace.points.push([x,y]);
      this.drawPaths();
    },
    renderPlan(){
      const context = this.canvas.getContext('2d');
      const img = document.getElementById('plan-image');
      if(img.complete){
        context.drawImage(img, 0, 0, this.width, this.height);
        this.currentSpace.name = window.prompt("Space Name", "Default");
      }
      else {
        img.addEventListener('load', this.renderPlan);
        img.addEventListener('error', function() {
          alert('error')
        })
      }
    },
    makeSpace(){
      this.spaces.push(this.currentSpace);
      this.currentSpace = {name: "placeholder", points: []};
      this.currentSpace.name = window.prompt("Space Name","Default");
      this.drawLabels();
    },
    drawPaths(){
      const context = this.canvas.getContext('2d');
      const points = this.currentSpace.points
      points.map(point => {
        context.beginPath();
        context.fillStyle="red";
        context.ellipse(point[0], point[1], 5, 5, Math.PI / 4, 0, 2 * Math.PI);
        context.fill();
        context.closePath();
      });

      context.beginPath();
      for(let i=0; i<points.length; i++){
        context.lineTo(points[i][0], points[i][1]);
      }
      context.stroke();
      context.closePath();
    },
    drawLabels(){
      const context = this.canvas.getContext('2d');
      context.fillStyle = "red";
      this.spaces.map(space => {
        const center = this.getCenter(space.points);
        context.fillText(space.name, center[0], center[1]);
      })
    },
    getCenter(points){
      let totalX = 0;
      let totalY = 0;
      for(const point of points){
        totalX += point[0];
        totalY += point[1];
      }
      return [totalX/points.length, totalY/points.length]
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
