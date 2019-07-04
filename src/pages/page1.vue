<template>
  <div class='wapper'>
    <div> 第一个input :{{ this.firstInputValue}}</div>
    <div style='margin-top: 20px;'>第二个input:{{this.secondInputValue}} ------- 第三个input:{{this.thirdInputValue}}</div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default{
    data () {
      return {}
    },
    computed: {
      ...mapGetters([
        'firstInputValue',
        'secondInputValue',
        'thirdInputValue'
      ])
    },
    mounted(){
      console.log(this.firstInputValue);
      console.log(this.secondInputValue);
      console.log(this.thirdInputValue);
    }
  }
</script>

<style scoped>

</style>
