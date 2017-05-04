// Fly 是整个游戏的全局对象，保证全局环境中值有一个全局对象！
// 所有，其他的内容都是通过 Fly 对象获取到的！
(function( window ) {
// 开启严格模式
'use strict';

// 声明全局对象
var FlyObj = {};

// FlyObj 中用来存放所有的工具函数（utils）

// 给全局对象添加 laodImages 方法
FlyObj.loadImages = function( imgSrc, callback ) {
  var count = 0,
    imgsLen = imgSrc.length,
    imgList = {};
  
  imgSrc.forEach(function(val, index) {
    var img = new Image();
    img.src = 'images/' + val + '.png';
    imgList[ val ] = img;

    img.onload = function() {
      count++;

      if( count >= imgsLen ) {
        callback( imgList );
      }
    };
  });
};

// 将角度转化为弧度
FlyObj.toRadian = function( angle ) {
	return angle / 180 * Math.PI;
};


// 将全局对象暴露到全局环境中
window.Fly = FlyObj;

})( window );