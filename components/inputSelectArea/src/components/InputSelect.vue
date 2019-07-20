<template>
  <div class="select">
    <input ref="input"
           type="text"
           class="input-select"
           id="input-select"
           v-model="values.label"
           autocomplete="off"
           @input="inputSelect"
           @keydown.down="keyFunc(1)"
           @keydown.up="keyFunc(-1)"
           @keydown.enter="keySelect(valueIndex)"
           @focus="handlerSelectItem(true)"
           @blur="handlerSelectItem(false)"
           @keydown.tab="handlerSelectItem(false)">
    <label for="input-select" class="icon-select">
      <i ref="inputIcon" class="el-icon-arrow-down"></i>
    </label>
    <div class="box-select" ref="boxSelect">
      <ul class="wrap-select" ref="wrapSelect"
          @click="mouseSelect">
        <li  class="item-select" v-for="(group, index) in dataFillter" :key="index">
          <div class="item-title" @click.stop.self.prevent v-if="group.title">
            <p class="item-title-content">{{group.title}}</p>
          </div>
          <ul>
            <li v-for="( item, index$1 ) in group.list" :key="index$1"
                :data-value="item.value"
                :data-label="item.label"
                :class="['item-list-select',
                        {'active-index': values.value === item.value}]"
              >
              {{item.label}}
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputSelect',
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    value: {
      type: String,
      default: () => '',
    },
    label: {
      type: String,
      default: () => '',
    },
    buildKey: {
      type: String,
      default: () => '',
    }
  },
  data(){
    return {
      dataFillter: [],
      values: {
        label: '',
        value: '',
      },
      valueIndex: 0,
    }
  },
  created() {
    this.dataFillter = this.data;
    this.values.label = this.label;
    this.values.value = this.value;
  },
  updated () {
    console.log(this.values);
  },
  methods: {
    filterAreaNumber(value) {
      // this.selectNumber = value;
      if (this.values.value) {
        const rule = new RegExp(`^${value}`, 'i');
        const setArea = [];
        this.data.forEach((item) => {
          const area = item.list.filter((list) => {
            return list.label.match(rule);
          });
          if ( area.length !== 0 ) {
            setArea.push({ title: item.title || '', list: [...area] });
          }
        });
        this.dataFillter = setArea;
      } else {
        this.dataFillter = this.dataFillter;
      }
    },
    keySelect(index) {
      const inputSelect = this.$el.querySelectorAll('[data-value]');
      this.values.label = inputSelect[index].dataset.label;
      this.values.value = inputSelect[index].dataset.value;
      this.handlerSelectItem(false);
      this.upValue();
    },
    mouseSelect(e) {
      const selectItem = Array.from(this.$el.querySelectorAll('.select .item-list-select'));
      const event = e.target;
      let index = 0;

      event.classList.add('heightline');
      if (event.dataset) {
        this.values.value = event.dataset.value || this.values.value;
        this.values.label = event.dataset.label;
      }
      selectItem.forEach((item, i) => {
        if (~this.values.value.indexOf(item.dataset.label)) {
          index = i;
          return;
        }
      });
      this.valueIndex = index;
      this.upValue();
    },
    inputSelect() {
      this.values.label = this.values.label.replace(/\\|\/|\(|\)/, '');
      if (this.values.label) {
        this.valueIndex = 0;
      }
      this.handlerSelectItem(true);
      this.filterAreaNumber(this.values.label);
    },
    keyFunc(i) {
      const inputSelect = this.$el.querySelectorAll('[data-value]');
      inputSelect.forEach((item) => { item.classList.remove('heightline'); });

      this.valueIndex += i;
      if (this.valueIndex < 0 ) {
        this.valueIndex = inputSelect.length - 1;
      } else if (this.valueIndex > inputSelect.length - 1) {
        this.valueIndex = 0;
      }

      inputSelect[this.valueIndex].classList.add('heightline');

      this.handlerScroll(this.valueIndex, i, inputSelect.length);
    },
    handlerScroll(valueIndex, i, length) {
      const wrapSelect = this.$refs.wrapSelect;
      const inputSelect = this.$el.querySelector('.heightline');
      const { offsetTop, offsetHeight } = inputSelect;
      const keyup = i < 0;
      const keydown = i > 0;
      if (keydown) {
        const scroll = (offsetTop + offsetHeight) - wrapSelect.offsetHeight;
        const max = (offsetTop + offsetHeight) - wrapSelect.scrollTop;
        if (scroll > 0 &&  max > wrapSelect.offsetHeight ) {
          wrapSelect.scrollTop = scroll;
        }
      } else if (keyup) {
        const scroll = offsetTop - wrapSelect.scrollTop;
        if (scroll < 0) {
          wrapSelect.scrollTop += scroll;
        }
      }
      if (valueIndex === 0) {
        wrapSelect.scrollTop = 0;
      } else if (valueIndex === length - 1) {
        wrapSelect.scrollTop = offsetTop;
      }
    },
    handlerSelectItem(isOpen) {
      const boxSelect = this.$refs.boxSelect;
      if (isOpen) {
        boxSelect.classList.add('open');
      } else {
        setTimeout(() => {
          boxSelect.classList.remove('open');
        }, 1000 * 0.125);
      }
    },
    upValue() {
      this.$emit('select', this.values, this.buildKey);
    }
  }
}
</script>

<style scoped lang="less">
@import '~@/styles/config/index';

.select{
  position: relative;
}
.input-select {
  width: 100%;
  height: 40px;
  line-height: 40px;
  color: @color-input-select-item;
  padding: 0 30px 0 16px;
  border-radius: 4px;
  border: 1px solid @color-input-select-border;
  outline: 0;
  appearance: none;
  transition: 0.4s;
}
.input-select:focus {
  border: 1px solid @color-primary;
  & ~ .icon-select .el-icon-arrow-down{
    transform: rotate(-180deg);
  }
}
.input-select:hover {
  border: 1px solid @color-input-select-boder-hover;
}
.icon-select {
  position: absolute;
  right: 10px;
  top: 50%;
  font-size: 14px;
  transform: translateY(-50%);
  margin: auto;
  color: @color-input-select-icon;
  cursor: pointer;
}
.el-icon-arrow-down {
  transition: 0.4s;
}
.box-select {
  width: 100%;
  position: absolute;
  top: 60px;
  left: 0;
  transform:scaleY(0);
  transform-origin: center top;
  visibility: hidden;
  transition: all 0.125s, height 0.4s;
  background-color: #ffffff;
}
.box-select:after {
  content: '';
  position: absolute;
  left: 30px;
  bottom: 100%;
  border-top: 6px solid transparent;
  border-left: 6px solid transparent; 
  border-right: 6px solid transparent; 
  border-bottom: 6px solid #fff; 
}
.wrap-select {
  height: 250px;
  padding-top: 4px;
  padding-bottom: 4px;
  color: @color-input-select-item;
  font-size: 14px;
  box-shadow: 0 0 10px rgba(black, 0.1);
  overflow: auto;
  border-radius: 2px;
}

.item-title {
  padding: 10px 20px;
}
.item-title-content {
  padding-top: 10px;
  border-top: 1px solid @color-input-select-item-border;
  opacity: 0.7;
}
.item-list-select {
  padding: 10px 20px;
  cursor: pointer;
}
.item-list-select:hover {
  background-color: @color-assist-grey;
}

.box-select.open {
  transform:scaleY(1);
  visibility: visible;
  z-index: 2;
}

.heightline {
  background-color: @color-assist-grey;
}
.active-index{
  color: @color-primary;
  font-weight: 700;
}
</style>