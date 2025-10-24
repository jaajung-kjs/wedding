# 💍 모바일 청첩장 - Wedding Invitation

프리미엄 디자인의 모바일 청첩장 웹사이트입니다. Next.js 15, Tailwind CSS, Framer Motion을 사용하여 2025년 최신 웹 디자인 트렌드를 반영했습니다.

![Wedding Hero](/.playwright-mcp/wedding-hero.png)

## ✨ 주요 기능

### 📱 완벽한 모바일 최적화
- 모바일 퍼스트 디자인
- 모든 디바이스에서 최적화된 반응형 레이아웃
- 터치 제스처 지원

### 🎬 인터랙티브 애니메이션
- Framer Motion 기반 부드러운 애니메이션
- 스크롤 기반 패럴랙스 효과
- 마이크로 인터랙션 (호버, 클릭 효과)

### 🖼️ 사진 갤러리
- 그리드 레이아웃
- Lightbox 확대 보기
- 좌우 스와이프 네비게이션

### 📍 위치 안내
- 예식장 정보
- 네이버/카카오맵 연동
- 주소 복사 기능
- 교통편 안내 (지하철, 버스, 주차)

### 💳 계좌번호 안내
- 신랑/신부측 계좌 정보
- 혼주 계좌 토글 기능
- 원클릭 계좌번호 복사

## 🚀 빠른 시작

### 필수 요구사항

- Node.js 18+
- npm 또는 yarn

### 설치

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 브라우저에서 열기
open http://localhost:3000
```

### 빌드

```bash
# 프로덕션 빌드
npm run build

# 빌드 결과 확인
npm run start
```

## 📝 커스터마이징 가이드

### 1. 기본 정보 수정

`lib/constants.ts` 파일에서 결혼식 정보를 수정하세요:

```typescript
export const WEDDING_INFO = {
  groom: {
    name: '신랑 이름',
    father: '아버지 성함',
    mother: '어머니 성함',
    phone: '010-XXXX-XXXX',
  },
  bride: {
    name: '신부 이름',
    father: '아버지 성함',
    mother: '어머니 성함',
    phone: '010-XXXX-XXXX',
  },
  date: '2025-06-14T14:00:00', // 결혼식 날짜와 시간
  venue: {
    name: '예식장 이름',
    address: '주소',
    floor: '층 정보',
    phone: '02-XXXX-XXXX',
  },
  // ... 계좌번호 정보
};
```

### 2. 인사말 수정

`lib/constants.ts`의 `GREETING` 객체를 수정하세요:

```typescript
export const GREETING = {
  title: '제목',
  message: `인사말 내용`,
};
```

### 3. 타임라인 수정

`lib/constants.ts`의 `TIMELINE` 배열을 수정하세요:

```typescript
export const TIMELINE = [
  {
    date: '2020.03',
    title: '첫 만남',
    description: '설명',
    image: '/images/timeline/1.jpg',
  },
  // ...
];
```

### 4. 이미지 추가

다음 디렉토리에 이미지를 추가하세요:

```
public/
├── images/
│   ├── hero/
│   │   └── main.jpg          # 히어로 배경 이미지 (1920×1080)
│   ├── timeline/
│   │   ├── 1.jpg            # 타임라인 이미지
│   │   ├── 2.jpg
│   │   └── 3.jpg
│   ├── gallery/
│   │   ├── 1.jpg            # 갤러리 이미지 (9장)
│   │   ├── 2.jpg
│   │   └── ...
│   └── og-image.jpg         # SNS 공유 이미지 (1200×630)
```

**이미지 최적화 팁:**
- JPG 형식 사용 (압축률 70-80%)
- 히어로: 1920×1080px
- 갤러리: 800×800px 정사각형
- 타임라인: 600×600px
- TinyPNG 등으로 사전 압축

### 5. 색상 테마 변경

`tailwind.config.ts`에서 색상을 변경하세요:

```typescript
colors: {
  primary: "#F5F1ED",      // 메인 배경색
  secondary: "#E8DDD3",    // 보조 배경색
  accent: "#C9A690",       // 강조색 (버튼 등)
  "text-primary": "#2C2C2C",   // 기본 텍스트
  "text-secondary": "#6B6B6B", // 보조 텍스트
}
```

## 📦 프로젝트 구조

```
wedding-invitation/
├── app/
│   ├── layout.tsx           # 전역 레이아웃 & 메타데이터
│   ├── page.tsx             # 메인 페이지
│   └── globals.css          # 전역 스타일
├── components/
│   ├── sections/
│   │   ├── HeroVideo.tsx    # 히어로 섹션
│   │   ├── Intro.tsx        # 인사말
│   │   ├── Timeline.tsx     # 스토리 타임라인
│   │   ├── Gallery.tsx      # 사진 갤러리
│   │   ├── Location.tsx     # 위치 정보
│   │   └── Account.tsx      # 계좌번호
│   └── ui/
│       └── Lightbox.tsx     # 갤러리 Lightbox
├── lib/
│   ├── constants.ts         # 결혼식 정보 상수
│   └── animations.ts        # Framer Motion 애니메이션
├── public/
│   └── images/              # 이미지 파일
└── styles/                  # 추가 스타일
```

## 🎨 디자인 시스템

### 타이포그래피

- **세리프 폰트**: Playfair Display (영문), Nanum Myeongjo (한글) - 제목용
- **산세리프 폰트**: Pretendard - 본문용

### 색상 팔레트

| 용도 | 색상 코드 | 설명 |
|------|-----------|------|
| Primary | #F5F1ED | 아이보리 배경 |
| Secondary | #E8DDD3 | 베이지 배경 |
| Accent | #C9A690 | 로즈골드 강조 |
| Text Primary | #2C2C2C | 차콜 텍스트 |
| Text Secondary | #6B6B6B | 회색 텍스트 |

### 반응형 브레이크포인트

- Mobile: 320px~
- Tablet: 768px~
- Desktop: 1024px~

## 🌐 배포하기

### Vercel 배포 (권장)

1. GitHub 저장소에 코드 푸시

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

2. [Vercel](https://vercel.com) 접속 및 로그인

3. "New Project" 클릭

4. GitHub 저장소 선택

5. 프로젝트 설정:
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`

6. "Deploy" 클릭

7. 배포 완료! (약 2-3분 소요)

**커스텀 도메인 연결:**
- Vercel Dashboard > Settings > Domains
- 도메인 추가 및 DNS 설정

### GitHub Pages 배포

```bash
# 정적 사이트 생성
npm run build

# out 디렉토리를 GitHub Pages에 배포
# (gh-pages 브랜치 사용)
```

## 📊 성능 최적화

### 이미지 최적화
- ✅ Next.js Image 컴포넌트 사용
- ✅ WebP/AVIF 자동 변환
- ✅ Lazy loading
- ✅ Blur placeholder

### 번들 최적화
- ✅ Code splitting
- ✅ Tree shaking
- ✅ Minification
- ✅ Gzip 압축

### 예상 성능 지표
- **Lighthouse Score**: 95+
- **First Contentful Paint**: <1.5s
- **Largest Contentful Paint**: <2.5s
- **Total Bundle Size**: ~180KB (gzipped)

## 🛠️ 기술 스택

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.x
- **Animation**: Framer Motion
- **Deployment**: Vercel
- **Database**: ❌ 불필요 (정적 사이트)

## 📱 브라우저 지원

- ✅ Chrome/Edge (최신 2개 버전)
- ✅ Safari (iOS 12+)
- ✅ Firefox (최신 2개 버전)
- ✅ Samsung Internet
- ✅ 모바일 브라우저 전체

## 🤝 기여하기

개선 사항이나 버그 리포트는 Issues에 등록해주세요!

## 📄 라이선스

MIT License - 자유롭게 사용하세요!

## 💡 추가 기능 아이디어

- [ ] 배경 음악 재생
- [ ] D-day 카운터
- [ ] 캘린더 일정 추가 (iCal/Google)
- [ ] SNS 공유 버튼 (카카오톡, 페이스북)
- [ ] 방명록 (DB 필요)
- [ ] RSVP 참석 여부 (DB 필요)

---

**Made with ♥ using Next.js & Framer Motion**
