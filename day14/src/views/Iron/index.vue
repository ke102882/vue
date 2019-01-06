<script>
import ironStore from '@/ironStore.js'

export default {
	computed: {
		// day(){
		// 	return this.$store.state.day
		// },
		day:{
			get(){
				return this.$store.state.list ? this.$store.state.list.day : 0
			},
			set(val){
				// this.$store.state.day = val
				this.$store.commit('list/setDay', val)
			}
		},
		header(){
			return this.$store.state.list ? this.$store.state.list.header :  null
		},
		// list(){
		// 	return this.$store.state.list ? this.$store.state.list.list : []
		// }
		currentDay(){
			return this.$store.state.list ? this.$store.getters['list/currentDay'] : null
		}
	},
	methods: {
		changeHandler(e){
			let day = this.day
			let list = this.$store.state.list ? this.$store.state.list.list.length - 1  : []
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
		this.$store.registerModule('list', ironStore);
		this.$store.dispatch('list/getList',day);
		document.addEventListener('keyup', this.changeHandler ) 
	},
	beforeDestroy(){
		this.$store.unregisterModule('list')
		document.removeEventListener('keyup', this.changeHandler ) //離開前記得將原本註冊事件刪除，避免影響下次進入時造成可能的資料錯誤
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