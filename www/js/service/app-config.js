angular.module('snip-sit')
	.factory('appConfig',function () {
	    var apiProps = {
	      serviceUrls : {
	              test: "https://api.test.sabre.com",
	              prod: "https://api.sabre.com"
	            },
	      clientId : "id",
	      clientSecret : ""
	      
	    }

	    return {apiProps:apiProps}

})