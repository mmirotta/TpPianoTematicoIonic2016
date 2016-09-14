angular.module('starter.controllers', ['ngCordova'])

.controller('InicioCtrl', function($scope, $stateParams, $state) {

  $scope.Jugar = function(){
    $state.go('tab.ingreso');
  }

  $scope.Perfil = function(){
    $state.go('tab.perfil');
  }

})

.controller('IngresoCtrl', function($scope, $state) {
  $scope.usuario = {};
  $scope.usuario.nombre = "";
  $scope.Ingresar = function(){
 console.log("asda");

    var param = JSON.stringify($scope.usuario);
    $state.go('tab.juego', {usuario:param});
  
  };
})
.controller('JuegoCtrl', function($scope, $stateParams, $cordovaNativeAudio, $cordovaFile) {
    $scope.usuario = JSON.parse($stateParams.usuario);

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

      $cordovaFile.createDir(cordova.file.dataDirectory, "docs/" + $scope.usuario.nombre, false)
      .then(function (success) {
        // success
      }, function (error) {
        // error
      });

      $cordovaFile.createFile(cordova.file.dataDirectory, "nuevo.txt", true)
      .then(function (success) {
        // success
      }, function (error) {
        // error
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
      $cordovaFile.writeExistingFile(cordova.file.dataDirectory, "nuevo.txt", "vaca-")
      .then(function (success) {
        // success
      }, function (error) {
        // error
      });
    }
    catch(error)
    {
      console.log("la pc no suena");
    }
  }

  $scope.Pato = function(){
    try 
    {
      $cordovaNativeAudio.play('pato');
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
    }
    catch(error)
    {
      console.log("la pc no suena");
    }
  }
})

.controller('PerfilCtrl', function($scope) {

});
