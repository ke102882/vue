<script>
export default {
	computed: {
		// day(){
		// 	return this.$store.state.day
		// },
		day:{
			get(){
				return this.$store.state.day
			},
			set(val){
				// this.$store.state.day = val
				this.$store.commit('setDay', val)
			}
		},
		header(){
			return this.$store.state.header
		},
		list(){
			return this.$store.state.list
		}
	},
	methods: {
		changeHandler(e){
			let day = this.day
			let list = this.$store.state.list;
			if(e.keyCode === 39){ //加按鍵
				day = day < list ? day + 1 : day
			}else if(e.keyCode === 37){ //減按鍵
				day = day > 0 ? day -1 : day
			}
			// this.day = day;
			this.$router.replace({
				params:{
					day: day + 1 
				}
			})
		}
	},
	mounted(){
		let day = parseInt(this.$route.params.day) - 1;
		// this.day = day;
		this.$store.dispatch('getList',day)
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