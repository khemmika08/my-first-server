// 1. เรียกใช้งาน Module ที่ชื่อว่า 'http' ซึ่งเป็นระบบพื้นฐานของ Node.js สําหรับทําเซิร์ฟเวอร์
const http = require('http');

// 2. กําหนดช่องทาง (Port) ที่เซิร์ฟเวอร์จะใช้สื่อสาร โดยให้ใช้ของที่ Cloud กําหนดมา (process.env.PORT) ถ้าไม่มีให้ใช้ 3000
const port = process.env.PORT || 3000;

// 3. สร้างเครื่องแม่ข่าย (Server) ที่คอยรับคําขอ (req) และตอบกลับ (res)
const server = http.createServer((req, res) => {

    // 3.1 ตั้งรหัสสถานะ 200 หมายถึง "ทํางานสําเร็จ (OK)"
    res.statusCode = 200;

    // 3.2 บอกเบราว์เซอร์ของผู้ใช้ว่า สิ่งที่ส่งกลับไปคือไฟล์ข้อความแบบ HTML และรองรับภาษาไทย (utf-8)
    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    // 3.3 ส่งข้อมูลหน้าเว็บที่ตกแต่งด้วย CSS โทนสีชมพูพาสเทลกลับไปหาผู้ใช้
    res.end(`
        <!DOCTYPE html>
        <html lang="th">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Web Server ของ เขมมิกา</title>
            <style>
                * {
                    box-sizing: border-box;
                    margin: 0;
                    padding: 0;
                }
                body {
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif, 'Helvetica Neue', Arial, sans-serif;
                    background-color: #fff0f3;
                    color: #4a4a4a;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                }
                .container {
                    background-color: #ffffff;
                    padding: 2.5rem;
                    border-radius: 20px;
                    box-shadow: 0 10px 25px rgba(255, 182, 193, 0.4);
                    text-align: center;
                    max-width: 450px;
                    width: 90%;
                    border: 2px solid #ffccd5;
                }
                h1 {
                    color: #ff758f;
                    font-size: 1.8rem;
                    margin-bottom: 1rem;
                }
                .status-badge {
                    display: inline-block;
                    background-color: #ffb3c1;
                    color: #fff;
                    padding: 0.4rem 1rem;
                    border-radius: 50px;
                    font-size: 0.9rem;
                    font-weight: bold;
                    margin-top: 1.5rem;
                    animation: pulse 2s infinite;
                }
                @keyframes pulse {
                    0% { transform: scale(1); }
                    50% { transform: scale(1.05); }
                    100% { transform: scale(1); }
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>สวัสดีค่ะ!</h1>
                <h2>นี่คือ Web Server ของ</h2>
                <p style="font-weight: bold; margin: 0.5rem 0; color: #c9184a;">
                    นางสาวเขมมิกา กลิ้งรัมย์<br>
                    <span style="font-size: 0.9rem; color: #ff85a1;">รหัสนักศึกษา: 69319010091</span>
                </p>
                <span class="status-badge">💖 Railway Server Online</span>
            </div>
        </body>
        </html>
    `);
});

// 4. สั่งให้เซิร์ฟเวอร์เริ่มต้นเปิดรับฟังการเชื่อมต่อตาม Port ที่กําหนดไว้
server.listen(port, () => {
    console.log(`Server is running! เครื่องแม่ข่ายเปิดทํางานแล้วที่ช่องทาง: ${port}`);
});
