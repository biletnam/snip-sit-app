angular.module('snip-sit')
	.service('autocomplete', function($q) {

	    return {
	    		autocomplete:function (query) {

	    		}
	    }
	})
	.service('auth', function(){

		return {
			auth: function(){
				return true
			}
		}
	})
	.service('seatMap', function(){

		return {
			seatMap: function(){
				return true
			}
		}
	})
	.service('flightSearch', function(){

		return {
			flightSearch: function(){
				return true
			}
		}
	})
	.service('bookSeat', function(){

		return {
			auth: function(){
				return true
			}
		}
	})