<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Princess World</title>
    <!-- นำเข้าฟอนต์ Sarabun จาก Google Fonts -->
    <link rel="preconnect" href="https://googleapis.com">
    <link rel="preconnect" href="https://gstatic.com" crossorigin>
    <link href="https://googleapis.com/css2?family=Sarabun:wght@300;400;700&display=swap" rel="stylesheet">
    
    <style>
    body {
    margin: 0;
    height: 100vh;
    display: flex;
    flex-direction: column; /* จัดให้เนื้อหาและปุ่มเรียงลงมาแนวตั้ง */
    justify-content: center;
    align-items: center;
    font-family: 'Sarabun', sans-serif;
    background: linear-gradient(135deg, #ffd6eb, #ffc1e3, #ff9fd2);
    overflow: hidden; /* ป้องกันแถบสกรอลล์ขึ้นตอนลูกแก้วขยับ */
    gap: 20px; /* เพิ่มระยะห่างระหว่างกล่องข้อมูลกับปุ่ม */
        }

        /* ตกแต่งกล่องข้อความให้ดูสวยงามขึ้น */
        .info {
            background: rgba(255, 255, 255, 0.6);
            padding: 20px 40px;
            border-radius: 20px;
            box-shadow: 0 8px 32px rgba(255, 79, 163, 0.1);
            backdrop-filter: blur(5px);
            z-index: 10;
        }

        .info p {
            margin: 10px 0;
            font-size: 1.1rem;
            color: #4a4a4a;
        }

        /* ปุ่มกด */
        button {
            padding: 12px 30px;
            border: none;
            border-radius: 30px;
            background: #ff4fa3;
            color: #fff;
            cursor: pointer;
            transition: .3s;
            font-family: 'Sarabun', sans-serif;
            font-size: 1rem;
            box-shadow: 0 4px 15px rgba(255, 79, 163, 0.4);
            z-index: 10;
        }

        button:hover {
            transform: scale(1.05);
            background: #ff2a8d;
        }

        /* ลูกแก้วตกแต่ง (Orbs) */
        .orb {
            position: absolute;
            border-radius: 50%;
            animation: float 5s infinite ease-in-out;
            background: rgba(255, 255, 255, 0.4); /* เพิ่มสีขาวโปร่งแสงให้มองเห็นลูกแก้ว */
            box-shadow: inset -5px -5px 15px rgba(255, 79, 163, 0.2), 
                        5px 5px 15px rgba(255, 255, 255, 0.5);
        }

        .orb:nth-child(1) {
            width: 60px;
            height: 60px;
            top: 10%;
            left: 5%;
            animation-delay: 0s;
        }

        .orb:nth-child(2) {
            width: 40px;
            height: 40px;
            bottom: 15%;
            right: 10%;
            animation-delay: 1s; /* ใส่ delay ให้ลอยไม่พร้อมกันเพื่อความสวยงาม */
        }

        .orb:nth-child(3) {
            width: 50px;
            height: 50px;
            top: 25%;
            right: 5%;
            animation-delay: 2s;
        }

        /* เพิ่ม Keyframes สำหรับอนิเมชันลอยไปมา (Float) ที่ยังขาดไป */
        @keyframes float {
            0%, 100% {
                transform: translateY(0px);
            }
            50% {
                transform: translateY(-20px);
            }
        }
    </style>
</head>
<body>

    <!-- ลูกแก้วตกแต่งพื้นหลัง -->
    <divclass="orb"></div>
    <divclass="orb"></div>
    <divclass="orb"></div>

    <!-- กล่องข้อมูลนักศึกษา -->
    <divclass="info">
        <p>🎓 รหัสนักศึกษา : 69319010091</p>
        <p>📚 ชั้น : HIT1/1(VB)</p>
        <p>💻 สาขา : เทคโนโลยีสารสนเทศ</p>
        <p>ชื่อขนามสกุล : khemmika Klingram</p>
    </div>

    <!-- ปุ่ม Welcome -->
    <button>เข้าสู่ Princess World</button>

        <!-- JavaScript สำหรับระบบแจ้งเตือน -->
<script>
document.querySelector("button").onclick = () => {
            alert("✨ Welcome to Princess World 👑");
        }
    </script>

</body>
</html>
