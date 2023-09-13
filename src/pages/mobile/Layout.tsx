import React, { Suspense, useEffect, useState } from 'react';
import { NavBar, Popup, SideBar } from 'antd-mobile';
import { AppstoreOutline } from 'antd-mobile-icons';
import '../../assets/css/mobile/normal.scss';
import { Routes, useLocation, useNavigate } from 'react-router';
import { Link, Route } from 'react-router-dom';

const Selector = React.lazy(() => import('./example/filter/demo'));
const LazyLoadImage = React.lazy(() => import('./example/lazy-load-image/demo'));

const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [visible, setVisible] = useState(false);
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const tabs: { key: string; title: string; url: string }[] = [
    { key: '1', title: '选择器', url: 'example/selector' },
    { key: '2', title: '图片懒加载', url: 'example/lazyLoadImage' }
  ];
  useEffect(() => {
    setVisible(false);
    const tab = tabs.find(item => ~location.pathname.indexOf(item.url));
    tab && setActiveKey(tab.key);
  }, [location.pathname]);
  const showMenu = () => {
    setVisible(true);
  };
  const to = (key: string) => {
    const o = tabs.find(item => item.key === key);
    o && navigate(o.url);
  };
  return (
    <React.Fragment>
      <NavBar
        backArrow={<AppstoreOutline />}
        onBack={showMenu}
        style={{
          backgroundColor: '#ffc0cb',
          position: 'fixed',
          width: '100%',
          top: 0
        }}
      >
        <svg
          className="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="1729"
          width="30"
          height="30"
        >
          <path
            d="M64 448l243.2-355.84A256 256 0 0 1 504 0H512v256l256 64 192 320-52.032 78.016A256 256 0 0 1 695.04 832H576l-128 192H320L64 448z m640 64a64 64 0 1 1-128 0 64 64 0 0 1 128 0z"
            fill="#F04925"
            p-id="1730"
          ></path>
          <path d="M640 156.032V29.824A256 256 0 0 1 759.872 0H768v188.032l-128-32z" fill="#F04925" p-id="1731"></path>
        </svg>
      </NavBar>
      <Popup
        visible={visible}
        onMaskClick={() => {
          setVisible(false);
        }}
        position="left"
      >
        <SideBar
          activeKey={activeKey}
          onChange={key => {
            setActiveKey(key);
            to(key);
          }}
        >
          {tabs.map(item => (
            <SideBar.Item
              key={item.key}
              title={<Link to={item.url}>{item.title}</Link>}
              style={{ color: '#d2637de0' }}
            />
          ))}
        </SideBar>
      </Popup>
      <div className="content">
        <Routes>
          <Route
            path="/example/selector"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Selector />
              </Suspense>
            }
          />
          <Route
            path="/example/lazyLoadImage"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <LazyLoadImage />
              </Suspense>
            }
          />
        </Routes>
      </div>
    </React.Fragment>
  );
};
export default Layout;
