
/* jshint esversion: 6 */

app.controller("maincontroller",($scope,$location,$filter)=>{
    $scope.menus = [];
    $scope.message = "";
    $scope.username="";
    $scope.isLoggedIn = false;
    $scope.$on("loadroutes",(event,data)=>{
        if(data){
            $scope.isLoggedIn = true;
            $scope.menus = data;
            // $scope.message = "Welcome "+$filter("titlecase")(localStorage.userid);
            $scope.message = "Welcome ";
            $scope.username = localStorage.userid;
            $location.path("/");
        }
    });
    $scope.logout =()=>{
        $scope.isLoggedIn = false;
        $scope.menus = [];
        $scope.message = "Logout Successfully";
        localStorage.clear();
        $location.path("/");
        $scope.isLoggedIn = false;
    };
});