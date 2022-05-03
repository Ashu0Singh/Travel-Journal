import TopBar from './components/TopBar'
import './App.css'
import Card  from './components/Card';
import Data from "./data"

export default function App(){
  const elements = Data.map(items => {
      return (<Card 
        key = {items.id}
        {...items}
      />);
  })
  return (
    <div className='App'>
      <TopBar />
      <div className='App--scrollable'>
        {elements}
      </div>
    </div>
    
  );
}