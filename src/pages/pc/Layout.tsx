import React, {Suspense, useState} from 'react';
import {LaptopOutlined, NotificationOutlined} from '@ant-design/icons';
import type { MenuProps } from 'antd/es/menu'
import {Breadcrumb, Button, ConfigProvider, Layout, Menu, theme} from 'antd';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import type {ThemeConfig} from 'antd';
import {GlobalOutline} from "antd-mobile-icons";
import {Routes, useNavigate} from "react-router";
import {Route} from "react-router-dom";
import {ItemType, MenuItemType} from "antd/es/menu/hooks/useItems";

const Promise1 = React.lazy(() => import('./example/promise/demo1'))
const {Header, Content, Sider} = Layout;

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
const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
}));

const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
    (icon, index) => {
        const key = String(index + 1);

        return {
            key: `sub${key}`,
            icon: React.createElement(icon),
            label: `subnav ${key}`,

            children: new Array(4).fill(null).map((_, j) => {
                const subKey = index * 4 + j + 1;
                return {
                    key: subKey,
                    label: `option${subKey}`,
                };
            }),
        };
    },
);
const menuList: MenuProps['items']= [
    {
        key: '1',
        icon: <GlobalOutline/>,
        label: 'Promise',
        children: [
            {
                key: '/example/promise/1',
                label: 'Promise'
            }, {
                key: '/example/promise/2',
                label: '链式调用'
            }, {
                key: '/example/promise/3',
                label: 'all'
            }, {
                key: '/example/promise/4',
                label: 'any'
            }, {
                key: '/example/promise/5',
                label: 'rice'
            }, {
                key: '/example/promise/6',
                label: 'allSettled'
            }]
    }
] as (MenuProps['items'])

const Main: React.FC<{}> = () => {
    const navigate = useNavigate();
    const {
        token: {colorBgContainer},
    } = theme.useToken();
    const [collapsed, setCollapsed] = useState(false);

    const onClick: MenuProps['onClick']  =(e) => {
        console.log(e);
        navigate(e?.key)
    }
    return (

        <ConfigProvider theme={config}>
            <Layout>
                <Header style={{display: 'flex', alignItems: 'center', background: '#eabec4', paddingInline: '25px'}}>
                    <div className="demo-logo" style={{lineHeight: '14px'}}>
                        <svg className="icon" viewBox="0 0 1024 1024" version="1.1"
                             xmlns="http://www.w3.org/2000/svg" p-id="1729" width="30" height="30">
                            <path
                                d="M64 448l243.2-355.84A256 256 0 0 1 504 0H512v256l256 64 192 320-52.032 78.016A256 256 0 0 1 695.04 832H576l-128 192H320L64 448z m640 64a64 64 0 1 1-128 0 64 64 0 0 1 128 0z"
                                fill="#F04925" p-id="1730"></path>
                            <path d="M640 156.032V29.824A256 256 0 0 1 759.872 0H768v188.032l-128-32z" fill="#F04925"
                                  p-id="1731"></path>
                        </svg>
                    </div>
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                    {/*<Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />*/}
                </Header>
                <Layout>
                    <Sider width={200} trigger={null} collapsible collapsed={collapsed}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{height: '100%', borderRight: 0}}
                            items={menuList}
                            onClick={onClick}
                        />
                    </Sider>
                    <Layout style={{padding: '0 24px 24px'}}>
                        <Breadcrumb style={{margin: '16px 0'}}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 580,
                                background: colorBgContainer,
                            }}
                        >
                            <div>
                                <Routes>
                                    <Route
                                        path="/example/promise/1"
                                        element={<Suspense fallback={<div>Loading...</div>}>
                                            <Promise1/>
                                        </Suspense>}
                                    />
                                </Routes>
                            </div>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        </ConfigProvider>
    );
};

export default Main;
