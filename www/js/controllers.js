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
    try
    {
      $cordovaFile.readAsText(cordova.file.externalApplicationStorageDirectory, "archivoPiano.txt")
            .then(function (success) {
                //$scope.eleccion = JSON.parse(success);
                $scope.eleccion = success;
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
  $scope.melodia = "";
  try
  {
    $cordovaNativeAudio
    .preloadSimple('vaca', 'audios/vaca.mp3')
    .then(function (msg) {
      console.log(msg);
    }, function (error) {
      console.log(error);
    });

    $cordovaNativeAudio
    .preloadSimple('oveja', 'audios/oveja.mp3')
    .then(function (msg) {
      console.log(msg);
    }, function (error) {
      console.log(error);
    });

    $cordovaNativeAudio
    .preloadSimple('caballo', 'audios/caballo.mp3')
    .then(function (msg) {
      console.log(msg);
    }, function (error) {
      console.log(error);
    });

    $cordovaNativeAudio
    .preloadSimple('cerdo', 'audios/cerdo.mp3')
    .then(function (msg) {
      console.log(msg);
    }, function (error) {
      console.log(error);
    });

    $cordovaNativeAudio
    .preloadSimple('gallo', 'audios/gallo.mp3')
    .then(function (msg) {
      console.log(msg);
    }, function (error) {
      console.log(error);
    });

    $cordovaNativeAudio
    .preloadSimple('pato', 'audios/pato.mp3')
    .then(function (msg) {
      console.log(msg);
    }, function (error) {
      console.log(error);
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
            $scope.melodia = $scope.melodia + "vaca-";
          break;
        case "pato":
            $cordovaNativeAudio.play('pato');
            $scope.melodia = $scope.melodia + "pato-";
          break;
        case "oveja":
            $cordovaNativeAudio.play('oveja');
            $scope.melodia = $scope.melodia + "oveja-";
          break;
        case "caballo":
            $cordovaNativeAudio.play('caballo');
            $scope.melodia = $scope.melodia + "caballo-";
          break;
        case "cerdo":
            $cordovaNativeAudio.play('cerdo');
            $scope.melodia = $scope.melodia + "cerdo-";
          break;
        case "gallo":
            $cordovaNativeAudio.play('gallo');
            $scope.melodia = $scope.melodia + "gallo-";
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
        $scope.archivar.melodia = $scope.melodia;
        var eleccion = JSON.stringify($scope.archivar);

        $cordovaFile.checkFile(cordova.file.externalApplicationStorageDirectory, "archivoPiano.txt")
          .then(function (success) {
            $cordovaFile.writeExistingFile(cordova.file.externalApplicationStorageDirectory, "archivoPiano.txt", "/" + eleccion)
              .then(function (success) {
                $ionicPopup.alert({
                  title: 'Exito',
                  template: "Se ha guardado el archivo" .concat(eleccion)
                });
              }, function (error) {
                    $ionicPopup.alert({
                  title: 'Error',
                  template: "No se ha guardado el archivo, " .concat(JSON.stringify(error))
                });
              });
          }, function (error) {
            $cordovaFile.createFile(cordova.file.externalApplicationStorageDirectory, "archivoPiano.txt", false)
              .then(function (success) {
                $cordovaFile.writeFile(cordova.file.externalApplicationStorageDirectory, "archivoPiano.txt", "/" + eleccion, true)
              .then(function (success) {
                  $ionicPopup.alert({
                  title: 'Exito',
                  template: "Se ha guardado las melodias elegidas" 
                });
              }, function (error) {
                    $ionicPopup.alert({
                  title: 'Error',
                  template: "No se ha guardado el archivo, " .concat(JSON.stringify(error) + " - " + eleccion)
                });
              });
              }, function (error) {
                // error
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
    switch (Math.floor((Math.random() * 6) + 1))
    {
      case 1:
          $scope.imagen = "img/vaca.png";
        break;
      case 2:
          $scope.imagen = "img/pato.png";
        break;
      case 3:
          $scope.imagen = "img/oveja.png";
        break;
      case 4:
          $scope.imagen = "img/caballo.png";
        break;
      case 5:
          $scope.imagen = "img/cerdo.png";
        break;
      case 6:
          $scope.imagen = "img/gallo.png";
        break;
    }
    $scope.opciones = { frequency: 100 };
    $scope.ubicacion = {
        x : null,
        y : null,
        z : null,
        timestamp : null
    }

    $scope.imagenOpciones={
      x:0,
      y:0,
      width:20,
      height:20
    }

    $scope.movimiento = 1.5;
    
    $scope.watch = $cordovaDeviceMotion.watchAcceleration($scope.opciones);

    $scope.watch.then(
      null,
      function(error) {
      // An error occurred
      },
      function(result) {
        if(result.x > 1){
          if(result.x > 5){
            $scope.ubicacion.x = 3;     
          }
          else if(result.x > 3){
            $scope.ubicacion.x = 2;
          }else{
            $scope.ubicacion.x = 1;
          }
        }else if(result.x < -1){
          if(result.x < -5){ 
            $scope.ubicacion.x = -3;
          }
          else if(result.x < -3){
            $scope.ubicacion.x = -2;
          }else{
            $scope.ubicacion.x = -1;
          }
        }else{
          $scope.ubicacion.x = 0;
        }

        if(result.y > 1){
          if(result.y > 5){
            $scope.ubicacion.y = 3;
          }
          else if(result.y > 3){
            $scope.ubicacion.y = 2;
          }else{
            $scope.ubicacion.y = 1;
          }
        }else if(result.y < -1){
          if(result.y < -5){
            $scope.ubicacion.y = -3;
          }
          else if(result.y < -3){
            $scope.ubicacion.y = -2;
          }else{
            $scope.ubicacion.y = -1;
          }
        }else{
          $scope.ubicacion.y = 0;
        }

        $scope.imagenOpciones.x += $scope.movimiento * $scope.ubicacion.y;
        $scope.imagenOpciones.y += $scope.movimiento * -$scope.ubicacion.x;

        
        if($scope.imagenOpciones.x < 0){
          $scope.imagenOpciones.x = 0;
        }else if(($scope.imagenOpciones.x + $scope.imagenOpciones.height) > ($window.innerHeight - 90)){
          $scope.imagenOpciones.x = ($window.innerHeight - 90 - $scope.imagenOpciones.height);
        }
        if($scope.imagenOpciones.y < 0){
          $scope.imagenOpciones.y = 0;
        }else if(($scope.imagenOpciones.y + $scope.imagenOpciones.width) > ($window.innerWidth)){
          $scope.imagenOpciones.y = ($window.innerWidth - $scope.imagenOpciones.width);
        }

        var timeStamp = result.timestamp;
      }
    )

  });
});
