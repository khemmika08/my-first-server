<!DOCTYPE html>
<html lang="th">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Princess Team Server</title>

<style>
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Segoe UI',Tahoma,sans-serif;
}

body{
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    overflow:hidden;
    background:linear-gradient(135deg,#ff9ad5,#ff69b4,#b266ff,#6a0dad);
    animation:bgMove 10s infinite alternate;
}

@keyframes bgMove{
    0%{background-position:left;}
    100%{background-position:right;}
}

.card{
    width:760px;
    background:rgba(255,255,255,.15);
    backdrop-filter:blur(15px);
    border-radius:30px;
    padding:45px;
    text-align:center;
    color:white;
    border:3px solid rgba(255,255,255,.5);
    box-shadow:0 0 40px rgba(255,105,180,.8);
}

.avatar{
    width:150px;
    height:150px;
    margin:auto;
    border-radius:50%;
    background:linear-gradient(135deg,#ff69b4,#ffd700);
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:75px;
    box-shadow:0 0 35px gold;
    animation:float 3s ease-in-out infinite;
}

@keyframes float{
    0%,100%{transform:translateY(0);}
    50%{transform:translateY(-12px);}
}

h1{
    margin-top:20px;
    font-size:40px;
    color:#fff;
    text-shadow:0 0 15px gold;
}

.subtitle{
    color:#fff7d6;
    margin-top:10px;
    font-size:22px;
}

.info{
    margin-top:30px;
    background:rgba(255,255,255,.12);
    border-radius:20px;
    padding:25px;
    border:2px solid pink;
}

.info p{
    margin:12px;
    font-size:21px;
}

.team{
    margin-top:25px;
    font-size:28px;
    color:#ffe066;
    font-weight:bold;
    text-shadow:0 0 15px gold;
}

.footer{
    margin-top:35px;
    color:#fff;
    font-size:18px;
}

.star{
    position:absolute;
    color:white;
    animation:twinkle 2s infinite;
}

@keyframes twinkle{
    0%,100%{
        opacity:.2;
        transform:scale(.8);
    }
    50%{
        opacity:1;
        transform:scale(1.4);
    }
}
</style>

</head>

<body>

<div class="star" style="top:8%;left:10%;font-size:25px;">✨</div>
<div class="star" style="top:18%;right:15%;font-size:30px;">⭐</div>
<div class="star" style="bottom:12%;left:15%;font-size:22px;">✨</div>
<div class="star" style="bottom:20%;right:10%;font-size:28px;">💖</div>
<div class="star" style="top:45%;left:5%;font-size:20px;">🌸</div>
<div class="star" style="top:60%;right:8%;font-size:20px;">✨</div>

<div class="card">

<div class="avatar">
👑
</div>

<h1>Princess Team Server</h1>

<p class="subtitle">
🌸 Welcome to Princess Team 🌸
</p>

<div class="info">

<p><strong>👸 ชื่อ :</strong> นางสาวเขมมิกา กลิ้งรัมย์</p>

<p><strong>🎓 รหัสนักศึกษา :</strong> 69319010091</p>

<p><strong>💻 ระบบ :</strong> Node.js HTTP Server</p>

<p><strong>🚂 Railway :</strong> Online พร้อมให้บริการ</p>

</div>

<div class="team">
👑 ทีมเจ้าหญิง 👑
<br>
💖 Princess Power • Dream • Shine • Success 💖
</div>

<div class="footer">
✨ Black • Pink • Purple • Gold Theme ✨
<br><br>
🌷 Made with ❤ by Princess Team 🌷
</div>

</div>

</body>
</html>
