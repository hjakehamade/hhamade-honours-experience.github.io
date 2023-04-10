 AFRAME.registerComponent("animate-png2", {
      init: function () {
        // load the .pngs
        let loader = new THREE.TextureLoader();
        this.pngArray = [];
        this.pngArray.push(
          loader.load(
            "stars1-modified.jpg"
              
          )
        );
        this.pngArray.push(
          loader.load(
            "stars2-modified.jpg"
          )
        );
        this.pngArray.push(
          loader.load(
            "stars3-modified.jpg"
          )
        );
        this.pngArray.push(
          loader.load(
            "stars4-modified.jpg"
          )
        );
        this.pngArray.push(
          loader.load(
            "stars5-modified.jpg"
          )
        );
                this.pngArray.push(
          loader.load(
            "stars6-modified.jpg"
          )
        );
          

        this.el.addEventListener("loaded", (e) => {
          let mesh = this.el.getObject3D("mesh");
          this.material = mesh.material;

          var i = 0;
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
