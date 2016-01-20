  define(["angular", "common/header/files/directive"], function(angular, directive) {
    "use strict";
    
    var Header = angular.module("ngElectron.header", []);
    
    Header.directive("ngelectronHeader", directive);
    
    return Header;

  });


