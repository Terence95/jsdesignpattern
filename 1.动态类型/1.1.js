/*
example1
var duck = {
    duskSinging:function() {
        console.log('gagaga');
    }
};

var chicken = {
    duskSinging:function () {
        console.log('gagaga');
    }
};

var choir = [];

var joinChoir = function (animal) {
    if(animal && typeof animal.duskSinging === 'function'){
        choir.push( animal );
        console.log('welcome');
        console.log('have ' + choir.length + ' menbers');
    }else{
        console.log('some wrongs');
    }
};

joinChoir(duck);
joinChoir(chicken);



// --对象的多态性
var makeSound = function (animal) {
    if (animal instanceof Duck) {
        console.log('gagaga');
    }else if(animal instanceof Chicken){
        console.log('jijiji');
    }
}

var Duck = function(){}
var Chicken = function(){}

makeSound(new Duck());
makeSound(new Chicken());


// ---改进后的多态代码

var makeSound = function(animal){
    animal.sound();
};

var Duck = function(){}

Duck.prototype.sound = function () {
    console.log('gagaga');
}

var Chicken = function(){}

Chicken.prototype.sound = function () {
    console.log('jijiji');
}

var Dog = function () {}

Dog.prototype.sound = function () {
    console.log('wangwangwang');
}

makeSound(new Duck());
makeSound(new Chicken());
makeSound(new Dog());

*/

// 地图应用例子
var googleMap = {
    show:function () {
        console.log('开始渲染谷歌地图');
    }
};


// 要把谷歌地图换成百度地图了，用条件分支来支持

var baiduMap = {
    show:function () {
        console.log('开始渲染百度地图');
    }
};

// var renderMap = function (type) {
//     if (type === 'google') {
//         googleMap.show()
//     }else if(type === 'baidu'){
//         baiduMap.show();
//     }
// };
// renderMap('google');
// renderMap('baidu');


// ---改进方法

var renderMap = function (map) {
    
    if(map.show instanceof Function){
        alert(map.show instanceof Function); //instanceof 用于判断一个变量是否某个对象的实例 map.show 是 function的一个实例
        map.show();
    }
};

renderMap(googleMap); // googleMap 传入后， googleMap.show instanceof Function 是true
renderMap(baiduMap);


var sosoMap = {
    show:function (params) {
       console.log('开始渲染soso地图');
    }
}

renderMap(sosoMap);

