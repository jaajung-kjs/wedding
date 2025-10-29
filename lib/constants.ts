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
    address: '서울 강남구 강남대로 262 B1층',
    address2: '브라이드밸리 웨딩홀 단독홀',
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
      account: '110-442-225618',
      holder: '김여진',
    },
    groomFather: {
      bank: '국민은행',
      account: '402-24-0360-749',
      holder: '김익주',
    },
    groomMother: {
      bank: '국민은행',
      account: '402-21-1504-962',
      holder: '김혜란',
    },
    brideFather: {
      bank: '기업은행',
      account: '010-8745-7175',
      holder: '김길찬',
    },
    brideMother: {
      bank: '신한은행',
      account: '110-516-090464',
      holder: '강해경',
    },
  },
};

// 인사말
export const GREETING = {
  title: '소중한 분들을 초대합니다',
  message: `함께한 만큼 더 좋은 날이 올 거라 믿으며
우리는 10년 동안 늘 같은 꿈을 꿔왔습니다.
반짝이는 이 마음이 영원히 빛날 수 있도록,
따뜻한 축복으로 귀한 걸음하시어
저희의 부부로서의 시작을 함께해 주세요.
그 사랑을 마음에 품고 행복하게 살겠습니다.`,
  parents: `${WEDDING_INFO.groom.father} · ${WEDDING_INFO.groom.mother}의 아들 ${WEDDING_INFO.groom.name}
${WEDDING_INFO.bride.father} · ${WEDDING_INFO.bride.mother}의 딸 ${WEDDING_INFO.bride.name}`,
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
  '/images/gallery/10.jpg',
  '/images/gallery/11.jpg',
  '/images/gallery/12.jpg',
  '/images/gallery/13.jpg',
  '/images/gallery/14.jpg',
  '/images/gallery/15.jpg',
  '/images/gallery/16.jpg',
  '/images/gallery/17.jpg',
  '/images/gallery/18.jpg',
  '/images/gallery/19.jpg',
  '/images/gallery/20.jpg',
  '/images/gallery/21.jpg',
  '/images/gallery/22.jpg',
  '/images/gallery/23.jpg',
  '/images/gallery/24.jpg',
  '/images/gallery/25.jpg',
  '/images/gallery/26.jpg',
  '/images/gallery/27.jpg',
  '/images/gallery/28.jpg',
  '/images/gallery/29.jpg',
  '/images/gallery/30.jpg',
  '/images/gallery/31.jpg',
  '/images/gallery/32.jpg',
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
  parking: '도곡동 캠코 양재타워 주차장 인포데스크에서 차량번호 등록\n무료주차 2시간',
};

// 프로필 정보
export const PROFILE = {
  groom: {
    title: '신랑',
    name: WEDDING_INFO.groom.name,
    phone: WEDDING_INFO.groom.phone,
    kakaoLink: 'https://qr.kakao.com/talk/iSSAjx8uVh0ndGjbOwgdoItouIQ-',
    birth: '96년 8월 17일',
    location: '서울 광진구',
    job: 'ICT 엔지니어',
  },
  bride: {
    title: '신부',
    name: WEDDING_INFO.bride.name,
    phone: WEDDING_INFO.bride.phone,
    kakaoLink: 'https://qr.kakao.com/talk/oozpmla6g3zWex2oCcljmTPCSFs-',
    birth: '96년 6월 14일',
    location: '경기도 성남',
    job: '수학 강사',
  },
  message: '저희 행복하게 잘 살겠습니다🖤',
};
