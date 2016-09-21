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

.controller('EleccionCtrl', function($scope, $state, $stateParams, $ionicPlatform, $cordovaFile) {
  $ionicPlatform.ready(function() {
    $scope.usuario = JSON.parse($stateParams.usuario);
    $scope.eleccion = [];
    try
    {
      $cordovaFile.readAsText(cordova.file.externalApplicationStorageDirectory, "archivo.txt")
            .then(function (success) {
                $scope.eleccion = JSON.parse(success);
            }, function (error) {
                console.info("ERROR READ FILE",error);
            });
    }
    catch(error)
    {
      alert(error);
    }
  });
})

.controller('JuegoCtrl', function($scope, $state, $stateParams, $ionicPlatform, $ionicPopup, $cordovaNativeAudio, $cordovaFile) {
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

  $scope.Reproducir = function(opcion){
    try 
    {
      switch (opcion)
      {
        case "vaca":
            $cordovaNativeAudio.play('vaca');
            $scope.elegido.push("vaca");
          break;
        case "pato":
            $cordovaNativeAudio.play('pato');
            $scope.elegido.push("pato");
          break;
        case "oveja":
            $cordovaNativeAudio.play('oveja');
            $scope.elegido.push("oveja");
          break;
        case "caballo":
            $cordovaNativeAudio.play('caballo');
            $scope.elegido.push("caballo");
          break;
        case "cerdo":
            $cordovaNativeAudio.play('cerdo');
            $scope.elegido.push("cerdo");
          break;
        case "gallo":
            $cordovaNativeAudio.play('gallo');
            $scope.elegido.push("gallo");
          break;
      }
    }
    catch(error)
    {
      alert(error);
    }
  }

  $scope.LeerEleccion = function(){
    var param = JSON.stringify($scope.usuario);
    $state.go('tab.eleccion', {usuario:param});
  };

  $scope.GuardarEleccion= function(){
    $ionicPlatform.ready(function() {
      try
      {
        $scope.archivar = {};
        $scope.archivar.usuario = $scope.usuario.nombre;
        $scope.archivar.eleccion = $scope.elegido;
        var eleccion = JSON.stringify($scope.archivar);
        $cordovaFile.createFile(cordova.file.externalApplicationStorageDirectory, "archivo.txt", true)
          .then(function (success) {
            // success
          }, function (error) {
            // error
          });
        $cordovaFile.writeFile(cordova.file.externalApplicationStorageDirectory, "archivo.txt", eleccion, true)
          .then(function (success) {
              $ionicPopup.alert({
              title: 'Exito',
              template: "Se ha guardado el archivo" .concat(eleccion)
            });
          }, function (error) {
                $ionicPopup.alert({
              title: 'Error',
              template: "No se ha guardado el archivo, " .concat(error)
            });
          });
      }
      catch(error)
      {
        alert(error);
      }
    });
  }
})

.controller('PerfilCtrl', function($scope) {

})

.controller('ImagenCtrl', function($scope, $state, $stateParams, $ionicPlatform, $cordovaDeviceMotion) {
  $ionicPlatform.ready(function() {
    $scope.opciones = { frequency: 100 };
    $scope.ubicacion = {
        x : null,
        y : null,
        z : null,
        timestamp : null
    }
    
    $scope.watch = $cordovaDeviceMotion.watchAcceleration($scope.opciones);

    $scope.watch.then(
      null,
      function(error) {
      // An error occurred
      },
      function(result) {
        if(result.x > 10){
          $scope.ubicacion.x = 1;
          $scope.imagen = "img/izquierda.png"; 
        }else if(result.x < -10){
          $scope.ubicacion.x = -1;
        }else{
          $scope.ubicacion.x = 0;
        }

        if(result.y > 10){
          $scope.ubicacion.y = 1;
          $scope.imagen = "img/abajo.png"; 
        }else if(result.y < -10){
          $scope.ubicacion.y = -1;
          $scope.imagen = "img/arriba.png"; 
        }else{
          $scope.ubicacion.y = 0;
        }

        var timeStamp = result.timestamp;
      }
    )

  });
});
