
import './App.css'
import Description from './Description/Description'
import Options from './Options/Options'
import FeedBack from './Feedback/FeedBack'
import Notification from './Notification/Notification'
import { useLocalStorage } from '../hooks/useLocalStorage'


const options = {
	good: 0,
	neutral: 0,
	bad: 0
}

function App() {

  const [good, setGood] = useLocalStorage('good', 0);
  const [bad, setBad] = useLocalStorage('bad', 0)
  const [neutral, setNeutral] = useLocalStorage('neutral', 0)

    const totalFeedback = good + bad + neutral;    


  const updateFeedback = (type) => {
  switch (type) {
    case "good":
      setGood(prev=> prev+=1)
      break;
    case "bad":
      setBad(prev=> prev+=1)
      break;
  case "neutral":
      setNeutral(prev=> prev+=1)
      break;
    default:
      break;
  }
}

  const resetFeedBack = () => {
    setBad(0);
    setGood(0);
    setNeutral(0);
  }
  return (
    <>
      <Description />
      <Options items={options} updateFeedback={updateFeedback} reset={resetFeedBack} total={totalFeedback}/>
      {totalFeedback>0 ? <FeedBack good={good} bad={bad} neutral={neutral} total={totalFeedback} /> : <Notification/>}
      <></>
    </>
  )
}

export default App
