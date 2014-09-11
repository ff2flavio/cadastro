

angular.module ('myApp.serverRepo')
.factory ('serverRepo', ['$http', function ($http) { 


 var corsairSeverListUrl = "https://s3-eu-west-1.amazonaws.com/spacecorsair/servers/serverListDebug.json";
 var self = this;
 var serverList;




 function enhanceServerObject(servers){
  
    _.each(servers, function (server){
      server.gameInfoUrl = "http://"+server.adress+":"+server.http_port+"/gameInfo";
      server.gameInfo = function (callback){       
         

      }
    });

    return servers;

 }

 return { 
   getServers: function (callback) {   
     if (self.serverList == null){
      $http.get (corsairSeverListUrl).success (function (serverList) {                
        self.serverList = enhanceServerObject(serverList.servers);        
        debugger;


        callback (serverList.servers, serverList.message); 
      });
    } else {      
      callback (self.serverList.servers, self.serverList.message); 

    }

  } 
}; 
}]);

