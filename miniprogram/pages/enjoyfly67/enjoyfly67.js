page({
  data: {
  // 搜索框状态
  inputshowed: false,
  // 搜索框值
  inputval: "",
  //搜索渲染推荐数据
  list:[
   {name:"帝霸"},
   { name: "遮天" },
   { name: "道界天下" },
   { name: "菜鸟" },
   { name: "先飞" }
  ]
  },
  // 显示搜索框
  showinput: function () {
  this.setdata({
   inputshowed: true
  });
  },
  // 隐藏搜索框样式
  hideinput: function () {
  this.setdata({
   inputval: "",
   inputshowed: false
  });
  },
  // 清除搜索框值
  clearinput: function () {
  this.setdata({
   inputval: ""
  });
  },
  // 获取搜索框值
  inputtyping: function (e) {
  this.setdata({
   inputval: e.detail.value
  });
  console.log(this.data.inputval);
  },
  // 获取选中推荐列表中的值
  btn_name:function(res){
  console.log(res.currenttarget.dataset.index, res.currenttarget.dataset.name);
  }
 });