<template>
	<h1 class="title">{{ Title }}</h1>
	<!-- 效能差
<style scoped>
	h1{
		color: #00f;
	}
</style> -->
</template>

<script>
export default {
	name: 'Title',
	// data(){ //以前一個data放東西，丟上view
	// 	return{
	// 		Title: 'Hello'
	// 	}
	// }
	props: { //現在接收data放東西，丟上view，再進口到app.vue
		Title:{
			type: String,
			required: true
		}
	}
} 
</script>

<style>
	.title{
		color: #00f;
	}
</style>

