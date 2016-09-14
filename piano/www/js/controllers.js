angular.module('starter.controllers', [])

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
.controller('JuegoCtrl', function($scope, $stateParams) {

  $scope.Vaca = function(){
    console.log("hace ruido de vaca");
  }

  $scope.Pato = function(){
    console.log("hace ruido de pato");
  }

  $scope.Oveja = function(){
    console.log("hace ruido de oveja");
  }

  $scope.Caballo = function(){
    console.log("hace ruido de caballo");
  }

  $scope.Cerdo = function(){
    console.log("hace ruido de cerdo");
  }

  $scope.Perro = function(){
    console.log("hace ruido de Perro");
  }
})

.controller('PerfilCtrl', function($scope) {

});
