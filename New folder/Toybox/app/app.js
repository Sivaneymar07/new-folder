var app=angular.module('myApp',['ngRoute']);
app.directive('backButton', function(){
    return {
      restrict: 'A',
      template: 'hello',

      link: function(scope, element, attrs) {
        element.bind('click', goBack);

        function goBack() {
          history.back();
          scope.$apply();
        }
      }
    }
}); 