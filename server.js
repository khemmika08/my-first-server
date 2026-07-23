// 1. เรียกใช้งาน Module ที่ชื่อว่า 'http' ซึ่งเป็นระบบพื้นฐานของ Node.js สำหรับทำเซิร์ฟเวอร์
const http = require('http');

// 2. กำหนดช่องทาง (Port) ที่เซิร์ฟเวอร์จะใช้สื่อสาร (แก้ไข: เติมเครื่องหมาย = ที่ขาดหายไป)
const port = process.env.PORT || 3000;

// 3. สร้างเครื่องแม่ข่าย (Server) ที่คอยรับคำขอ (req) และตอบกลับ (res) (แก้ไข: เปลี่ยน [ เป็น { )
const server = http.createServer((req, res) => {

    // 3.1 ตั้งรหัสสถานะ 200 หมายถึง "ทำงานสำเร็จ (OK)"
    res.statusCode = 200;

    // 3.2 บอกเบราว์เซอร์ของผู้ใช้ว่า สิ่งที่ส่งกลับไปคือไฟล์ข้อความแบบ HTML และรองรับภาษาไทย (utf-8)
    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    // 3.3 ส่งข้อมูลหน้าเว็บกลับไปหาผู้ใช้ (ตกแต่งเป็นธีมเจ้าหญิงสีชมพูสุดน่ารัก)
    res.end(`
        <!DOCTYPE html>
        <html lang="th">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Princess Server 🌸</title>
            <style>
                body {
                    background: linear-gradient(135deg, #ffe5ec 0%, #ffb3c6 100%);
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif, 'Kanit';
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                    color: #4a4a4a;
                }
                .card {
                    background-color: rgba(255, 255, 255, 0.85);
                    padding: 40px;
                    border-radius: 30px;
                    box-shadow: 0 10px 30px rgba(255, 75, 130, 0.2);
                    text-align: center;
                    border: 3px solid #ff85a2;
                    max-width: 500px;
                    backdrop-filter: blur(10px);
                }
                h1 {
                    color: #ff477e;
                    font-size: 2.2rem;
                    margin-bottom: 20px;
                    text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
                }
                p {
                    font-size: 1.2rem;
                    color: #ff7096;
                    line-height: 1.6;
                }
                .tiara {
                    font-size: 4rem;
                    margin-bottom: 10px;
                    animation: float 3s ease-in-out infinite;
                }
                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                    100% { transform: translateY(0px); }
                }
            </style>
        </head>
        <body>
            <div class="card">
                <div class="tiara">👑✨</div>
                <h1>สวัสดีค่ะ! นี่คือ Web Server ของ<br>[นางสาวเขมมิกา กลิ้งรัมย์ รหัสนักศึกษา 69319010091]</h1>
                <p>เครื่องแม่ข่ายทำงานปกติบนระบบ Railway แล้วค่ะ! 🌸</p>
            </div>
        </body>
        </html>
    `);
});

// 4. สั่งให้เซิร์ฟเวอร์เริ่มต้นเปิดรับฟังการเชื่อมต่อตาม Port ที่กำหนดไว้ (แก้ไข: เปลี่ยนเป็นเครื่องหมาย backtick และปิด String ให้ถูกต้อง)
server.listen(port, () => {
    console.log(`Server is running! เครื่องแม่ข่ายเปิดทำงานแล้วที่ช่องทาง: ${port}`);
});
