let finalscore
let score=0
let end=true
const cloud=document.querySelector('.cload')
const cloud2=document.querySelector('.cloud2')
const ob=document.querySelector('.ob')
const btn=document.querySelector('.start')
const sco=document.querySelector('#score')
const chara=document.querySelector('.chara')
const mount=document.querySelector('.mount')
const con=document.querySelector('.container')
const cov=document.querySelector('.cover')
const mask=document.querySelector('.mask')
const enter=document.querySelector('.enter')
const animate=document.querySelector('.animate')
const gameover=document.querySelector('.gam')
const reload=document.querySelector('.reload')
let s=0
document.addEventListener('keydown',()=>{
    chara.classList.add('charaanime')
    ob.classList.add('obanime')
    mount.classList.add('mountanime')
    cloud.classList.add('cloadanime')
    cloud2.classList.add('cloudanime')
function jump(){
    if(chara.classList!='animate')
    {
    chara.classList.add('animate')
    setTimeout(()=>{
        chara.classList.remove('animate')
    },500)

}
}
const check=setInterval(()=>{
    const charb=parseInt(window.getComputedStyle(chara).getPropertyValue('bottom'))
    const obl=parseInt(window.getComputedStyle(ob).getPropertyValue('left'))
    if(obl<90&&obl>0&&charb<=5)
    {
        chara.style.backgroundImage="url('images/ostp.png')"
        ob.style.display='none'
        mount.style.animation='none'
        cloud.style.animation='none'
        cloud2.style.animation='none'
        gameover.classList.add('reload')
        end=false
        finalscore=s
        gameover.addEventListener('click',()=>{
            location.reload()
        })
    }
    else{
       s=parseInt(score++/5)

    }
    if(end===true)
    {
    sco.textContent=`Score : ${s}`
    }
    else
    {
        sco.textContent=`Score : ${finalscore}`
    }
   
    if(s>=800)
    {
        ob.style.animation='ob 1.8s infinite linear'
        animate.style.animation='jump 800ms'
        console.log(s)
        
    }
    if(s>=1000 && s<=2000){
        con.style.backgroundColor='rgb(46, 46, 46)'
    }
    
},10)


document.addEventListener('keydown',(e)=>{jump()})

})

