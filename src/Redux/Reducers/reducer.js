export const firstReducer=(state={message: "Hello Redux!!!!"},action)=>{
    switch(action.type){
          case "MESSAGE_ACTION":
                  return {message: action.data}
          default:
                  return state
    }
 }