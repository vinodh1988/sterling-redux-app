import logo from './logo.svg';
import './App.css';
import { MessageBoxHoc } from './ConnectedComponents/MessageBoxHOC';
import { QuoteHOC } from './ConnectedComponents/QuoteHoc';

const App=()=>{
    return(
      <div>
         <MessageBoxHoc></MessageBoxHoc>
         <QuoteHOC></QuoteHOC>
      </div>
    )
}

export default App;
