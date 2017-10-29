angular.module('video-player')
  .service('youTube', function($http) {
    
    this.search = function(query, passedInFunction) {
      $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
          q: query,
          maxResults: 5,
          key: 'AIzaSyBKs2vDKdxtMN77PTxbaD6Y7FdQpwf_HEg',
          part: 'snippet',
          type: 'video',
          videoEmbeddable: true 
        }
      }).then(function successCallback(response) {

        console.log('in service');

        passedInFunction(response);


      }, function errorCallback(response) {
        console.error();
      });   
    }; // end searchYouTube
    
  });
