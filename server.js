.orb{
    position:absolute;
    border-radius:50%;
    animation:float 5s infinite ease-in-out;
}

.orb:nth-child(1){
    width:60px;
    height:60px;
    top:10%;
    left:5%;
}

.orb:nth-child(2){
    width:40px;
    height:40px;
    bottom:15%;
    right:10%;
}

.orb:nth-child(3){
    width:50px;
    height:50px;
    top:25%;
    right:5%;
}
<div class="info">
<p>🎓 รหัสนักศึกษา : 69319010047</p>
<p>📚 ชั้น : HIT1/1(VB)</p>
<p>💻 สาขา : เทคโนโลยีสารสนเทศ</p>
</div>
button{
    padding:12px 30px;
    border:none;
    border-radius:30px;
    background:#ff4fa3;
    color:#fff;
    cursor:pointer;
    transition:.3s;
}

button:hover{
    transform:scale(1.05);
}
document.querySelector("button").onclick=()=>{
    alert("✨ Welcome to Princess World 👑");
}
body{
    margin:0;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    font-family:Sarabun,sans-serif;
    background:linear-gradient(135deg,#ffd6eb,#ffc1e3,#ff9fd2);
}
