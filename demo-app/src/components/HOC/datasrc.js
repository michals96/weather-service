const blogs = ["blogs1", "blogs2"]

export const dataSrc = { 
    addChangeListener : function(){

    },
    removeChangeListener : function(){

    },
    getComments : function(){
        return [{text:"hello", id:1}, {text:"world", id:2}];
} , getBlogPost : function(id){
    return blogs[id];
}}