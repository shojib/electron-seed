define([], function() {
  "use strict";
  
  var Directive = function() {
    return {
      restrict: "E",
      replace: true,
      templateUrl: "/modules/common/footer/tmpl/footer.html",
      link: function(scope) {
        var currentYear = new Date().getFullYear();       
      	scope.copyrightYears = currentYear > 2016 ? 2016 + '-' + currentYear : 2016;
      }
    };
  };

  return Directive;
  
});


