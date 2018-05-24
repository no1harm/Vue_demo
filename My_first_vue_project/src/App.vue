<template>
  <div id="app">
    <h1 v-text="title"></h1>
    <input type="text" v-model="newItem" v-on:keyup.enter="addNew">
    <ul>
      <li v-for="item in items" v-bind:class="{finished:item.isFinished}">
        <input type="checkbox" class="toggle" v-bind:class="{isDone:item.isChecked}" v-on:click="toggleFinish(item)"/>
        {{item.label}}
        <button v-on:click="deleteItem(item)">删除</button>
      </li>
    </ul>
    <p> Child tell me this : {{childWord}}</p>
    <!-- 使用组件componentA -->
    <componentA msgtext="Here Done" v-on:child-tell-me="listenToMyBoy"></componentA>   
  </div>
</template>

<script>
import Store from './store' //把store.js当成模块/库/引进当前vue文件
import ComponentA from './components/componentA'  //把组件componentA引入当前文件
export default {
  data:function(){  
    return {
      title : "This is a todo list!",
      items : Store.fetch(),  //通过fetch()获取信息
      newItem:'',  //新输入信息
      childWord:'',
    }
  },
  components:{  //声明组件
    ComponentA, 
  },
  watch:{ //观察items的变化
    items:{
      handler:function(items){
        Store.save(items); //存储items到数据库
      },
      deep:true,  //深度观察
    }
  },
  methods:{
    toggleFinish:function(item){ //点击事件打勾CheckBox，添加删除线
        item.isFinished = !item.isFinished;
        item.isChecked = !item.isChecked;
    },
    addNew:function(){  //增加新选项
      this.items.push({
        label:this.newItem,
        isFinished:false,
        isChecked:false,
      })
    },
    deleteItem:function(item){  //删除选项（获取选项下标然后根据下标删除）
      var index = this.items.indexOf(item);
      this.items.splice(index,1);
    },
    listenToMyBoy:function(msg){
        this.childWord =msg;
    },
  }
}
</script>

<style>
.finished {
  text-decoration: line-through ;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#app ul{
   list-style: none;
}
#app li {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 600;
  font-size: 1.5em;
}
#app span {
  font-size: 0.6em;
}
</style>
