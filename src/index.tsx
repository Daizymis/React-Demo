import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import type {ThemeConfig} from 'antd';
import {ConfigProvider} from "antd";

const config: ThemeConfig = {
    token: {
        colorPrimary: '#d2637d',
        colorTextBase: '#d2637d',//#000000
        colorBgContainer: '#eabec4',
        colorPrimaryBg: '#f5dee1',
        colorBgTextHover: '#f5dee1',
        colorTextHeading: '#d2637d',//标题字体颜色
        colorTextLabel: '#d2637d', //文本标签字体颜色
        colorIcon: '#d77785'
    },
};
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <ConfigProvider theme={config}>
            <App/>
        </ConfigProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
