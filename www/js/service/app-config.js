angular.module('snip-sit')
	.factory('appConfig',function () {
	    var authDetails = {
	      clientId : "VjE6NnEyZW1jemIwdHZzdDc2NjpERVZDRU5URVI6RVhU",
	      clientSecret : "TW5XMExqYzA="
	    }

	    var serviceUrls = {
	              test: "https://api.test.sabre.com",
	              prod: "https://api.sabre.com"
	              
	    }

	    return {
	    	authDetails:authDetails,
	    	serviceUrls:serviceUrls
	    }
})