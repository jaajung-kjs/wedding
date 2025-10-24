# 🚀 배포 가이드

이 문서는 모바일 청첩장을 Vercel과 GitHub Pages에 배포하는 상세한 가이드입니다.

## 📋 사전 준비

### 1. 이미지 준비

실제 웨딩 사진으로 플레이스홀더 이미지를 교체하세요:

```bash
public/
└── images/
    ├── hero/
    │   └── main.jpg          # 1920×1080px (히어로 배경)
    ├── timeline/
    │   ├── 1.jpg            # 600×600px (타임라인 이미지)
    │   ├── 2.jpg
    │   └── 3.jpg
    ├── gallery/
    │   ├── 1.jpg            # 800×800px (갤러리 이미지)
    │   ├── 2.jpg
    │   └── ... (총 9장)
    └── og-image.jpg         # 1200×630px (SNS 공유용)
```

**이미지 최적화 도구:**
- [TinyPNG](https://tinypng.com/) - 온라인 이미지 압축
- [Squoosh](https://squoosh.app/) - Google의 이미지 최적화 도구

### 2. 정보 업데이트

`lib/constants.ts` 파일에서 실제 정보로 수정:

- ✅ 신랑/신부 이름
- ✅ 부모님 성함
- ✅ 결혼식 날짜/시간
- ✅ 예식장 정보
- ✅ 계좌번호
- ✅ 교통편 정보

### 3. 로컬 테스트

```bash
# 개발 서버로 확인
npm run dev

# 프로덕션 빌드 테스트
npm run build
npm run start
```

브라우저에서 모든 기능이 정상 작동하는지 확인:
- [ ] 이미지 로드
- [ ] 애니메이션 작동
- [ ] 버튼 클릭 (계좌번호 복사, 지도 열기 등)
- [ ] 갤러리 Lightbox
- [ ] 모바일 반응형

---

## 🌟 Vercel 배포 (권장)

Vercel은 Next.js를 만든 회사의 무료 호스팅 서비스입니다.

### 장점
- ✅ 무료 플랜 제공
- ✅ 자동 HTTPS
- ✅ 글로벌 CDN
- ✅ GitHub 연동 자동 배포
- ✅ 커스텀 도메인 지원
- ✅ 배포 시간 1-2분

### 단계별 가이드

#### 1. GitHub 저장소 생성

```bash
# Git 초기화
git init

# .gitignore 확인 (이미 생성되어 있음)
# node_modules, .next, out 등이 포함되어 있는지 확인

# 커밋
git add .
git commit -m "Initial commit: Wedding invitation website"

# GitHub에 저장소 생성 후
git remote add origin https://github.com/YOUR_USERNAME/wedding-invitation.git
git branch -M main
git push -u origin main
```

#### 2. Vercel 계정 생성

1. https://vercel.com 접속
2. "Sign Up" 클릭
3. GitHub 계정으로 로그인

#### 3. 프로젝트 배포

1. Vercel 대시보드에서 "Add New..." > "Project" 클릭
2. GitHub 저장소 연결 권한 허용
3. 저장소 선택: `wedding-invitation`
4. 프로젝트 설정:
   ```
   Framework Preset: Next.js
   Root Directory: ./
   Build Command: npm run build
   Output Directory: .next
   Install Command: npm install
   ```
5. **Environment Variables** (필요한 경우):
   ```
   # 예시: Google Analytics ID
   NEXT_PUBLIC_GA_ID=UA-XXXXXXXXX-X
   ```
6. "Deploy" 버튼 클릭

#### 4. 배포 완료

- 배포 진행 상황이 실시간으로 표시됩니다 (약 2-3분)
- 배포 완료 후 제공되는 URL 확인:
  ```
  https://wedding-invitation-xxxx.vercel.app
  ```

#### 5. 자동 배포 설정

이제부터 GitHub에 푸시하면 자동으로 재배포됩니다:

```bash
# 수정 사항 커밋
git add .
git commit -m "Update wedding details"
git push

# Vercel이 자동으로 감지하고 재배포 시작
```

### 커스텀 도메인 연결

#### 도메인 구매처
- [가비아](https://www.gabia.com/)
- [호스팅케이알](https://www.hosting.kr/)
- [Namecheap](https://www.namecheap.com/)

#### Vercel에서 도메인 설정

1. Vercel 프로젝트 > Settings > Domains
2. "Add" 버튼 클릭
3. 도메인 입력 (예: `ourwedding.com`)
4. DNS 설정 안내에 따라 도메인 제공업체에서 설정:

**A 레코드 방식:**
```
Type: A
Name: @
Value: 76.76.21.21
```

**CNAME 방식 (추천):**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

5. DNS 전파 대기 (최대 48시간, 보통 1-2시간)

---

## 📄 GitHub Pages 배포

GitHub Pages를 사용한 무료 호스팅도 가능합니다.

### 설정 방법

#### 1. next.config.ts 수정

```typescript
const nextConfig: NextConfig = {
  output: "export",  // 이미 설정되어 있음
  images: {
    unoptimized: true,  // 이미 설정되어 있음
  },
  basePath: "/wedding-invitation",  // 저장소 이름으로 변경
  trailingSlash: true,
};
```

#### 2. package.json에 배포 스크립트 추가

```json
{
  "scripts": {
    "deploy": "next build && touch out/.nojekyll && gh-pages -d out -t true"
  },
  "devDependencies": {
    "gh-pages": "^6.0.0"
  }
}
```

#### 3. gh-pages 패키지 설치

```bash
npm install --save-dev gh-pages
```

#### 4. 배포 실행

```bash
npm run deploy
```

#### 5. GitHub Pages 활성화

1. GitHub 저장소 > Settings > Pages
2. Source: "Deploy from a branch"
3. Branch: `gh-pages` / `/ (root)`
4. Save

#### 6. 배포 URL 확인

```
https://YOUR_USERNAME.github.io/wedding-invitation/
```

---

## 🌍 기타 호스팅 옵션

### Netlify

1. https://www.netlify.com 접속
2. GitHub 저장소 연결
3. Build settings:
   ```
   Build command: npm run build
   Publish directory: .next
   ```

### Cloudflare Pages

1. https://pages.cloudflare.com 접속
2. GitHub 저장소 연결
3. Build configuration:
   ```
   Framework preset: Next.js
   Build command: npm run build
   Build output directory: .next
   ```

---

## 🔧 배포 후 체크리스트

### 필수 확인 사항

- [ ] 모든 이미지가 정상 로드되는가?
- [ ] 애니메이션이 부드럽게 작동하는가?
- [ ] 모바일에서 정상 작동하는가?
- [ ] 계좌번호 복사 기능이 작동하는가?
- [ ] 지도 링크가 올바르게 연결되는가?
- [ ] SNS 공유 시 미리보기가 정상인가?
- [ ] HTTPS가 적용되었는가?
- [ ] Lighthouse 점수가 90점 이상인가?

### 성능 최적화 확인

Chrome DevTools > Lighthouse 실행:

```
Performance: 95+
Accessibility: 100
Best Practices: 100
SEO: 100
```

### 모바일 테스트

실제 모바일 기기에서 테스트:
- [ ] iPhone (Safari)
- [ ] Android (Chrome)
- [ ] 다양한 화면 크기

---

## 📱 SNS 공유 최적화

### Open Graph 메타태그

`app/layout.tsx`에 이미 설정되어 있습니다:

```typescript
openGraph: {
  title: '신랑 ♥ 신부 결혼합니다',
  description: '저희 두 사람의 소중한 날에 초대합니다',
  images: ['/images/og-image.jpg'],
  locale: 'ko_KR',
  type: 'website',
}
```

### 카카오톡 공유 테스트

1. 카카오톡 개발자 도구: https://developers.kakao.com/tool/debugger/sharing
2. URL 입력하여 미리보기 확인

### 공유 이미지 제작 팁

- 크기: 1200×630px (Facebook/카카오톡 권장)
- 포맷: JPG (압축률 80%)
- 내용: 신랑신부 이름 + 날짜 + 예식장
- 텍스트는 중앙에 크게 배치

---

## 🔄 업데이트 및 유지보수

### 정보 수정 시

```bash
# 1. 로컬에서 수정
vim lib/constants.ts

# 2. 테스트
npm run dev

# 3. 커밋 및 푸시
git add .
git commit -m "Update wedding details"
git push

# 4. Vercel 자동 재배포 (1-2분)
```

### 이미지 변경 시

```bash
# 1. public/images/ 디렉토리에서 이미지 교체
# 2. 이미지 최적화 (TinyPNG 등)
# 3. 커밋 및 푸시
git add public/images/
git commit -m "Update wedding photos"
git push
```

---

## ⚠️ 주의사항

### 개인정보 보호

- ❌ 절대 GitHub에 비밀번호나 개인키 커밋 금지
- ✅ .gitignore에 민감한 정보 포함
- ✅ 환경 변수 사용 (Vercel Environment Variables)

### 비용

#### Vercel 무료 플랜 한도
- ✅ 100GB 대역폭/월 (충분함)
- ✅ 무제한 배포
- ✅ 자동 SSL 인증서

예상 방문자 1,000명 기준:
- 페이지 크기: ~1.5MB
- 총 트래픽: 1.5GB/월
- **무료 플랜으로 충분**

---

## 🆘 문제 해결

### 배포 실패

```bash
# 로컬 빌드 테스트
npm run build

# 에러 로그 확인
# Vercel > Deployments > 실패한 배포 > 로그 확인
```

### 이미지가 안 보임

- [ ] 파일 경로 확인: `/public/images/...`
- [ ] 파일명 대소문자 확인
- [ ] 이미지 파일 크기 확인 (10MB 이하)

### 애니메이션이 느림

- [ ] 이미지 크기 최적화
- [ ] Lighthouse Performance 점수 확인
- [ ] 모바일 데이터 환경에서 테스트

---

## 📞 지원

문제가 발생하면 다음을 확인하세요:

1. **Next.js 문서**: https://nextjs.org/docs
2. **Vercel 문서**: https://vercel.com/docs
3. **Framer Motion 문서**: https://www.framer.com/motion/

---

**배포 성공을 기원합니다! 🎉**
