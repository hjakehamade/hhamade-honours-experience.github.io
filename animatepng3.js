AFRAME.registerComponent("animate-png3", {
  init: function () {
    // load the .pngs
    let loader = new THREE.TextureLoader();
    this.pngArray = [];
    this.pngArray.push(loader.load("layout1.png"));
    this.pngArray.push(loader.load("layout2.png"));
    this.pngArray.push(loader.load("layout3.png"));
    this.pngArray.push(loader.load("layout4.png"));
    this.pngArray.push(loader.load("layout5.png"));
    this.pngArray.push(loader.load("layout6.png"));
    this.pngArray.push(loader.load("layout7.png"));

    this.el.addEventListener("loaded", (e) => {
      let mesh = this.el.getObject3D("mesh");
      this.material = mesh.material;

      // set the initial texture
      this.material.map = this.pngArray[0];

      var i = 1;
      this.id = setInterval((e) => {
        if (i >= this.pngArray.length) i = 0;
        this.material.map = this.pngArray[i++];
        this.material.needsUpdate = true;
      }, 5000);
    });
  },
  remove: function () {
    clearInterval(this.id);
    // free the memory
    for (let i = 0; i < this.pngArray.length; i++) {
      this.pngArray[i].dispose();
    }
  },
});
