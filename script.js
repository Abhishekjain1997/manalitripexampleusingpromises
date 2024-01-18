function buycar (){
    return new Promise((res,rej) =>{
    setTimeout(() => {
        res('buy a car')
    },5000)
 } )
}
function plaintrip(){
    return new Promise((res,rej)=>{

        setTimeout(() =>{
            res('lets go to manali')
        },2000)
    })
}
function reachmanali(){
    return new Promise((res,rej) =>{
        setTimeout(()=>{
            res('reach manali')
        },1000)
    })
}
function gotofamousmountain(){
    return new Promise((res,rej)=>{
        setTimeout(() =>{
            res('reached mountain')
        },1000)
    })
}
buycar().then((msg)  =>{
    console.log(msg)
    plaintrip().then((msg2) =>{
        console.log(msg2)
        reachmanali().then((msg3)=>{
            console.log(msg3)
            gotofamousmountain().then((msg4)=>{
                console.log(msg4)
            })


        })
    
        })
    })
