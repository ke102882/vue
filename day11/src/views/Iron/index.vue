<script>
export default {
	data(){
		return {
			page: 0,
			day: 0,
			header: {
				src: './001.JPG',
				title: 'HelloWorld!!vue.js'
			},
			list: [
				{ type: "主餐", title: "牛排", link: "javascript:;" },
				{ type: "附餐", title: "豬排", link: "javascript:;" },
				{ type: "飲料", title: "可樂", link: "javascript:;" },
				{ type: "沙拉", title: "凱薩", link: "javascript:;" },
				{ type: "水果", title: "西瓜", link: "javascript:;" }
			]
		}
	},
	methods: {
		changeHandler(e){
			let day = this.day
			if(e.keyCode === 39){ //加按鍵
				day = day < 29 ? day + 1 : day
			}else if(e.keyCode === 37){ //減按鍵
				day = day > 0 ? day -1 : day
			}
			this.day = day;
		}
	},
	mounted(){
		let day = parseInt(this.$route.params.day) - 1;
		this.day = day;
		document.addEventListener('keyup', this.changeHandler )
	},
	watch:{
		$route(now){
			let day = parseInt(this.$route.params.day) - 1;
			this.day = day;
		}
	}
}
</script>

<template src="./template.html"></template>
<style src="./style.css"></style>