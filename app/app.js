'use strict';

// Declare app level module which depends on views, and components
var app = angular.module("mainApp",[]);
app.controller("todoCtrl",['$scope', function ($scope) {
    $scope.listTodo = [];
    $scope.checkbox1 = [];
    $scope.todo = {};
    $scope.count = 0;
    $scope.filterType = "ALL"; //"COMPLETED", "ACTIVE"

    $scope.addToDo = function () {
        if($scope.todo.ac != null && $scope.todo.ac != ""){
            $scope.count ++;
            $scope.listTodo.push({ac : $scope.todo.ac, selected : false});
            $scope.todo.ac = "";

        }else {
            alert("Please enter input");
        }
    }

    $scope.deleteTodo = function (index) {
        $scope.count = 0;
        $scope.listTodo.splice(index, 1);
        angular.forEach($scope.listTodo, function (obj) {
            if(obj.selected == false)
                $scope.count ++;
        });
    }

    $scope.allItems = function () {
        $scope.act = {};
        $scope.count = 0;
        angular.forEach($scope.listTodo, function (obj) {
            if(obj.selected == false)
                $scope.count ++;
        });
    }

    $scope.completedItems = function () {
        $scope.act = true;
    }

    $scope.activeItems = function () {
        $scope.act = false;
    }
    $scope.removeAlls = function () {
        $scope.count = 0;
        $scope.listTodo.length = 0;
    }

    $scope.filterStatus = function(item) {
        switch ($scope.filterType){
            case "ALL":
                return true;
            case "COMPLETED":
                return item.selected;
            case "ACTIVE":
                return !item.selected;
        }
    };

    $scope.boolean = true;
    $scope.updateBox = function () {
        $scope.act = {};
        angular.forEach($scope.listTodo, function (obj) {
            obj.selected = $scope.boolean;
        });
        $scope.boolean = !this.boolean;
        $scope.count = 0;
        angular.forEach($scope.listTodo, function (obj) {
            if(obj.selected == false)
                $scope.count ++;
        });

    }

    $scope.countSelected = function (item) {
        if(item.selected == false){
            $scope.count ++;
        }else {
            $scope.count --;
        }
    }
}]);