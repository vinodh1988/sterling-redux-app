
const MessageBox= ({message,setMessage})=>{
    return(
        <div className="p-5 ml-10 mt-10 bg-dark text-light">
            <h3>Message:: {message}</h3>
            <button className="btn btn-danger" 
            onClick={setMessage}>change message</button>
        </div>
    )
}

export default MessageBox