const http = require('http');
// 1. เรียกใชงาน Pool จากไลบรารี pg สําหรับจัดการการเชื่อมตอฐานขอมูล
const { Pool } = require('pg');
// 2. ตั้งคาการเชื่อมตอ โดยดึง URL มาจาก Environment Variable ของ Railway
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});
const port = process.env.PORT || 3000;
const server = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');

  try {
    // 3. ขอเชื่อมตอและสงคําสั่ง SQL ไปดึงขอมูลจากตาราง students
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM students');
    client.release(); // ปิดการเชื่อมต่อเมื่อใช้งานเสร็จ

    // 4. นําขอมูลที่ได(result.rows) มาประกอบเปนตาราง HTML พร้อมสไตล์น่ารักโทนชมพู
    let html = `<!doctype html>
<html lang="th">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>ฐานข้อมูลนักศึกษา</title>
  <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap" rel="stylesheet">
  <style>
    :root{
      --pink-1: #fff0f6;
      --pink-2: #ffccd9;
      --pink-3: #ff80b5;
      --accent: #ff4da6;
      --text: #4a2030;
    }
    html,body{height:100%;margin:0;padding:0;}
    body{
      font-family: 'Nunito', system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
      background: linear-gradient(135deg, #fff7fb 0%, #ffeef8 100%);
      color: var(--text);
      display:flex;
      align-items:flex-start;
      justify-content:center;
      padding:40px 16px;
    }
    .container{width:100%;max-width:980px;}
    .card{
      background: linear-gradient(180deg,#ffffff,#fff6fb);
      border-radius:16px;
      padding:22px;
      box-shadow: 0 12px 30px rgba(255,102,170,0.12);
      border:1px solid rgba(255,153,204,0.18);
    }
    .header{display:flex;align-items:center;gap:14px;margin-bottom:8px;}
    .logo{
      width:64px;height:64px;border-radius:50%;
      background: linear-gradient(180deg,var(--pink-3),var(--pink-2));
      color:white;display:flex;align-items:center;justify-content:center;
      font-weight:700;font-size:28px;box-shadow:0 6px 16px rgba(255,77,166,0.12);
    }
    h1{margin:0;font-size:1.5rem;color:#3a1428;}
    .subtitle{margin:4px 0 0;color:#7a3b4f;font-size:0.95rem;}
    .table-wrap{overflow:auto;margin-top:14px;}
    table{width:100%;border-collapse:separate;border-spacing:0 10px;}
    thead th{padding:12px 18px;text-align:left;color:#6b2840;font-weight:800;}
    tbody td{
      padding:12px 16px;background:#fff;border-radius:10px;border:1px solid rgba(255,153,204,0.12);
      vertical-align:middle;
    }
    tbody tr td:first-child{font-weight:700;color:#8a3150;width:180px;}
    tbody tr:nth-child(even) td{background: linear-gradient(90deg,#fff,#fff6fb);}
    .footer{margin-top:16px;text-align:right;color:#9b546b;font-size:0.9rem;}
    .small{font-size:0.95rem;color:#7a3b4f}
    @media (max-width:520px){
      .logo{width:52px;height:52px;font-size:22px;}
      thead th, tbody td{padding:10px;}
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="card">
      <div class="header">
        <div class="logo">นค</div>
        <div>
          <h1>ฐานข้อมูลนักศึกษา <span style="color:var(--accent)">❤</span></h1>
          <div class="subtitle small">ทดสอบการเชื่อมต่อฐานข้อมูล — สไตล์น่ารักสีชมพู</div>
        </div>
      </div>

      <div class="table-wrap">
        <table>
          <thead>
            <tr><th>รหัสนักศึกษา</th><th>ชื่อ-นามสกุล</th></tr>
          </thead>
          <tbody>`;

    // เพิ่มแถวข้อมูลจาก result.rows แบบสลับสี
    result.rows.forEach((row, i) => {
      const safeId = row.student_id ?? '';
      const safeName = row.student_name ?? '';
      html += `<tr class="${i % 2 === 0 ? 'row-even' : 'row-odd'}"><td>${safeId}</td><td>${safeName}</td></tr>`;
    });

    html += `</tbody>
        </table>
      </div>

      <div class="footer">แสดงผลทั้งหมด ${result.rows.length} รายการ • ส่งจากเซิร์ฟเวอร์ของคุณ</div>
    </div>
  </div>
</body>
</html>`;

    res.end(html);
  } catch (err) {
    // กรณีเชื่อมต่อไม่ได้หรือเขียนชื่อตารางผิด
    console.error(err);
    res.end(`<h1>เกิดข้อผิดพลาด!</h1><p>${err.message}</p>`);
  }
});
server.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
