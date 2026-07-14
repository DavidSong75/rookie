import { Icon } from './Icons.jsx'

export function ResourceRail({ resources }) {
  return (
    <aside className="resource-rail" aria-label="프로젝트 자료 폴더">
      <h2 className="sr-only">프로젝트 자료 폴더</h2>
      <nav className="resource-nav">
        {resources.map((resource) => (
          <a
            className="resource-link"
            href={resource.url}
            key={resource.index}
            target="_blank"
            rel="noreferrer"
            title={resource.label}
          >
            <Icon name={resource.icon} size={20} />
            <span className="resource-index">{resource.index}.</span>
            <span className="resource-label">{resource.label}</span>
            <Icon name="external" size={13} className="resource-external" />
          </a>
        ))}
      </nav>
    </aside>
  )
}
