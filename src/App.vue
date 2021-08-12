<template>
  <div>
      <!-- <router-link to="/about">About</router-link> | -->
      <router-view/>
        <tab-bar>
        <tab-bar-item path="/cart" activeColor="red">
          <img slot="item-icon" src="./assets/img/tabbar/cart.svg" alt="">
          <img slot="item-active-icon" src="./assets/img/tabbar/cart_active.svg" alt="">
          <div slot="item-text">购物车</div>        
        </tab-bar-item> 
        <tab-bar-item path="/category" activeColor="red">
          <img slot="item-icon" src="./assets/img/tabbar/category.svg" alt="">
          <img slot="item-active-icon" src="./assets/img/tabbar/category_active.svg" alt="">
          <div slot="item-text">分类</div>   
        </tab-bar-item>
        <tab-bar-item path="/home" activeColor="red">
          <img slot="item-icon" src="./assets/img/tabbar/home.svg" alt="">
          <img slot="item-active-icon" src="./assets/img/tabbar/home_active.svg" alt="">
          <div slot="item-text">首页</div>   
        </tab-bar-item>
        <tab-bar-item path="/profile" activeColor="red">
          <img slot="item-icon" src="./assets/img/tabbar/profile.svg" alt="">
          <img slot="item-active-icon" src="./assets/img/tabbar/profile_active.svg" alt="">
          <div slot="item-text">我的</div>   
        </tab-bar-item>
        </tab-bar>
  </div>
      
</template>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}  */
@import "assets/css/bace.css";
</style>

<script>
  import TabBar from './components/bar/Tabbar';
  import TabBarItem from './components/bar/Tab-bar-item';
  export default{
    name:'App',
    components:{
      TabBar,
      TabBarItem
    }
  }
</script>
