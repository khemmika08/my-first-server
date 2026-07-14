// 1. เรียกใช้งาน Module 'http'
const http = require('http');

// 2. กำหนด Port
const port = process.env.PORT || 3000;

// 3. สร้าง Web Server
const server = http.createServer((req, res) => {

    // กำหนดสถานะการตอบกลับ
    res.statusCode = 200;

    // กำหนดประเภทข้อมูล
    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    // ส่งหน้าเว็บ
    res.end(`
<!DOCTYPE html>
<html lang="th">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>My Railway Web Server</title>

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
    background:linear-gradient(135deg,#000000,#1a1a1a,#ff1493);
}

.card{
    background:rgba(0,0,0,0.75);
    border:2px solid #ff69b4;
    border-radius:25px;
    padding:50px;
    width:700px;
    text-align:center;
    color:white;
    box-shadow:0 0 30px #ff1493;
}

.avatar{
    width:120px;
    height:120px;
    border-radius:50%;
    background:#ff1493;
    margin:auto;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:55px;
    box-shadow:0 0 20px #ff69b4;
}

h1{
    color:#ff69b4;
    margin-top:25px;
    margin-bottom:20px;
    font-size:32px;
}

p{
    font-size:20px;
    color:#eeeeee;
    margin:10px 0;
}

.info{
    margin-top:30px;
    background:#111;
    padding:18px;
    border-radius:15px;
    border:1px solid #ff69b4;
}

.footer{
    margin-top:30px;
    color:#ff69b4;
    font-size:15px;
}
</style>

</head>

<body>

<div class="card">

<div class="avatar">
💻
</div>

<h1>Web Server</h1>

<p><strong>ชื่อ :</strong> นางสาวเขมมิกา กลิ้งรัมย์</p>

<p><strong>รหัสนักศึกษา :</strong> 69319010091</p>

<div class="info">
<h2 style="color:#ff69b4;">🚀 Railway Server</h2>
<p>เครื่องแม่ข่ายทำงานปกติแล้วค่ะ</p>
<p>Node.js HTTP Server</p>
</div>

<div class="footer">
❤ Black & Pink Theme ❤
</div>

</div>

</body>
</html>
`);
});

// 4. เริ่มต้น Server
server.listen(port, () => {
    console.log(`Server is running! เครื่องแม่ข่ายเปิดทำงานแล้วที่ช่องทาง: ${port}`);
});
