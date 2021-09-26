// index.js
var rand;
function createRand(){
  rand=[];
  for(var i=0;i<7;i++){
    var r=parseInt((Math.random()*31));
    rand.push(r);
  }
};
Page({
  onLoad:function(){
    createRand();
    this.setData({
      rand:rand,
    })
  },
  newRand:function(){
    createRand();
    this.setData({
      rand:rand,
    })
  }
})