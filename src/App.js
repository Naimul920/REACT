import logo from './logo.svg';
import './App.css';
import TopBanner from "./components/TopBanner/TopBanner";
import Services from "./components/Services/services";
import TopNavigation from "./components/TopNavigation/TopNavigation";
import Analysis from "./components/Analysis/Analysis";
import Summary from "./components/Summary/Summary";

function App() {
  return (
    <div>
        <TopNavigation/>
        <TopBanner/>
        <Services/>
        <Analysis/>
        <Summary/>
    </div>
  );
}

export default App;
