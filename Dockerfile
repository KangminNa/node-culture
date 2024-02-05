# Node.js 이미지를 기반으로 새 이미지를 생성
FROM node:14

# 애플리케이션 디렉토리 생성
WORKDIR /usr/src/app

# 애플리케이션 종속성 설치
COPY package*.json ./
RUN npm install

# 애플리케이션 소스 추가
COPY . .

# 애플리케이션 실행
CMD [ "node", "app.js" ]

# 포트 3000번을 외부에 노출
EXPOSE 3000
