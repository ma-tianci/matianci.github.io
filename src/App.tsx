import { useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import { Button} from 'antd';
import 'antd/dist/antd.css'
import axios from 'axios';

function Home(){
  console.log(process.env.REACT_APP_A);
  return <h2>首页1</h2>
}
function About(){
  // useEffect(()=>{
  //   axios.get('/api/data').then(res=>{
  //     console.log(res.data);  
  //   })
  // },[])
  return <Button type='primary'>关于我</Button>
}
  
function App() {
  return (
     <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>首页</Link>
            </li>
            <li>
              <Link to='/about'>关于我自己</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
     </Router>
  );
}

export default App;
