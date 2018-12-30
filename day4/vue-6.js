let data = {
	input: {
		type: '主餐',
		title: ''
	},
	menu: [
		{ type: "主餐", title: "牛排", link: "javascript:;" },
		{ type: "附餐", title: "豬排", link: "javascript:;" },
		{ type: "飲料", title: "可樂", link: "javascript:;" },
		{ type: "沙拉", title: "凱薩", link: "javascript:;" },
		{ type: "水果", title: "西瓜", link: "javascript:;" }
	]
}
let vm = new Vue({
	el: '#app',
	data: data,
	methods:{
		inputHandler(){
			if(this.input.title){
				let { type, title } = this.input
				this.menu.push({
					type,
					title,
					link: 'javascript:;'
				})
				this.input.title=''
			}
		}
	}
})