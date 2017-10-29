angular.module('video-player')
  .component('app', {
    controller: function(youTube) {
      this.videos = exampleVideoData;
      this.video = exampleVideoData[0];
      this.txt = 'kimchi';
      this.onClick = (video) => {
        //console.log('clicked: ', video);
        this.video = video;
      };
      this.$onInit = function(){
        youTube.search(this.txt, function(obj) {
          this.search(obj);
        }.bind(this));
      };
      this.search = function(key){
        console.log(this);
        this.videos = key.data.items;
        this.video = this.videos[0];
        console.log('key:' ,this.video);
      }.bind(this);
    },
    templateUrl: 'src/templates/app.html'
  });



