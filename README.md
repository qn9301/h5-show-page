# 模仿易企秀，自己封装的一个包
- 实现了上下左右滑动翻页的效果
- 使用类继承和注入的方式，让编写代码更加关注业务部分
- 部分文件是设计初预留的，部分功能未去设计，大家可以自己随意扩展，由于是比较早写的东西，可能设计的也并不是特别友好

### 一、js文件
1. config.js（预留，未实现）
2. container.js（容器类，实现外部容器与各个页面容器的交互与基本的翻页效果）
3. main.js（注册js，在这里将自己实现的页面部分注册进入容器）
4. page.js（用于实现各个页面的主要业务逻辑，个父类page类，集成后实现init和start方法）
5. media.js（可以注入容器，从而实现其他功能的组件效果）
### 二、js代码解读
1. 用于处理超出的页面编号

```
// 拦截器
this.__defineGetter__("index",function (){
	if(_index>=_this.len){
		_index = 0;
	}
	if(_index<0){
		_index = _this.len-1;
	}
	return _index;
})
// 拦截器
this.__defineSetter__("index",function (v){
	_index = v;
})
```

### 三、other文件
PS：是我女朋友写的面向过程的写法和后来用面向对象写法写的，大家有兴趣的话也可以看看，没有兴趣请忽略。

---
喜欢的朋友可以点击一下star
