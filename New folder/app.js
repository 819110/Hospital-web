let sildes=document.querySelectorAll('.patientRevies');
let card=document.querySelectorAll('.card');
let btn=document.getElementById('closeBtn');
let connect=document.getElementById('connectbtn');
var count=0;

sildes .forEach(function(silde,index){
silde.style.left=`${index*100}% `
})

function myfun(){
    sildes.forEach(function(curVal){
     curVal.style.transform=`translateX(-${count*100}%)`
    })
}
setInterval(function(){
    count++;
    if(count==sildes.length){
        count=0;
    }
myfun()
},3000)

card.forEach(function(cards){
    cards.addEventListener('click',function(){
        console.log(cards);
        document.querySelector('.detail').style.display='block'
        document.querySelector('.content').innerHTML=`
        <img src="${cards.firstElementChild.src}">
                <div class="contentText">
                 <h1>Name</h1>
                 <p> MBBS(Bachelor of Medicine,Bachelor of Surgery)
                        Fellowship in joint Replacement Surgery
                        <br>
                        10+ years of experience in orthopedic surgery</p>
                </div>`

    btn.addEventListener('click',function(){
        document.querySelector('.detail').style.display='none'
    })
    })
})

connect.addEventListener('click',function(){
    let email=document.getElementById('email')
    let pass=document.getElementById('pass')

    if(email.value == "" && pass.value == ""){
        alert("Enter Details")
    }else{
        alert("you Logged IN")
     }

    })