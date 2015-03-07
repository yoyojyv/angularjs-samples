# ch02 TODO App

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.11.1.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.


> 본 내용은 시작하세요. AngularJS 프로그래밍 서적의 예제 내용을 담고 있습니다.  

### ● Step01 프로젝트 생성, index.html 수정
 
Run `yo angular`, optionally passing an app name:

```bash
yo angular [app-name] 
```

Run `grunt serve`
```bash
grunt serve 
```

Modify app/index.html

### ● Step02: AngularJS 적용


#### 데이터와 컨트롤러를 만들기
> app/scripts/app.js 파일 수정.

```
angular
  .module('todoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]);
```


#### controller 파일 수정
> app/scripts/controllers/main.js 파일 수정.

```
angular.module('todoApp')
  .controller('todoController', function ($scope) {
    $scope.todoList = [
      {done: true, title: 'AngularJS 독서'},
      {done: false, title: 'AngularJS 공부하기'},
      {done: false, title: '개인 프로젝트 구성'}
    ]
    $scope.appName = 'AngularJS TODO APP';
  });
```

#### html 파일 수정
> app/index.html 파일 수정

```
<html ng-app="todoApp">


<body class="well" ng-controller="todoController">

...
...

<div class="container">

  <div>

    <h1>{{appName}}</h1>

    <p>전체 할 일 <strong>2</strong>개 / 남은 할일은 <strong>1</strong>개 [<a href="">보관하기</a>]</p>
    
    <ul>
      <li ng-repeat="todo in todoList" class="checkbox">
        <input type="checkbox" ng-model="todo.done">{{todo.title}}
      </li>
    </ul>
    
...
...

```

### ● Step03: 기타 기능들 구현

#### 추가
> addNewTodo function 추가 (app/scripts/main.js 파일 수정)

```
// add
$scope.addNewTodo = function (newTitle) {
  $scope.todoList.push({done: false, title: newTitle});
  $scope.newTitle = '';
}
```

> ng-model, ng-click 속성 추가 (html 파일 수정)
```
<form name="newItemForm" class="form-inline">
  <div class="form-group">
    <label class="sr-only" for="newItemText">새로운 할 일</label>
    <input type="text" class="form-control" id="newItemText" name="newItemText" placeholder="새로운 할 일" ng-model="newTitle">
  </div>
  <button type="submit" class="btn btn-default" ng-click="addNewTodo(newTitle)">추가</button>
</form>
```

#### 보관하기 기능 추가
> archive function 추가 (app/scripts/main.js 파일 수정)

```
// archive
$scope.archive = function () {
  for (var i = $scope.todoList.length - 1; i >= 0; i--) {
    if ($scope.todoList[i].done) {
      $scope.todoList.splice(i, 1);

    }
  }
}
```

> ng-click 속성 추가 (html 파일 수정)

```
<p>전체 할 일 <strong>2</strong>개 / 남은 할일은 <strong>1</strong>개 [<a href="" ng-click="archive()">보관하기</a>]</p>
```

#### 남은 할일 구하기 
> remain function 추가 

```
// remain
$scope.remain = function() {
  var remainCount = 0;
  angular.forEach($scope.todoList, function(value, key) {
    if (value.done === false) {
      remainCount++;
    }
  })
  return remainCount;
}
```

> view 수정 

```
<p>전체 할 일 <strong>{{todoList.length}}</strong>개 / 남은 할일은 <strong>{{remain()}}</strong>개 [<a href="" ng-click="archive()">보관하기</a>]</p>
```



#### 추가적으로 들어가야 할 부분들 

* validation
* database 
* $http


