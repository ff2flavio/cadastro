angular.module('myApp.serverRepo')
  .factory('serverRepo', ['$http',
    function($http) {


      var corsairS3ListUrl = "https://s3-eu-west-1.amazonaws.com/spacecorsair/servers/activeServerList.json";

      var corsairLocaleListUrl = "./components/repositories/serverListLocale.json";
      var self = this;
      var serverList;



      function Server(data) {
        //constructor
        _.extend(this, data);
      }

      Server.prototype = {

        gameInfoUrl: function() {
          return "http://" + this.adress + ":" + this.http_port + "/gameInfo"
        },
        gameInfo: function(callback, error) {
          if(FakeGameInfo != null){
            callback(FakeGameInfo);
            return;
          }
          $http.get(this.gameInfoUrl())
            .success(function(gameInfo) {
              callback(gameInfo);

            })
            .error(function(data, status, headers, config) {
              if (error) {
                error(data, status, headers, config);
              }
            });
        }

      }


      return {

        getServers: function(callback) {
          if (self.serverList == null) {


            $http.get(corsairS3ListUrl).success(function(serverList) {

              self.serverList = serverList.servers.map(function(serverRawData) {
                return new Server(serverRawData);
              });

              callback(null, self.serverList);
            }).error(function(err) {              
              callback({"error" : err});

            });
          } else {
            callback(null, self.serverList);

          }

        }
      };
    }
  ]);