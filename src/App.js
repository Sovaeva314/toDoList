import './App.css';
import { Component } from 'react';
import image1 from './topPic.jpg';
import image2 from './bottomPic.jpg';
import Chores from './Chores';

class App extends Component {
  render() {
    return <div>

      <div className='container'>
        <img src={image1} width='300px' alt='topPic' />
      </div>

      <Chores />

      <div className='container'>
        <img src={image2} width='300px' alt='bottomPic' />
      </div>

    </div>
    
  }
}

export default App;