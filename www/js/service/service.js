angular.module('snip-sit')
	.service('sabre', function($q,$http) {

		function autocomplete (argument) {
			
		}

		function auth (argument) {
			// body... 
		}

		function seatMap (argument) {
			// body... 
		}

		function flightSearch (argument) {
			// body... 
		}

	    return {
    		autocomplete: autocomplete, 
    		auth: auth, 
			seatMap: seatMap,
			flightSearch: flightSearch
	    }


	})