


const Options = ({items, updateFeedback, reset, total }) => {
    const options = Object.keys(items);
    

    return (
        <div>
            {
            options.map(option => <button onClick={()=>updateFeedback(option)} key={option} type="button" name={option}>{option}</button> )} 
    
        {total>0 && <button type="button" onClick={reset}>Reset</button>}
        </div>
       
    )
}


export default Options