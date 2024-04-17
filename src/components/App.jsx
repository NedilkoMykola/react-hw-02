
import { useEffect, useState } from 'react'
import './App.css'
import Description from './Description/Description'
import Options from './Options/Options'
import FeedBack from './Feedback/FeedBack'
import Notification from './Notification/Notification'


const options = {
	good: 0,
	neutral: 0,
	bad: 0
}

function App() {

  const [good, setGood] = useState(() => {
    const savedGood = localStorage.getItem('good');
   return savedGood !== null ? JSON.parse(savedGood): 0});
  const [bad, setBad] = useState(() => {
    const savedBad = localStorage.getItem('bad');
   return savedBad !== null ? JSON.parse(savedBad): 0});
  const [neutral, setNeutral] = useState(() => {
    const savedNeutral = localStorage.getItem('neutral');
   return savedNeutral !== null ? JSON.parse(savedNeutral): 0});


  useEffect(() => {
    localStorage.setItem('good', good);
    
  }, [good])

    useEffect(() => {
    localStorage.setItem('bad', bad);
    }, [bad])
  
    useEffect(() => {
  
    localStorage.setItem('neutral', neutral);
  }, [neutral])
 
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
