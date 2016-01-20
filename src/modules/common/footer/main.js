  define(["angular", "common/footer/files/directive"], function(angular, directive) {
    "use strict";
    
    var Footer = angular.module("ngElectron.footer", []);
    
    Footer.directive("ngelectronFooter", directive);
    
    return Footer;

  });


