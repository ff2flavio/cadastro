

angular.module ('myApp.serverRepo')
.factory ('serverRepo', ['$http', function ($http) { 


 var corsairS3ListUrl = "https://s3-eu-west-1.amazonaws.com/spacecorsair/servers/serverListDebug.json";

 var corsairLocaleListUrl = "./components/repositories/serverListLocale.json";
 var self = this;
 var serverList;


 var serverEnhancedProto = {



    gameInfoUrl : function(){
      return "http://"+this.adress+":"+this.http_port+"/gameInfo"
    },
    gameInfo : function(callback, error){
      $http.get(this.gameInfoUrl())
          .success(function (gameInfo){
            callback(gameInfo);

          })
          .error(function(data, status, headers, config) {            
            if (error){
              error(data, status, headers, config);
            }
      });
    }
 };


 function enhanceServerObject(servers){
  
    _.each(servers.servers, function (server){
      _.extend(server, serverEnhancedProto);      
    });

    return servers;

 }

 return { 
   getServers: function (callback) {   
     if (self.serverList == null){
      console.log("using S3 http");
      $http.get (corsairLocaleListUrl).success (function (serverList) {                
        self.serverList = enhanceServerObject(serverList);                
        
        callback (self.serverList.servers, self.serverList.message); 
      });
    } else {            
      callback (self.serverList.servers, self.serverList.message); 

    }

  } 
}; 
}]);

