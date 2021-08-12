<template>
    <div id="app">
        <div id="nav">
        <!-- <div class="tab-bar-item">首页</div>     
        <div class="tab-bar-item">分类</div>
        <div class="tab-bar-item">购物车</div>
        <div class="tab-bar-item">我的</div> -->
        <slot></slot> 
        </div>
    </div>
  </template>

  <style>
  #nav {
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  }
  </style>