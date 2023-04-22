AFRAME.registerComponent("animate-png4", {
  init: function () {
    // load the .pngs
    let loader = new THREE.TextureLoader();
    this.pngArray = [];
    this.pngArray.push(loader.load("text_01.png"));
    this.pngArray.push(loader.load("text_02.png"));
    this.pngArray.push(loader.load("text_03.png"));
    this.pngArray.push(loader.load("text_04.png"));
    this.pngArray.push(loader.load("text_05.png"));
    this.pngArray.push(loader.load("text_06.png"));
    this.pngArray.push(loader.load("text_07.png"));
    this.pngArray.push(loader.load("text_08.png"));
    this.pngArray.push(loader.load("text_09.png"));
    this.pngArray.push(loader.load("text_10.png"));
    this.pngArray.push(loader.load("text_11.png"));
    this.pngArray.push(loader.load("text_12.png"));
    this.pngArray.push(loader.load("text_13.png"));
    this.pngArray.push(loader.load("text_14.png"));
    this.pngArray.push(loader.load("text_15.png"));
    this.pngArray.push(loader.load("text_16.png"));
    this.pngArray.push(loader.load("text_17.png"));
    this.pngArray.push(loader.load("text_18.png"));
    this.pngArray.push(loader.load("text_19.png"));
    this.pngArray.push(loader.load("text_20.png"));

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
      }, 100);
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
