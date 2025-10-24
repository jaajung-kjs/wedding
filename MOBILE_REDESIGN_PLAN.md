# 모바일 청첩장 전면 재설계 계획

참고 사이트: https://agijagi.netlify.app/

## 📱 핵심 디자인 철학

**"모바일 퍼스트 → 모바일 온리"**
- PC는 고려하지 않음
- 한 손으로 편하게 스크롤 가능
- 터치 친화적 인터랙션
- 충분한 여백과 가독성

---

## 🎨 1. 디자인 시스템 재설계

### 색상 팔레트 변경
```css
현재 (너무 진하고 무거움):
- primary: #f4e5d3 (베이지)
- accent: #d4a574 (골드)
- text-primary: #2c2c2c (진한 회색)

→ 제안 (더 밝고 따뜻하게):
- background: #FAFAF8 (아이보리 화이트)
- primary: #F5F0E8 (따뜻한 베이지)
- accent: #C9A882 (부드러운 골드)
- text-primary: #4A4A4A (중간 회색)
- text-secondary: #8B8B8B (연한 회색)
- divider: #E8E4DC (구분선)
```

### 타이포그래피
```css
참고 사이트 특징:
- 세리프 폰트로 고급스러움
- 적절한 행간(line-height: 1.8)
- 충분한 글자 간격(letter-spacing)

→ 제안:
- 제목: Noto Serif KR (세리프)
- 본문: Noto Sans KR (산세리프)
- 크기: 14px~16px (모바일 최적)
- 행간: 1.8~2.0
```

### 레이아웃 원칙
```
참고 사이트 특징:
- 좌우 패딩: 24px
- 섹션 간 여백: 80px~100px
- 카드형 디자인 최소화 (플랫)
- 그림자 효과 최소화

→ 적용:
- 더 넓은 여백으로 시원함
- 카드 배경 제거하고 플랫하게
- 구분선으로 섹션 분리
```

---

## 🗺️ 2. 지도 섹션 완전 재설계 (최우선)

### 현재 문제
- ❌ 카카오맵 이미지는 실제 지도가 아님
- ❌ 지도가 제대로 표시되지 않음
- ❌ 모바일에서 줌/이동 불가능

### 참고 사이트 분석
```html
<!-- Naver Map iframe 실제 사용 -->
<iframe
  src="네이버 지도 embed URL"
  width="100%"
  height="400px"
  frameborder="0"
  style="border:0"
  allowfullscreen
/>
```

### 해결 방안 3가지

#### Option 1: Kakao Maps JavaScript API (추천)
```javascript
// 실제 지도 연동
import { Map, MapMarker } from 'react-kakao-maps-sdk';

<Map
  center={{ lat: 37.4869, lng: 127.0333 }}
  style={{ width: '100%', height: '400px' }}
  level={3}
>
  <MapMarker position={{ lat: 37.4869, lng: 127.0333 }} />
</Map>
```
**장점**:
- 무료, API 키 발급 쉬움
- React 컴포넌트 지원
- 모바일 터치 제스처 완벽 지원

#### Option 2: Naver Map iframe (참고 사이트 방식)
```html
<iframe
  src="https://map.naver.com/p/entry/place/[PLACE_ID]"
  width="100%"
  height="400px"
/>
```
**장점**:
- 설정 불필요
- 네이버 지도 직접 연동

#### Option 3: Kakao Map iframe (현재 개선)
```html
<iframe
  src="https://map.kakao.com/?urlX=127.0333&urlY=37.4869&name=브라이드밸리"
  width="100%"
  height="400px"
/>
```

### 최종 추천: **Option 1 (Kakao Maps JavaScript API)**
- 가장 깔끔하고 커스터마이징 가능
- 로딩 속도 빠름
- 모바일 UX 최고

---

## 📐 3. 섹션 구성 재설계

### 참고 사이트 구조 분석
```
1. Hero (배경 이미지 슬라이더 + Click! 버튼)
2. 명언 (코린토서)
3. 초대장 (💌 이모지 + 인사말)
4. Calendar (WEDDING DAY)
5. 지도 (오시는 길)
6. 계좌 (마음 전하실 곳)
7. 예식 안내
8. Gallery
9. Footer (카카오톡 공유, 링크 복사)
```

### 우리 사이트 현재 구조
```
1. HeroVideo ❌ (너무 복잡)
2. Intro ✅
3. Calendar ✅ (새로 추가됨)
4. Timeline ❌ (불필요, 제거)
5. Gallery ✅
6. Location ⚠️ (지도 수정 필요)
7. Account ✅
8. Footer ✅
```

### 제안하는 새 구조
```
1. Hero (심플한 메인 이미지 + 이름 + 날짜)
2. Intro (인사말, 선택: 명언 추가)
3. Calendar (WEDDING DAY)
4. Gallery (사진 중심)
5. Location (실제 지도 + 교통편)
6. Account (마음 전하실 곳)
7. Footer (공유 버튼)
```

**변경 사항**:
- ❌ **HeroVideo 제거** → 심플한 이미지로 교체
- ❌ **Timeline 제거** → 불필요한 정보
- ✅ **Gallery를 Location 위로** → 사진 강조
- ✅ **섹션 순서 최적화** → 중요도 순

---

## 🎯 4. 섹션별 상세 재설계

### 4.1 Hero 섹션
```
현재: HeroVideo (동영상 배경, 복잡한 애니메이션)
→ 제안: 심플한 이미지 + 텍스트

디자인:
- 배경: 대표 웨딩 사진 1장 (고정)
- 중앙 정렬:
  • 이름 (김준성 ♥ 김여진)
  • 날짜 (2026. 02. 01 SUN)
  • 시간 (12:30)
  • 장소 (브라이드밸리)
- 하단: "아래로 스크롤" 아이콘

특징:
- 애니메이션 최소화
- 로딩 속도 향상
- 모바일 데이터 절약
```

### 4.2 Intro 섹션
```
참고 사이트 특징:
- 명언 (선택사항)
- 💌 이모지
- "초대합니다" 제목
- 인사말
- 이름 (하단)

→ 우리 디자인:
[선택 1: 명언 포함]
"사랑은 오래 참고..."
- 성경 구절 또는 명언 -

💌
소중한 분들을 초대합니다

저희 두 사람이 사랑으로 하나되어...

김준성 · 김여진 올림

[선택 2: 명언 제외, 현재 유지]
```

### 4.3 Calendar 섹션
```
현재: ✅ 잘 구현됨

개선점:
- 배경색을 흰색으로 (현재 secondary)
- 여백 더 넓게
- D-DAY 글자 크기 조정
```

### 4.4 Gallery 섹션 (위치 이동)
```
현재 위치: Location 전
→ 제안: Location 전 유지 (좋음)

개선점:
- 그리드: 2열 → 3열 (참고 사이트)
- aspect-ratio: square → 세로로 길게
- 간격 줄이기 (gap: 4px → 2px)
- 라이트박스 더 부드럽게

참고 사이트:
- 3열 그리드
- 매우 좁은 간격 (밀집감)
- 세로로 긴 이미지
```

### 4.5 Location 섹션 (핵심 개선)
```
현재 문제:
- 카카오맵 이미지가 실제 지도가 아님
- 지도 표시 안 됨

→ 해결책:
1. Kakao Maps JavaScript API 사용
2. 실제 인터랙티브 지도 표시
3. 줌/이동 가능
4. 마커 표시

레이아웃:
┌─────────────────┐
│ 오시는 길       │
├─────────────────┤
│ 브라이드밸리    │
│ 서울 강남구...  │
│ [주소복사] [전화]│
├─────────────────┤
│                 │
│   실제 지도     │
│  (인터랙티브)   │
│                 │
├─────────────────┤
│ [N 네이버]      │
│ [K 카카오맵]    │
├─────────────────┤
│ 🚇 지하철       │
│ 🚌 버스         │
│ 🚗 주차         │
└─────────────────┘
```

### 4.6 Account 섹션
```
현재: ✅ 잘 구현됨

개선점:
- 펼치기/접기 애니메이션 부드럽게
- 복사 성공 토스트 메시지
```

### 4.7 Footer
```
참고 사이트:
- Thank you 메시지
- 이름 + 날짜 + 장소
- [카카오톡 공유] [링크 복사] 버튼

→ 추가 제안:
- SNS 공유 기능
- 카카오톡, 링크 복사
```

---

## 🚀 5. 구현 우선순위

### Phase 1: 긴급 수정 (즉시)
1. ✅ **지도 수정** - Kakao Maps API 연동
2. ✅ **색상 팔레트 변경** - 더 밝고 따뜻하게
3. ✅ **여백 조정** - 섹션 간 간격 넓히기

### Phase 2: 레이아웃 개선 (중요)
4. ✅ **Hero 재설계** - HeroVideo → 심플 이미지
5. ✅ **Timeline 제거** - 불필요한 섹션
6. ✅ **Gallery 스타일** - 3열 그리드, 좁은 간격
7. ✅ **타이포그래피** - 세리프 폰트 적용

### Phase 3: 추가 기능 (선택)
8. 🔄 **명언 섹션** - Intro 상단에 추가
9. 🔄 **공유 기능** - 카카오톡, 링크 복사
10. 🔄 **배경 음악** - 자동 재생 + Mute 버튼
11. 🔄 **카운트다운** - D-Day까지 남은 시간

---

## 📊 6. 성능 최적화

### 이미지 최적화
```javascript
// Next.js Image 컴포넌트 사용
import Image from 'next/image';

<Image
  src="/images/hero.jpg"
  alt="Wedding"
  width={800}
  height={1200}
  priority // Hero 이미지는 우선 로딩
  quality={85}
/>
```

### Lazy Loading
```javascript
// 지도는 스크롤 시 로딩
<div className="lazy-load-map">
  {isVisible && <KakaoMap />}
</div>
```

### 폰트 최적화
```css
/* Noto Sans/Serif KR 서브셋 로딩 */
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&family=Noto+Serif+KR:wght@400;700&display=swap&subset=korean');
```

---

## 🎨 7. 상세 디자인 가이드

### 버튼 스타일
```css
/* 참고 사이트: 미니멀한 버튼 */
.btn {
  padding: 14px 28px;
  border-radius: 24px;
  font-size: 14px;
  font-weight: 500;
  background: transparent;
  border: 1px solid #C9A882;
  color: #4A4A4A;
  transition: all 0.3s;
}

.btn:hover {
  background: #C9A882;
  color: white;
}
```

### 섹션 타이틀
```css
.section-title {
  font-family: 'Noto Serif KR', serif;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 40px;
  color: #4A4A4A;
  letter-spacing: 2px;
}
```

### 구분선
```css
.divider {
  width: 60px;
  height: 1px;
  background: #C9A882;
  margin: 60px auto;
}
```

---

## 🔧 8. 기술 스택 추가

### 필요한 패키지
```bash
# Kakao Maps API
npm install react-kakao-maps-sdk

# 공유 기능
npm install react-share

# 애니메이션 (기존 Framer Motion 유지)
# Framer Motion 이미 설치됨
```

### 환경 변수
```env
# .env.local
NEXT_PUBLIC_KAKAO_MAP_KEY=your_kakao_map_api_key
```

---

## 📱 9. 모바일 UX 체크리스트

### 터치 영역
- [ ] 버튼 최소 크기: 44x44px
- [ ] 링크 간 간격: 최소 8px
- [ ] 폼 입력: 최소 높이 48px

### 스크롤
- [ ] 스크롤 인디케이터
- [ ] 부드러운 스크롤 (smooth scroll)
- [ ] 섹션 스냅 (선택사항)

### 로딩
- [ ] 초기 로딩 화면
- [ ] 이미지 skeleton
- [ ] 지도 로딩 인디케이터

### 성능
- [ ] First Contentful Paint < 1.5s
- [ ] Largest Contentful Paint < 2.5s
- [ ] Time to Interactive < 3.5s

---

## 🎯 10. 최종 결론

### 즉시 구현할 항목 (Phase 1)
1. ✅ **Kakao Maps JavaScript API 연동** - 지도 정상 작동
2. ✅ **색상 팔레트 변경** - globals.css 수정
3. ✅ **여백 조정** - 섹션 padding/margin 증가

### 권장 개선 항목 (Phase 2)
4. ✅ **Hero 단순화** - HeroVideo → HeroImage
5. ✅ **Timeline 제거** - 불필요한 정보
6. ✅ **Gallery 3열 그리드** - 더 많은 사진 표시
7. ✅ **폰트 변경** - Noto Serif KR 세리프 적용

### 선택 추가 기능 (Phase 3)
8. 명언 섹션
9. 카카오톡 공유
10. 배경 음악
11. D-Day 카운트다운

---

## 다음 단계

어떤 Phase부터 진행할까요?

**Option 1**: Phase 1만 빠르게 (지도 + 색상 + 여백)
**Option 2**: Phase 1 + 2 전체 (완전한 재설계)
**Option 3**: 단계별 진행하면서 확인

추천: **Option 1 먼저, 확인 후 Option 2 진행**
