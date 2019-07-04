<template>
  <div class='wapper'>
    <div class='content'>
      <el-input v-model="input1" placeholder="第一个input" size="small"></el-input>
      <el-button type="primary" size="small" @click='getInput'>提交第一个input</el-button>
    </div>
    <div class='content'>
      <el-input v-model="input2" placeholder="第二个input" size="small"></el-input>
      <el-input v-model="input3" placeholder="第三个input" size="small"></el-input>
      <el-button type="primary" size="small" @click='getTwoInput'>提交第二、三个input</el-button>
    </div>
  </div>
</template>

<script>
import {mapMutations, mapActions} from 'vuex'
import * as types from '../store/mutation-type'
export default{
  data () {
    return {
      input1: '',
      input2: '',
      input3: ''
    }
  },
  methods: {
    getInput () {
      this.setInput(this.input1)
//      this.$store.commit('SUBMITINPUT',this.input1) //繁琐的写法
    },
    getTwoInput () {
      this.setInputValue({
        oneValue: this.input2,
        twoValue: this.input3
      })
//      this.$store.dispatch('setInputValue',{oneValue: this.input2, twoValue: this.input3})
    },
    ...mapMutations({
      setInput: types.SUBMITINPUT
    }),
    ...mapActions([
      'setInputValue'
    ])
  }
}
</script>

<style scoped>
  .content {
    display: flex;
    margin-top: 20px;
    flex-direction: row;
    justify-content: flex-start;
  }

  .el-input {
    width: 200px;
  }
</style>
