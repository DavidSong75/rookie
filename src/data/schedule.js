const SPREADSHEET_ID = '1oysqlawFci8tK2UQdQ3InmHV8rq7cq9pFapMoQJ7Jcc'
const TITLE_SHEET_GID = '0'

const spreadsheetUrl = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/edit`

const programFolders = {
  '루키 캠프 오프닝 & 미션 브리핑': 'https://drive.google.com/drive/folders/1aZjKcYfLzFkaVl-5_M1nAG_46B2-CY2p',
  '루키의 팀 빌딩 & 팀 워밍업': 'https://drive.google.com/drive/folders/18OBQFll3mQ30U6l-cXS0_yjr3OcSZTb7',
  '문제 발견 및 정의 워크숍': 'https://drive.google.com/drive/folders/1fp-1z5Zolnmu97KY9D6wsWItgVgLtvA9',
  'AI 솔루션 기획 & 설계 스케치': 'https://drive.google.com/drive/folders/1BncdhvSBKZ_TvoEoYC0d4iGKd4K1m8ly',
  '카카오 크루 특강 & 사옥 투어': 'https://drive.google.com/drive/folders/1iMTd8yapz8WQg_UK_TT9p6tgOguxBWkr',
  '피지컬 AI 엔지니어링 기초': 'https://drive.google.com/drive/folders/1eQDGBxq5i-DR9GHFuDyl4RKdpDdhrtlS',
  'AI 웹앱 백엔드 빌드업': 'https://drive.google.com/drive/folders/1wx_RIHi8g8irRKOiaGCEJLhcf-skCP1I',
  '프로젝트 아키텍처 빌드업': 'https://drive.google.com/drive/folders/13SSV0uZZSW0iC7oBcRrWpdaUjq12EDWc',
  '빌드 스프린트 1: 작동시키기': 'https://drive.google.com/drive/folders/1nSia3Rhgfoe2cKDliPTYk-CMQGk7juAd',
  '빌드 스프린트 2: 완성시키기': 'https://drive.google.com/drive/folders/1gqzGFeVOG23nE4Zjiw5xv1L61gxiQoEH',
  '프리-쇼케이스 발표 & 피드백': 'https://drive.google.com/drive/folders/14YtFO2vKNl6SAx6f-dH8v9LZcNGCyG_n',
  '쇼케이스 준비': 'https://drive.google.com/drive/folders/1t6d2KWXOofKNE62G-zNUSKEyqqOYG7A2',
  '프로젝트 최종 성과 발표': 'https://drive.google.com/drive/folders/1dgu8PcLzO4xouYvOsKcT50QS_yfP2tSw',
  '수료식': 'https://drive.google.com/drive/folders/12iwdGuwLY2z_oWoRiKgeUwlDUMg90iJJ',
}

export const sourceLinks = {
  spreadsheet: `${spreadsheetUrl}#gid=${TITLE_SHEET_GID}`,
  resources: [
    { index: '00', label: '총괄', icon: 'people', url: 'https://drive.google.com/drive/folders/10MhuUSprIBuRhME4IaoV-3h23lUSGVEn' },
    { index: '01', label: '마케팅', icon: 'megaphone', url: 'https://drive.google.com/drive/folders/1rXGW-EaPFdbbilyt7DtTElB4zULttmoM' },
    { index: '02', label: '선발', icon: 'clipboard', url: 'https://drive.google.com/drive/folders/1bnHGQKvKw6Yz-KI4uQDWvBdmCWC8pLiJ' },
    { index: '03', label: '커리큘럼', icon: 'book', url: 'https://drive.google.com/drive/folders/1J92dRI3VYcWsfdYWTTb1zfSkwjtu4YaN' },
    { index: '04', label: '제작물', icon: 'image', url: 'https://drive.google.com/drive/folders/1dLizXseBaI8CHe4cDt1UPik3m1f-UZai' },
    { index: '05', label: '공간 기획', icon: 'building', url: 'https://drive.google.com/drive/folders/1e5oYi5bgZN6yIIUwHNt-KlUrgJ2zJG_E' },
    { index: '06', label: '현장 운영', icon: 'map', url: 'https://drive.google.com/drive/folders/1mVCLTIfVIdNTvDAu98COY6XpujfS6AsB' },
    { index: '07', label: '사진·영상 아카이빙', icon: 'camera', url: 'https://drive.google.com/drive/folders/1e5DXSiahFMeYjBr5zEdhZHd924vBMREh' },
    { index: '08', label: '운영·CS', icon: 'message', url: 'https://drive.google.com/drive/folders/1XFOX69GfM9YtiefcXNMQvt7BOYLJgzer' },
    { index: '09', label: '1기 데모 영상', icon: 'video', url: 'https://drive.google.com/drive/folders/1t0FceDM18ONqoXt8ODnT55-8f1vAmSce' },
    { index: '10', label: 'AI 캠프스 문서', icon: 'file', url: 'https://drive.google.com/drive/folders/1NKb7aQ9jW3hgTXNbJfBUfE0v0Ao8rDPE' },
    { index: '11', label: '캠프 운영', icon: 'clipboard', url: 'https://drive.google.com/drive/folders/1vEgrI1OphOCqVN9OBJAyRgc1WqxEIWH4' },
    { index: '12', label: '프로그램', icon: 'calendar', url: 'https://drive.google.com/drive/folders/1n1sgAabMPD9dsdSEIKhublr7gmeyJ2WZ' },
  ],
}

export const days = [
  { number: 1, title: 'ENTER', tone: 'yellow' },
  { number: 2, title: 'DEFINE', tone: 'blue' },
  { number: 3, title: 'BUILD', tone: 'green' },
  { number: 4, title: 'UNPACK', tone: 'purple' },
]

const program = (event) => ({ ...event, url: programFolders[event.title] })

export const schedule = [
  { day: 1, start: 12, end: 13, title: '점심 식사', type: 'meal' },
  program({
    day: 1,
    start: 13,
    end: 14,
    title: '루키 캠프 오프닝 & 미션 브리핑',
    detail: '세상의 문제를 해결하는 여정의 시작',
    owner: '조이 · 앨런',
  }),
  program({
    day: 1,
    start: 14,
    end: 16,
    title: '루키의 팀 빌딩 & 팀 워밍업',
    detail: '더 가깝게, 루키',
    owner: '앨런',
  }),
  program({
    day: 1,
    start: 16,
    end: 18,
    title: '문제 발견 및 정의 워크숍',
    detail: '일상 속 문제의 발견',
    owner: '데이비드',
  }),
  { day: 1, start: 18, end: 19, title: '저녁 식사', type: 'meal' },
  program({
    day: 1,
    start: 19,
    end: 21,
    title: 'AI 솔루션 기획 & 설계 스케치',
    detail: '문제정의를 넘어 솔루션 기획으로',
    owner: '메이',
  }),
  { day: 1, start: 21, end: 22, title: '데일리 멘토링', type: 'break' },

  { day: 2, start: 8, end: 9, title: '아침 식사', type: 'meal' },
  program({
    day: 2,
    start: 9,
    end: 12,
    title: '카카오 크루 특강 & 사옥 투어',
    detail: '카카오와 함께하는 진로 탐색',
    owner: '조이 · 셜리',
  }),
  { day: 2, start: 12, end: 13, title: '점심 식사', type: 'meal' },
  program({
    day: 2,
    start: 13,
    end: 15,
    title: '피지컬 AI 엔지니어링 기초',
    detail: '화면 밖, 세상을 읽는 피지컬 도구',
    owner: '카일',
  }),
  program({
    day: 2,
    start: 15,
    end: 18,
    title: 'AI 웹앱 백엔드 빌드업',
    detail: '화면 안, 서비스로의 구현',
    owner: '앨런',
  }),
  { day: 2, start: 18, end: 19, title: '저녁 식사', type: 'meal' },
  program({
    day: 2,
    start: 19,
    end: 21,
    title: '프로젝트 아키텍처 빌드업',
    detail: '솔루션 완성을 위한 첫 단계',
    owner: '앨런',
  }),
  { day: 2, start: 21, end: 22, title: '데일리 멘토링', type: 'break' },

  { day: 3, start: 8, end: 9, title: '아침 식사', type: 'meal' },
  program({
    day: 3,
    start: 9,
    end: 12,
    title: '빌드 스프린트 1: 작동시키기',
    detail: '몰입과 개발의 시간',
    owner: '카일',
  }),
  { day: 3, start: 12, end: 13, title: '점심 식사', type: 'meal' },
  program({
    day: 3,
    start: 13,
    end: 17,
    title: '빌드 스프린트 2: 완성시키기',
    detail: '완성, 그리고 검증',
    owner: '카일',
  }),
  program({
    day: 3,
    start: 17,
    end: 18,
    title: '프리-쇼케이스 발표 & 피드백',
    detail: '사용자의 관점으로 한걸음 더',
    owner: '메이',
  }),
  { day: 3, start: 18, end: 19, title: '저녁 식사', type: 'meal' },
  program({
    day: 3,
    start: 19,
    end: 21,
    title: '쇼케이스 준비',
    detail: '마지막 여정을 위한 최종 점검',
    owner: '메이',
  }),
  { day: 3, start: 21, end: 22, title: '데일리 멘토링', type: 'break' },

  { day: 4, start: 8, end: 9, title: '아침 식사', type: 'meal' },
  program({
    day: 4,
    start: 9,
    end: 12,
    title: '프로젝트 최종 성과 발표',
    detail: '루키들의 솔루션, 세상 밖으로',
    owner: '조이 · 앨런',
  }),
  { day: 4, start: 12, end: 13, title: '점심 식사', type: 'meal' },
  program({
    day: 4,
    start: 13,
    end: 17,
    title: '수료식',
    detail: '더 넓은 세상으로의 시작 · 16:30 종료',
    owner: '조이 · 앨런',
  }),
]
