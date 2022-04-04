import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import MessageBox from "../Components/MessageBox"
import { messageAction } from "../Redux/Action/action"


const mapStoreToProps=(state)=>{
    return {message: state.messageData.message}
}

const mapActionToProps =(dispatch)=>{
    return bindActionCreators({setMessage:messageAction},dispatch)
}

export const MessageBoxHoc =connect(mapStoreToProps,mapActionToProps)(MessageBox)