define([
  "angular", 
  "common/main", 
  "home/main", 
  "poem/main", 
  "article/main", 
  "speedtest/main"], 

  function(angular) {
    "use strict";
    
    var ngElectron = angular.module("ngElectron", [
      "pascalprecht.translate", 
      "ui.router", 
      "ngAnimate", 
      "ngSanitize",
      "ngElectron.common", 
      "ngElectron.home", 
      "ngElectron.poem", 
      "ngElectron.article", 
      "ngElectron.speedtest"
    ]);
    
    ngElectron.config([
      "$urlRouterProvider", 
      "$httpProvider", 
      "$translateProvider", 
      "$logProvider", 
      "$compileProvider",
       function(
        urlRouterProvider, 
        httpProvider, 
        translateProvider, 
        logProvider, 
        compileProvider) {
        
        httpProvider.defaults.headers.common["Accept"] = "application/json";
        httpProvider.interceptors.push('HttpInterceptor');

        translateProvider.useStaticFilesLoader({
          prefix: "../i18n/",
          suffix: ".json"
        });
        
        translateProvider.preferredLanguage("en_US");
        translateProvider.useSanitizeValueStrategy('sanitize');

        urlRouterProvider.when("", "/home");
        urlRouterProvider.otherwise("/error/404");

        logProvider.debugEnabled(true);
        compileProvider.debugInfoEnabled(true);
        httpProvider.useApplyAsync(true);
      }
    ]);

    ngElectron.run(function() {});

    return ngElectron;

  }
);


