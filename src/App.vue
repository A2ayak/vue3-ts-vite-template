<script setup lang="ts">
const test: Nullable<string> = 'asdasd'
</script>

<template>
	<router-link to="/">首页</router-link>
	<router-link to="/home">Home</router-link>
	<a-button type="primary">asldkj</a-button>
	<div class="empty-color"></div>
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
