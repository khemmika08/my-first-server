/* 1. พื้นหลังพาสเทล (Pink Gradient Background) */
body {
    background: linear-gradient(135deg, #ffe5ec 0%, #ffb3c6 100%);
    margin: 0;
    height: 100vh;
    
    /* 4. จัดกึ่งกลางหน้าจออย่างสมบูรณ์แบบ (Flexbox Center) */
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif, 'Kanit';
}

/* 3. การ์ดโปร่งแสง (Glassmorphism & Pink Border) */
.card {
    background-color: rgba(255, 255, 255, 0.85); /* ขาวนวลกึ่งโปร่งใส */
    backdrop-filter: blur(10px);                  /* เอฟเฟกต์เบลอหลังการ์ด */
    border: 3px solid #ff85a2;                    /* กรอบสีชมพูเข้ม */
    border-radius: 30px;                          /* ขอบมนน่ารัก */
    padding: 40px;
    box-shadow: 0 10px 30px rgba(255, 75, 130, 0.2);
    text-align: center;
    max-width: 500px;
    width: 90%;                                   /* รองรับการแสดงผลบนมือถือ */
}

/* 2. มงกุฎลอยได้ (CSS Animation ดุ๊กดิ๊กขึ้นลง) */
.tiara {
    font-size: 4rem;
    margin-bottom: 10px;
    animation: float 3s ease-in-out infinite;     /* สั่งให้เล่นแอนิเมชันวนลูป */
}

/* กำหนดการเคลื่อนที่ของแอนิเมชันลอยขึ้นลง */
@keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-12px); }         /* ลอยขึ้น 12 พิกเซล */
    100% { transform: translateY(0px); }
}
<div class="card">
    <div class="tiara">👑✨</div>
    <h1>สวัสดีค่ะ! นี่คือ Web Server ของ<br>[นางสาวเขมมิกา กลิ้งรัมย์ HIT.1/1VB]</h1>
    <p>เครื่องแม่ข่ายทำงานปกติบนระบบ Railway แล้วค่ะ! 🌸</p>
</div>
