
//Vue简易入门

var app = new Vue({
    el : "#app",
    data : {
        title : "Node.js",
    }
})

var app2 = new Vue({
    el : "#app2",
    data : {
        title : "页面加载于" + new Date().toLocaleString(),
    }
})

var app3 = new Vue({
    el :"#app3",
    data : {
        seen : true,
    }
})

var app4 = new Vue({
    el:"#app4",
    data:{
        todos:[
            {text:'JavaScript'},
            {text:'vue.js'},
            {text:'node.js'},
        ]
    }
})

var app5 = new Vue({
    el:"#app5",
    data:{
        massage:"JavaScript",
    },
    methods:{
        reverseMessage:function(){
            this.massage = this.massage.split('').reverse().join('');
        }
    }
})

var app6 = new Vue({
    el:"#app6",
    data:{
        message:"hello world!", 
    }
})

Vue.component('todo-item',{
    props:['todo'],
    template:'<li>{{ todo.text }}</li>',
})
var app7 = new Vue({
    el:"#app7",
    data:{
        groceryList:[
            {id:0,text:"蔬菜"},
            {id:1,text:"水果"},
            {id:2,text:"甜品"},
        ]
    }
})