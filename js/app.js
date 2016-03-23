// Integración de Google Maps via angular-ui
// http://angular-ui.github.io/angular-google-maps/#!/use
angular.module('proyectoUno', ['uiGmapgoogle-maps'])
    // Creamos un servicio de donde vienen los datos
    .service('MarcadoresService', function() {
        // Cada marcador debe tener un `id` único
        var sanJose = {
                id: 1,
                coords: {
                    latitude: 9.60,
                    longitude: -83.95
                }
            },
            cartago = {
                id: 3,
                coords: {
                    latitude: 9.75,
                    longitude: -83.67
                }
            },
            puntarenas = {
                id: 6,
                coords: {
                    latitude: 9.58,
                    longitude: -84.50
                }
            },
            limon = {
                id: 7,
                coords: {
                    latitude: 9.59,
                    longitude: -83.02
                }
            };

        return {
            sanJose: sanJose,
            todos: [sanJose, cartago, limon, puntarenas]
        }
    })
    // Y un controlador que los consume
    .controller('ProyectoUnoController',
        ['$scope', 'MarcadoresService', function ($scope, MarcadoresService) {
            $scope.init = function() {
                // Ejemplo de la ubicación de marcadores
                // http://angular-ui.github.io/angular-google-maps/#!/api/marker
                $scope.marcadores = MarcadoresService.todos;

                // Configuración de un mapa
                // http://angular-ui.github.io/angular-google-maps/#!/api/google-map
                $scope.configuracionMapa = {
                    // Requerido para iniciar el mapa, un punto sobre el cual empezar
                    centro: MarcadoresService.sanJose.coords,
                    // Nivel de zoom, entre más alto mas cerca del punto nos encontramos
                    zoom: 7
                };
                // Opciones para el mapa
                // https://developers.google.com/maps/documentation/javascript/reference#MapOptions
                $scope.opcionesMapa = {
                    // Elimina la opción entre tipos de mapas
                    mapTypeControl: false,
                    // Elimina la opción de usar `streeView`
                    streetViewControl: false
                };
            };

            $scope.init();
        }])
;
