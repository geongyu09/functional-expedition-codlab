import './TopicTag.css'

interface TopicTagProps {
  label: string
}

function TopicTag({ label }: TopicTagProps) {
  return (
    <div className="topic-tag">
      <span className="topic-tag__dot" aria-hidden="true" />
      <span className="topic-tag__label">{label}</span>
    </div>
  )
}

export default TopicTag
