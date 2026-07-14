# 카카오 AI 루키 캠프 2기 프로그램 일정표

Google Sheet의 `타이틀 변경 / 강사배치` 탭을 바탕으로 만든 3박 4일 웹 시간표입니다.

## 공개 서비스

[https://davidsong75.github.io/rookie/](https://davidsong75.github.io/rookie/)

## 로컬 실행

```bash
pnpm install
pnpm dev
```

## 프로덕션 빌드

```bash
pnpm build
```

상단 버튼과 일정 카드는 원본 Google Sheet로 연결됩니다. 프로그램별 Google Drive 폴더가 확정되면 `src/data/schedule.js`의 링크만 교체하면 됩니다.
