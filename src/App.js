
import './App.css';
import IconSandbox from './components/Icon/IconSandbox';
import Sandbox from './components/ButtonGroup/Sandbox';
import ImgSandbox from './components/Img/ImgSandox';
import ChipSandbox from './components/Chip/ChipSandbox';
import BadgeSandbox from './components/Badge/BadgeSandbox';
import ListGroup from './components/ListGroup/ListGroup';
import ListSandbox from './components/ListGroup/ListSandbox';
import InputSandbox from './components/Input/InputSandbox';
import TabsSandbox from './components/Tabs/TabsSandbox';

function App() {
  return (
    <div className="App">
      <Sandbox />
      <IconSandbox />
      <ImgSandbox />
      <ChipSandbox />
      <BadgeSandbox />
      <ListSandbox />
      <InputSandbox />
      <TabsSandbox />
    </div>
  );
}

export default App;
