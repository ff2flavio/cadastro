

angular.module ('myApp.serverRepo')
.factory ('serverRepo', ['$http', function ($http) { 


 var corsairSeverListUrl = "https://s3-eu-west-1.amazonaws.com/spacecorsair/servers/serverListDebug.json";
 var self = this;
 var serverList;

 return { 
   getServers: function (callback) {   
     if (self.serverList == null){
      $http.get (corsairSeverListUrl).success (function (serverList) {                
        self.serverList = serverList;        
        callback (serverList.servers, serverList.message); 
      });
    } else {      
      callback (self.serverList.servers, self.serverList.message); 

    }

  } 
}; 
}]);

