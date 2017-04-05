
app.controller('FreshersController', ['$scope', function($scope) {
	
	$scope.fresher = 
		{
			id: '',
    		full_name: '',
    		sex: '',
    		short_name: '',
    		office: '',
    		cube: ''   	
		}
    
    $scope.freshers = [
    	{
    		id: 11531846,
    		full_name: 'Le Cong Minh Thuan',
    		sex: 'M',
    		short_name: 'tle237',
    		office: 'NTO',
    		cube: 68   		
    	},
    	{
    		id: 11531841,
    		full_name: 'Nguyen Vu Xuan Thu',
    		sex: 'F',
    		short_name: 'tnguyen490',
    		office: 'ETO1',
    		cube: 14   		
    	},
    	{
    		id: 11531840,
    		full_name: 'Vuong Thi Phuong',
    		sex: 'F',
    		short_name: 'pvuong5',
    		office: 'ETO3',
    		cube: 107   		
    	},
    	{
    		id: 11531816,
    		full_name: 'Tran Hoang Quan',
    		sex: 'M',
    		short_name: 'qtran30',
    		office: 'ETO3',
    		cube: 153   		
    	},
    	{
    		id: 11531817,
    		full_name: 'Nguyen Huy Tuan',
    		sex: 'M',
    		short_name: 'tnguyen489',
    		office: 'ETO1',
    		cube: 35   		
    	},
    	{
    		id: 11531816,
    		full_name: 'Tran Thanh Quan',
    		sex: 'M',
    		short_name: 'qtran31',
    		office: 'NTO',
    		cube: 67   		
    	}
    ]
	
	$scope.addFresher = function(){
		$scope.freshers.push($scope.fresher);
		$scope.fresher = 
		{
			id: '',
    		full_name: '',
    		sex: '',
    		short_name: '',
    		office: '',
    		cube: ''   	
		}
	}
}]);

app.filter('sexFormat', function() {
    return function(x) {
        if(x === 'M')
        	return "Male";
        else
        	return "Female";        
    };
});