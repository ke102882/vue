<script>
export default {
	name: 'input_C',
	props: {
		text: {
			type: String,
			required: true,
			// default: '' //預設值
		}
	},
	computed: {
		inputText: {
			get(){
				return this.text;
			},
			set(val){
				// this.$emit('textchange',val);
				this.$emit('update:text',val);
			}
		}
	}
}
</script>

<template src="./template.html"></template>
<style src="./style.css"></style>


