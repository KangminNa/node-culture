// controllers/uploadController.js

const dbConnection = require('../models/db');

exports.uploadFiles = (req, res) => {
    const userdep = req.body.userdep;
    const username = req.body.username;
    const useremail = req.body.useremail;
    const userphone = req.body.userphone;
  
    // 업로드된 파일 정보
    const recommendationFile = req.files['recommendation'][0];
    const portpolioFile = req.files['portpolio'][0];
    const resumeFile = req.files['resume'][0];
  
    // 테이블 생성 쿼리
const createTableQuery = `
CREATE TABLE IF NOT EXISTS culture_oopy (
  id INT AUTO_INCREMENT PRIMARY KEY,
  userdep VARCHAR(255),
  username VARCHAR(255),
  useremail VARCHAR(255),
  userphone VARCHAR(255),
  recommendationFile VARCHAR(255),
  portpolioFile VARCHAR(255),
  resumeFile VARCHAR(255)
)
`;

// 테이블 생성
dbConnection.query(createTableQuery, (error, results, fields) => {
if (error) throw error;

// 데이터 입력 쿼리
const query = `INSERT INTO culture_oopy (userdep, username, useremail, userphone, recommendationFile, portpolioFile, resumeFile) VALUES (?, ?, ?, ?, ?, ?, ?)`;

// 데이터 입력
dbConnection.query(query, [userdep, username, useremail, userphone, recommendationFile.filename, portpolioFile.filename, resumeFile.filename], (error, results, fields) => {
  if (error) throw error;
  
  // 클라이언트로 응답 데이터 전송
  res.json({ message: 'File uploaded and data stored successfully!' });
});
});
};
