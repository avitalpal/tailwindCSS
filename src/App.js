import './App.css';
import {Route, Routes, Link} from "react-router-dom";
import LinkPage from './LinkPage';
import TextPage from './TextPage';
import FormsPage from './FormsPage';
import GridPage from './GridPage';
import HomePage from './HomePage';
import ScratchPage from './ScratchPage';

function App() {
  
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={ <App/> } /> */}
        <Route path="/" element={ <HomePage/> } />
        <Route path="linkpage" element={ <LinkPage/> } />
        <Route path="textpage" element={ <TextPage/> } />
        <Route path="formspage" element={ <FormsPage/> } />
        <Route path="gridpage" element={ <GridPage/> } />
        <Route path="scratchpage" element={ <ScratchPage/> } />
        <Route path="*" element={<div class="my-auto"><p>Hey there :D <br></br> Looks like there's been an issue with the page redirects, please reload the server!</p><br></br> <img class="mx-auto" src="https://media.tenor.com/udq1uD9WHSQAAAAM/oops.gif"></img></div>} />
      </Routes>
  </div>
    );
}

export default App;

/*<a href='LinkPage' class="text-white margin-5 hover:text-slate-300 m-auto">Click here &rarr;</a>
  */
