<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Princess Server</title>

    <link href="https://fonts.googleapis.com/css2?family=Sarabun:wght@300;400;600&display=swap" rel="stylesheet">

    <style>
        body{
            margin:0;
            height:100vh;
            display:flex;
            justify-content:center;
            align-items:center;
            font-family:'Sarabun',sans-serif;
            background:linear-gradient(135deg,#ffd6eb,#ffc1e3,#ff9fd2);
            overflow:hidden;
        }

        .orb{
            position:absolute;
            border-radius:50%;
            background:rgba(255,255,255,.5);
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

        @keyframes float{
            0%,100%{
                transform:translateY(0);
            }
            50%{
                transform:translateY(-20px);
            }
        }

        .card{
            width:420px;
            background:rgba(255,255,255,.9);
            border-radius:25px;
            padding:35px;
            text-align:center;
            box-shadow:0 10px 30px rgba(0,0,0,.2);
        }

        h1{
            color:#ff1493;
        }

        .info{
            background:#fff0f7;
            border-radius:15px;
            padding:15px;
            margin:20px 0;
            text-align:left;
        }

        .info p{
            margin:10px 0;
            font-size:18px;
        }

        button{
            padding:12px 30px;
            border:none;
            border-radius:30px;
            background:#ff4fa3;
            color:#fff;
            cursor:pointer;
            transition:.3s;
            font-size:16px;
        }

        button:hover{
            transform:scale(1.05);
            background:#ff1493;
        }
    </style>
</head>

<body>

<div class="orb"></div>
<div class="orb"></div>
<div class="orb"></div>

<div class="card">

    <h1>👑 Princess Pink Server 👑</h1>

    <div class="info">
        <p>🎓 รหัสนักศึกษา : 69319010047</p>
        <p>📚 ชั้น : HIT1/1(VB)</p>
        <p>💻 สาขา : เทคโนโลยีสารสนเทศ</p>
    </div>

    <button>✨ Welcome ✨</button>

</div>

<script>
document.querySelector("button").onclick = () => {
    alert("✨ Welcome to Princess World 👑");
};
</script>

</body>
</html>
