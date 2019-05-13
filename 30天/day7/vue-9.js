let data = {
	input: {
		type: null,
		title: null
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
		typeList(){	//初始化請選擇
			let obj = {
				sort: [],
				map: {}
			}
			//寫法一
			//this.menu.forEach(({ type, title, link }, index)=>{.....})
			//寫法二
			this.menu.forEach((item,index) => {
				let { type, title, link } = item
				if(!obj.map[type]) {
					obj.sort.push(type)
					obj.map[type] = {
						sort: [],
						map: {}
					}
				}
				obj.map[type].sort.push(title)
				obj.map[type].map[title] = { index, link }
			});
			return obj
		},
		titleList(){ //選擇了第一個，第二個出現對應選單
			this.input.title = null;
			if(this.input.type){
				return this.typeList.map[this.input.type]
			}else{
				return []
			}
		},
		content(){ //最後一個填好了，出現對應資料
			if(this.input.title){
				return this.titleList.map[this.input.title]
			}else{
				return null
			}
		}
	}
	
})