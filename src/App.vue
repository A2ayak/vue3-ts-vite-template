<script setup lang="ts"></script>

<template>
	<router-link to="/">首页</router-link>
	<router-link to="/home">Home</router-link>
	<a-button type="primary">asldkj</a-button>
	<span>teasasldkj</span>
	<router-view></router-view>
</template>

<style scoped lang="less">
.logo {
	height: 6em;
	padding: 1.5em;
	will-change: filter;
}
span {
	color: @primary-color;
}
</style>
