angular.module('starter.controllers', [])

.controller('InicioCtrl', function($scope, $stateParams, $state) {

  $scope.Jugar = function(){
    $state.go('tab.ingreso');
  }

  $scope.Imagen = function(){
    $state.go('tab.imagen');
  }

  $scope.Perfil = function(){
    $state.go('tab.perfil');
  }

})

.controller('IngresoCtrl', function($scope, $state) {
  $scope.usuario = {};
  $scope.usuario.nombre = "";
  $scope.Ingresar = function(){
    var param = JSON.stringify($scope.usuario);
    $state.go('tab.juego', {usuario:param});
  };
})

.controller('EleccionCtrl', function($scope, $state, $stateParams, $cordovaFile) {
  $scope.usuario = JSON.parse($stateParams.usuario);
  $scope.eleccion = [];
  try
  {
    $cordovaFile.checkDir(cordova.file.dataDirectory, "archivos/"+usuario)
      .then(function (success) {
        $cordovaFile.checkFile(cordova.file.dataDirectory, "archivos/"+usuario+"/eleccion.txt")
          .then(function (success) {
            $cordovaFile.readAsText(cordova.file.dataDirectory, "archivos/"+usuario+"/eleccion.txt")
              .then(function (success) {
                  $scope.eleccion = success;
              }, function (error) {
                  console.info("ERROR READ FILE",error);
              });
          }, function (error) {
            console.info("ERROR CHECK FILE",error);
          });
      }, function (error) {
        console.info("ERROR CHECK DIR",error);
      });
  }
  catch(error)
  {
    alert(error);
  }
})

.controller('JuegoCtrl', function($scope, $state, $stateParams, $cordovaNativeAudio, $cordovaFile) {
  $scope.usuario = JSON.parse($stateParams.usuario);
  $scope.elegido = [];
  try
  {
    $cordovaNativeAudio
    .preloadSimple('vaca', 'audios/vaca.mp3')
    .then(function (msg) {
      console.log(msg);
    }, function (error) {
      alert(error);
    });

    $cordovaNativeAudio
    .preloadSimple('oveja', 'audios/oveja.mp3')
    .then(function (msg) {
      console.log(msg);
    }, function (error) {
      alert(error);
    });

    $cordovaNativeAudio
    .preloadSimple('caballo', 'audios/caballo.mp3')
    .then(function (msg) {
      console.log(msg);
    }, function (error) {
      alert(error);
    });

    $cordovaNativeAudio
    .preloadSimple('cerdo', 'audios/cerdo.mp3')
    .then(function (msg) {
      console.log(msg);
    }, function (error) {
      alert(error);
    });

    $cordovaNativeAudio
    .preloadSimple('gallo', 'audios/gallo.mp3')
    .then(function (msg) {
      console.log(msg);
    }, function (error) {
      alert(error);
    });

    $cordovaNativeAudio
    .preloadSimple('pato', 'audios/pato.mp3')
    .then(function (msg) {
      console.log(msg);
    }, function (error) {
      alert(error);
    });

  }
  catch(error)
  {
    console.log("la pc no suena");
  }

  $scope.Vaca = function(){
    try 
    {
      $cordovaNativeAudio.play('vaca');
      $scope.elegido.push("vaca");
    }
    catch(error)
    {
      console.log("la pc no suena");
      $scope.elegido.push("vaca");
    }
  }

  $scope.Pato = function(){
    try 
    {
      $cordovaNativeAudio.play('pato');
      $scope.elegido.push("pato");
    }
    catch(error)
    {
      console.log("la pc no suena");
    }
  }

  $scope.Oveja = function(){
    try 
    {
      $cordovaNativeAudio.play('oveja');
      $scope.elegido.push("oveja");
    }
    catch(error)
    {
      console.log("la pc no suena");
    }
  }

  $scope.Caballo = function(){
    try 
    {
      $cordovaNativeAudio.play('caballo');
      $scope.elegido.push("caballo");
    }
    catch(error)
    {
      console.log("la pc no suena");
    }
  }

  $scope.Cerdo = function(){
    try 
    {
      $cordovaNativeAudio.play('cerdo');
      $scope.elegido.push("cerdo");
    }
    catch(error)
    {
      console.log("la pc no suena");
    }
  }

  $scope.Gallo = function(){
    try 
    {
      $cordovaNativeAudio.play('gallo');
      $scope.elegido.push("gallo");
    }
    catch(error)
    {
      console.log("la pc no suena");
    }
  }

  $scope.LeerEleccion = function(){
    var param = JSON.stringify($scope.usuario);
    $state.go('tab.eleccion', {usuario:param});
  };

  $scope.GuardarEleccion= function(){
    GuardarArchivo(JSON.stringify($scope.elegido))
  }

  function GuardarArchivo(eleccion){
    
      $cordovaFile.checkDir(cordova.file.dataDirectory, "archivos/"+$scope.usuario.nombre)
        .then(function (success) {
          $cordovaFile.writeFile(cordova.file.dataDirectory, "archivos/"+$scope.usuario.nombre+"/eleccion.txt", eleccion, true)
            .then(function (success) {
            }, function (error) {
            });

        }, function (error) {
          $cordovaFile.createDir(cordova.file.dataDirectory, "archivos/"+$scope.usuario.nombre, false)
          .then(function (success) {
            $cordovaFile.writeFile(cordova.file.dataDirectory, "archivos/"+$scope.usuario.nombre+"/eleccion.txt", eleccion, true)
            .then(function (success) {
            }, function (error) {
            });

          }, function (error) {
          });

        });
   /* }
    catch(error)
    {
      alert(error);
    }*/
  }
})

.controller('PerfilCtrl', function($scope) {

})

.controller('ImagenCtrl', function($scope) {

});
