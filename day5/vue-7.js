let data = {
	input: {
		type: '全部',
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
	computed: {
		typeMenu(){ //單純依選單篩選
			if(this.input.type==='全部'){
				return this.menu
			}else{
				return this.menu.filter(item=>{
					return item.type ===this.input.type
				})
			}
		},
		titleMenu(){ //依照關鍵字篩選，如沒關鍵字，則單純依選單篩選
			if(!this.input.title){
				return this.typeMenu
			}else{
				return this.menu.filter(item=>{
					let content = item.title.toLowerCase()
					let keyword = this.input.title.toLowerCase()
					return content.indexOf(keyword) !==-1
					// return item.title===this.input.title
				})
			}
		}
	},
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