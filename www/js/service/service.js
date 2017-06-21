angular.module('snip-sit')
	.service('sabre', function($q,$http,appConfig) {

		var sabreApis = {
			auth: '/v2/auth/token/',
			autocomplete: '/v1/lists/utilities/geoservices/autocomplete/',
		}

		function autocomplete (query) {
			
		}

		function auth(){

			var key = ""
			var accessToken = window.btoa(appConfig.authDetails.clientId+':'+appConfig.authDetails.clientSecret)

			if (accessToken != null) {

				var req = buildAuthRequest(accessToken)

				$http(req).then(function (response) {
					console.log(response.data)
					console.log(response.status)
					key = response.data.access_token
					return key
				}, function(response){
					console.log(response.data)
					console.log(response.status)
					return 'Error: '+response.data
				})



			}



		}

		function seatMap (planeType) {
			// body... 
		}

		function flightSearch (args) {
			// body... 
		}

		// helpers //
		function buildRequestObject(method,key,apiType,query) {
			var req = {
				 method: method,
				 url: appConfig.serviceUrls.test+apiType,
				 headers: {
				   'Content-Type': 'application/x-www-form-urlencoded',
				 },
				 data: { Body : 'Accept: */*' }
			}

			// add headers for oAuth call 
			if(key != null){
				req.headers['Authorization'] = 'Basic ' + key
				req.headers['grant_type'] = 'client_credentials'
			}

			if (query != null) {
				req.params = {
					query:query
				}
			}

			return req
		}

		function buildAuthRequest(customerKey) {
			return buildRequestObject('POST',customerKey,sabreApis.auth)
		}

		function buildAutocompleteRequest(query) {
			return buildRequestObject('GET',null,sabreApis.autocomplete,query)
		}

	    return {
    		autocomplete: autocomplete, 
    		auth: auth, 
			seatMap: seatMap,
			flightSearch: flightSearch,
			sabreApis: sabreApis
	    }


	})