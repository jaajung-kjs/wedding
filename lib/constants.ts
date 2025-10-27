// 결혼식 정보
export const WEDDING_INFO = {
  groom: {
    name: '김준성',
    father: '김익주',
    mother: '김혜란',
    phone: '010-2017-9092',
  },
  bride: {
    name: '김여진',
    father: '김길찬',
    mother: '강해경',
    phone: '010-2991-7175',
  },
  date: '2026-02-01T12:30:00',
  venue: {
    name: '브라이드밸리',
    address: '서울특별시 강남구 강남대로 262',
    floor: '지하1층',
    phone: '02-2058-0406',
    lat: 37.4869,
    lng: 127.0333,
  },
  accounts: {
    groom: {
      bank: '국민은행',
      account: '703001-01-433280',
      holder: '김준성',
    },
    bride: {
      bank: '신한은행',
      account: '987-654-321012',
      holder: '김여진',
    },
    groomFather: {
      bank: '우리은행',
      account: '1002-123-456789',
      holder: '김길찬',
    },
    brideFather: {
      bank: '기업은행',
      account: '123-456789-01-012',
      holder: '강해경',
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
    date: '2015.05',
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
    date: '2026.02',
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
    '양재역 3번 출구 도보 2분',
  ],
  bus: [
    '간선: 140, 314, 400, 402, 421, 440, 441, 452, 470, 641, 741, 917',
    '직행: 1550, 1570, 3002, 3007, 3030, 3100, 4401, 4402, 9700',
  ],
  parking: '도곡동 캠코 양재타워 주차장 인포데스크에서 차량번호 등록 (무료주차 2시간)',
};
