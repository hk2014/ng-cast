angular.module('video-player')
  .component('search', {

    bindings: {
      //videos: '<',
      // onClick: '<',
      search: '<',
    },

    controller: function(youTube) {
      //this.video = exampleVideoData[0]; 
      
      this.txt = '';
      this.onClick = function() {
        console.log(this.txt);
        youTube.search(this.txt, function(s){
          console.log(s);
          this.search(s);
        }.bind(this));
      };
    },
    templateUrl: 'src/templates/search.html'  
  });
