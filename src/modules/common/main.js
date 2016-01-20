define([
	"angular", 
	"common/http_interceptor/main", 
	"common/header/main",
	"common/footer/main",
	"common/error/main"], function(angular) {
	"use strict";

	var Common = angular.module("ngElectron.common", [
		"ngElectron.http.interceptor", 
		"ngElectron.header",  
		"ngElectron.footer",  
		"ngElectron.error"
	]);
	
	return Common;
	
});


