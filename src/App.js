import './App.css';
import items from "./index.json";
import List from "./components/List";

function App() {
  const data = items.Items;
  
  return (
    data.map(item => (
      <List 
        name={item.Name}
        due={item.Due}
        description={item.Description}
      />
    ))
  );
}

export default App;
