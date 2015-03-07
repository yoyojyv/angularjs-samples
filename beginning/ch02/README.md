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

