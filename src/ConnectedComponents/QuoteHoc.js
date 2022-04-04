import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import Quote from "../Quote"
import { QuoteActionAPI } from "../Redux/Action/QuoteAction"



const mapStateToProps = (state)=>{
     return {
         message:  state.quoteData.quote.message,
         author: state.quoteData.quote.author
     }
}
const mapActionToProps = (dispatch)=>{
    return bindActionCreators({
        newQuote : QuoteActionAPI
    },dispatch)
}


export const QuoteHOC = connect(mapStateToProps,mapActionToProps)(Quote)
