<template>
	<div class="login-style">
		<ul class="login-ul">
			<li><a href="#">注册</a></li>
			<li><a href="/login">登陆</a></li>
			<router-view></router-view>
		</ul>
	</div>
</template>
<style>
.login-style {
	width: 100%;
	height: auto;
	background: #f5f5f5;
	padding-bottom: 45px;
	z-index: 100000;
}
.login-ul li{
	float: left;
	line-height: 45px;
  margin-left: 10px;
}
.login-ul li a:hover{
	color: blue;
	width: 120px;
}
.login-ul{
	margin-left: 85%;
}
</style>
