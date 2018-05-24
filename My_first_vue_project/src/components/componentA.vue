<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <h1>{{ msgtext}}</h1>
        <button v-on:click="OnClickMe">Open mouse!</button>
    </div>
</template>

<script>
export default {
    data:function(){
        return {
            msg:"Goodmorning Sir.",
        }
    },
    props:['msgtext'],  //我的理解：相当于创造了一个在父组件和子组件之间可以互相指涉的参数
    methods:{
        OnClickMe:function(){
            // console.log(this.msgtext)
            this.$emit('child-tell-me',this.msg);   //触发当前实例上的事件。附加参数都会传给监听器回调。
        }
    },
}
</script>

<style scoped>
h1 {
    color: brown;
}
</style>


