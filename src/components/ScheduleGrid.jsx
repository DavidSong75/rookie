import { Icon } from './Icons.jsx'

const START_HOUR = 8
const END_HOUR = 22
const hours = Array.from({ length: END_HOUR - START_HOUR }, (_, index) => START_HOUR + index)

function DayHeader({ day }) {
  return (
    <div
      className={`day-header day-header--${day.tone}`}
      style={{ gridColumn: day.number + 1, gridRow: 1 }}
    >
      <span>{day.number}일차</span>
      <strong>{day.title}</strong>
    </div>
  )
}

function EventCard({ event, tone }) {
  const style = {
    gridColumn: event.day + 1,
    gridRow: `${event.start - START_HOUR + 2} / span ${event.end - event.start}`,
  }
  const content = (
    <>
      <span className="event__title">{event.title}</span>
      {event.detail ? <span className="event__detail">{event.detail}</span> : null}
      {event.owner ? <span className="event__owner">담당 · {event.owner}</span> : null}
      {event.url ? (
        <span className="event__action">
          <Icon name="external" size={14} />
          <span>폴더 보기</span>
        </span>
      ) : null}
    </>
  )

  if (!event.url) {
    return (
      <div
        className={`event event--${event.type ?? 'break'}`}
        data-duration={event.end - event.start}
        style={style}
      >
        {content}
      </div>
    )
  }

  return (
    <a
      aria-label={`${event.title}${event.owner ? `, 담당 ${event.owner}` : ''} 프로그램 자료 폴더 보기`}
      className={`event event--program event--${tone}`}
      data-duration={event.end - event.start}
      href={event.url}
      rel="noreferrer"
      style={style}
      target="_blank"
    >
      {content}
    </a>
  )
}

export function ScheduleGrid({ days, events }) {
  return (
    <section className="schedule-section" aria-labelledby="schedule-title">
      <h2 className="sr-only" id="schedule-title">프로그램 일정표</h2>
      <p className="sr-only">프로그램을 선택하면 해당 자료 폴더가 새 창에서 열립니다.</p>

      <div className="schedule-scroll" tabIndex="0" aria-label="3박 4일 시간표, 좌우 스크롤 가능">
        <div className="schedule-grid">
          <div className="time-header" style={{ gridColumn: 1, gridRow: 1 }}>시간</div>
          {days.map((day) => <DayHeader day={day} key={day.number} />)}

          {hours.map((hour, rowIndex) => (
            <div className="time-slot" key={hour} style={{ gridColumn: 1, gridRow: rowIndex + 2 }}>
              <time>{String(hour).padStart(2, '0')}:00</time>
            </div>
          ))}
          <time className="time-end">22:00</time>

          {hours.flatMap((hour, rowIndex) =>
            days.map((day) => (
              <div
                aria-hidden="true"
                className="grid-cell"
                key={`${day.number}-${hour}`}
                style={{ gridColumn: day.number + 1, gridRow: rowIndex + 2 }}
              />
            )),
          )}

          {events.map((event, index) => (
            <EventCard
              event={event}
              key={`${event.day}-${event.start}-${event.title}-${index}`}
              tone={days[event.day - 1].tone}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
