import { Icon } from './components/Icons.jsx'
import { ResourceRail } from './components/ResourceRail.jsx'
import { ScheduleGrid } from './components/ScheduleGrid.jsx'
import { days, sourceLinks, schedule } from './data/schedule.js'

function App() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="brand-block">
          <div>
            <h1>AI 루키 캠프 콘텐츠 가이드 맵</h1>
            <p>3박 4일 프로그램 일정표</p>
          </div>
        </div>
        <a
          aria-label="원본 시트 열기"
          className="root-drive-link"
          href={sourceLinks.spreadsheet}
          target="_blank"
          rel="noreferrer"
        >
          <Icon name="folder" size={19} />
          <span>원본 시트 열기</span>
          <Icon name="external" size={15} />
        </a>
      </header>

      <main className="app-main">
        <ResourceRail resources={sourceLinks.resources} />
        <ScheduleGrid days={days} events={schedule} />
      </main>
    </div>
  )
}

export default App
