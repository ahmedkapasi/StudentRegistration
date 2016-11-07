
app = angular.module("mainapp",[]);

app.controller("student-controller", function ($scope, $http) {
    $http.get("/getAllStudents").then(function (response, status) {
        //alert(response.data);
       // alert(response);
        //debugger;
        $scope.students = response.data;
        
        //alert(data);
    }, function (error,status) {

        alert(error.message);
    });
    $scope.EditRecord = function (_item) {
        $scope.item = _item;
        $scope.isEditMode = true;
        $scope.isViewMode = false;
        $scope.isAddMode = false;

    }
    $scope.DetailsRecord = function (_item) {
        $scope.item = _item;
        $scope.isViewMode = true;
        $scope.isAddMode = false;
        $scope.isEditMode = false;
    }
    $scope.AddRecord = function () {
        $scope.isViewMode = false;
        $scope.isAddMode = true;
        $scope.isEditMode = false;
        $scope.newitm = { id:"0",name: "", age: "", address: "" };
        //$scope.students.push(itm);
    }
    $scope.SaveItem = function () {
        if($scope.isAddMode)
            data = $scope.newitm
        else
            data = $scope.item;
        //jdata = JSON.stringify({ name: data.name, age: data.age, address: data.address });
        $http.post("/SaveStudentRecord", data).then(
            function (resp) {
                
                toastr["success"]("saved success");
                $scope.students = resp.data;

            },
            function (error) {
                alert(error.message);
            });
    }
})