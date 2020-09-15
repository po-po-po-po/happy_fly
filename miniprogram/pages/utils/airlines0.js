//初始化常用机场城市
var hotCities=[];

//初始化所有国内机场城市
var citys=[];
citys[0] = new Array('CA','中国国际航空','国航','国航系');
citys[1] = new Array('MU','东方航空','东航','东航系');
citys[2] = new Array('CZ','南方航空','南航','南航系');
citys[3] = new Array('FM','上海航空','上航','东航系');
citys[4] = new Array('MF','厦门航空','厦航','南航系');
citys[5] = new Array('ZH','深圳航空','深航','国航系');
citys[6] = new Array('SC','山东航空','山航','国航系');
module.exports = {
	hotCities, 
	cities: citys
}
