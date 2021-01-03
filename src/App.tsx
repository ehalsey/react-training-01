import React, {FC} from 'react';
import { Button } from 'antd';
import ParentComponent from './components/parent';
import './App.css';

const App: FC = () => (
  <div className="App">
    <Button type="primary">Button</Button>
    <ParentComponent></ParentComponent>
  </div>
);

export default App;
