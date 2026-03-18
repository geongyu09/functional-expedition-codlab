import { useNavigate } from 'react-router-dom'
import TopicTag from '../../components/TopicTag'
import './HomePage.css'

function HomePage() {
  const navigate = useNavigate()

  const handleStart = () => {
    navigate('/step1')
  }

  return (
    <main className="home-page">
      <h1 className="home-page__title">함수형 프로그래밍</h1>
      <div className="home-page__tags">
        <TopicTag label="액션에서 계산 추출하기" />
        <TopicTag label="계층형 설계" />
      </div>
      <button className="home-page__button" onClick={handleStart}>
        실습 시작하기
      </button>
    </main>
  )
}

export default HomePage
