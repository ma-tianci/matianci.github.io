import React, { Suspense } from 'react';
import './App.css';
import { BrowserRouter, useRoutes, useLocation} from 'react-router-dom';
import { Button} from 'antd';
import 'antd/dist/antd.css'
import routes from './router'
import Nav from './components/nav';

function AppContent() {
  const location = useLocation();
  
  // 定义不需要导航栏的路径
  const noNavPaths = ['/login', '/register', '/404'];
  
  // 判断是否显示导航栏
  const showNav = !noNavPaths.includes(location.pathname);

  return (
    <div>
      {showNav && <Nav />}
    </div>
  );
}

//路由组件
function RouterElement(){
  const element = useRoutes(routes);
  return element;
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
      <Suspense fallback={<div>页面加载中...</div>}>
        <RouterElement />
      </Suspense>
    </BrowserRouter>

  );
}

export default App;
