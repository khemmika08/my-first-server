*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Segoe UI',Tahoma,sans-serif;
}

body{
    min-height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    overflow:hidden;
    background:linear-gradient(135deg,#ff9ad5,#ff69b4,#b266ff,#6a0dad);
    background-size:300% 300%;
    animation:bgMove 10s ease infinite;
}

@keyframes bgMove{
    0%{
        background-position:0% 50%;
    }
    50%{
        background-position:100% 50%;
    }
    100%{
        background-position:0% 50%;
    }
}

.card{
    width:760px;
    max-width:90%;
    background:rgba(255,255,255,.15);
    backdrop-filter:blur(15px);
    -webkit-backdrop-filter:blur(15px);
    border-radius:30px;
    padding:45px;
    text-align:center;
    color:white;
    border:3px solid rgba(255,255,255,.45);
    box-shadow:
        0 0 40px rgba(255,105,180,.8),
        0 0 80px rgba(255,105,180,.3);
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
    0%,100%{
        transform:translateY(0);
    }
    50%{
        transform:translateY(-12px);
    }
}

h1{
    margin-top:20px;
    font-size:40px;
    color:#ffffff;
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
    border:2px solid #ffb6e6;
}

.info p{
    margin:12px 0;
    font-size:21px;
    line-height:1.6;
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
    color:#ffffff;
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

@media(max-width:768px){

.card{
    width:95%;
    padding:30px 20px;
}

.avatar{
    width:120px;
    height:120px;
    font-size:60px;
}

h1{
    font-size:30px;
}

.subtitle{
    font-size:18px;
}

.info{
    padding:20px;
}

.info p{
    font-size:17px;
}

.team{
    font-size:22px;
}

.footer{
    font-size:15px;
}

}
