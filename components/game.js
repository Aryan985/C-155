AFRAME.registerComponent("collision",{
    schema:{
        id:{type:"string",default:"#ring1"}
    },
    update:function(){
        this.collided(this.data.id)
    },
    collided:function(id){
        var element=document.querySelector(id)
        element.addEventListener("collide",e=>{
        console.log("plane is touching"+id)    
        })
    }
})