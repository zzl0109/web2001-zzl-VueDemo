<template>
  <div id="app">
	  <div class="router" v-show="$route.name != 'Merchant'">
			  <router-link :to="{name:'Home'}" :class="{focus:($route.name == 'Home')}">
					首页
			  </router-link>
			  <router-link :to="{name:'Merchant'}" :class="{focus:($route.name == 'Merchant')}">
					商家入驻
			  </router-link>
			  <router-link :to="{name:'Help'}" :class="{focus:($route.name == 'Help')}">
					帮助中心
			  </router-link>
	  </div>
	  
	  <router-view></router-view>
  </div>
</template>

<style lang="less" scoped="scoped">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f3f3f3;
  .router{
	  display:flex;
	  a{
		  display:block;
		  text-decoration:none;
		  padding:0 12px;
		  font-size: .53333rem;
		  color: #6c6c6c;
		  line-height: 50px;
	  }
	  .focus{
	  		 color:#ed435b;
	  	  
	  }
  }
}


</style>
