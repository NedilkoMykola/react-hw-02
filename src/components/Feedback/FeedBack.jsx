




const FeedBack = ({good, bad, neutral, total}) => {

    return (
        <>
            <p>Good: {good} </p>
            <p>Bad: {bad} </p>
            <p>Neutral: {neutral}</p>
            <p>Total: {total}</p> 
            <p>Positive : {Math.round((good / total) * 100)}%</p>
            
        </>
    )
}

export default FeedBack;