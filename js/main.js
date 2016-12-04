var pageone = new pageOne();pageone.init(".sceneOne");
var pagetwo = new pageTwo();pagetwo.init(".sceneTwo");
var box = new container(
	[
	pageone,
	pagetwo,
	], new media());