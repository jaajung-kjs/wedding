// 결혼식 정보
export const WEDDING_INFO = {
  groom: {
    name: '김철수',
    father: '김아버지',
    mother: '김어머니',
    phone: '010-1234-5678',
  },
  bride: {
    name: '이영희',
    father: '이아버지',
    mother: '이어머니',
    phone: '010-9876-5432',
  },
  date: '2025-06-14T14:00:00',
  venue: {
    name: '브라이드밸리',
    address: '서울특별시 서초구 강남대로 213 (양재동)',
    floor: '양재점',
    phone: '02-579-9000',
    lat: 37.4844,
    lng: 127.0344,
  },
  accounts: {
    groom: {
      bank: '신한은행',
      account: '110-123-456789',
      holder: '김철수',
    },
    bride: {
      bank: '국민은행',
      account: '987-654-321012',
      holder: '이영희',
    },
    groomFather: {
      bank: '우리은행',
      account: '1002-123-456789',
      holder: '김아버지',
    },
    brideFather: {
      bank: 'IBK기업은행',
      account: '123-456789-01-012',
      holder: '이아버지',
    },
  },
};

// 인사말
export const GREETING = {
  title: '소중한 분들을 초대합니다',
  message: `저희 두 사람이 사랑으로 하나되어
새로운 인생을 시작하려 합니다.

서로 이해하고 배려하며
평생을 함께 살겠다는 약속,
귀한 걸음으로 오시어 축복해 주시면
큰 기쁨으로 간직하겠습니다.`,
  parents: `${WEDDING_INFO.groom.father} · ${WEDDING_INFO.groom.mother}의 장남 ${WEDDING_INFO.groom.name}
${WEDDING_INFO.bride.father} · ${WEDDING_INFO.bride.mother}의 장녀 ${WEDDING_INFO.bride.name}`,
};

// 타임라인
export const TIMELINE = [
  {
    date: '2020.03',
    title: '첫 만남',
    description: '우연한 인연으로 만나게 되었습니다',
    image: '/images/timeline/1.jpg',
  },
  {
    date: '2022.12',
    title: '프러포즈',
    description: '평생을 함께하기로 약속했습니다',
    image: '/images/timeline/2.jpg',
  },
  {
    date: '2025.06',
    title: '결혼',
    description: '새로운 시작을 함께합니다',
    image: '/images/timeline/3.jpg',
  },
];

// 갤러리 이미지
export const GALLERY_IMAGES = [
  '/images/gallery/1.jpg',
  '/images/gallery/2.jpg',
  '/images/gallery/3.jpg',
  '/images/gallery/4.jpg',
  '/images/gallery/5.jpg',
  '/images/gallery/6.jpg',
  '/images/gallery/7.jpg',
  '/images/gallery/8.jpg',
  '/images/gallery/9.jpg',
];

// 교통편 안내
export const TRANSPORTATION = {
  subway: [
    '신분당선 양재역 6번 출구 도보 1분',
    '3호선 양재역 6번 출구 도보 1분',
  ],
  bus: [
    '간선: 400, 405, 440, 441, 462',
    '지선: 3422, 4432',
  ],
  parking: '건물 지하 주차장 이용 가능 (무료)',
};
