// app.js

const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

// CORS 미들웨어 사용
app.use(cors());

// 정적 자산 제공 (public 디렉토리)
app.use(express.static('public'));

// Multer 설정
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // 업로드된 파일이 저장될 디렉토리
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // 파일명은 현재 시간 + 원래 파일 확장자
  },
});

const upload = multer({ storage: storage });

// 업로드 폼 렌더링
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// 파일 업로드 처리 라우트
app.post('/api/upload', upload.fields([{ name: 'recommendation' }, { name: 'portpolio' }, { name: 'resume' }]), (req, res) => {
  const userdep = req.body.userdep;
  const username = req.body.username;
  const useremail = req.body.useremail;
  const userphone = req.body.userphone;

  // 업로드된 파일 정보
  const recommendationFile = req.files['recommendation'][0];
  const portpolioFile = req.files['portpolio'][0];
  const resumeFile = req.files['resume'][0];

  // 여기에서 필요한 작업 수행 (예: 데이터베이스에 저장, 다른 서비스 호출 등)

  res.json({ message: 'File uploaded successfully!' });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
