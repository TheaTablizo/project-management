angular.
  module('pmApp').
  config(['$locationProvider' ,'$routeProvider', 
    function config($locationProvider, $routeProvider) {
	  console.log($routeProvider);
	  console.log($locationProvider);
			
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/projects/summary', {
		template: '<project-detail></project-detail>'
        }).
		when('/projects/areas', {
          template: '<areas-special></areas-special>'
        }).
		when('/projects/education', {
          template: '<education-training></education-training>'
        }).
		when('/projects/career', {
          template: '<career-synopsis></career-synopsis>'
        }).
		when('/projects/view', {
          template: '<view-proj></view-proj>'
        }).
		when('/projects/exp', {
          template: '<exp-proj></exp-proj>'
        }).
		when('/wsor/register', {
          template: '<project-registration></project-registration>'
        }).
		when('/init', {
          template: '<project-login></project-login>'
        }).
        otherwise('/init');
    }
	angular.
  module('pmApp').

controller('mainController', function($scope, $cookies, $location){
	
	var cookieVar = $cookies.get('scempid');
	if (cookieVar == null) {
		$location.path('/init');
	}
  function ProjectDetailController($http, $routeParams) {
		  var self = this;
		  console.log("routeParams:" + $routeParams.projectId);
		  $http.get('/projects/' + $routeParams.projectId).then(function(response) {
			 console.log(response.data);
			 self.projects = response.data; 
		  });
		  
		  this.logout=logedout; 
		  
			var logedout = {
					$cookies.remove("scempid");
				};
		  
		}]
	
	
  ]);
  