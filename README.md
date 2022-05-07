# @chanjs/keepalive
[![NPM Version](http://img.shields.io/npm/v/@chanjs/keepalive.svg?style=flat)](https://www.npmjs.org/package/@chanjs/keepalive.svg)
[![NPM Downloads](https://img.shields.io/npm/dm/@chanjs/keepalive.svg?style=flat)](https://npmcharts.com/compare/@chanjs/keepalive?minimal=true)
[![Install Size](https://packagephobia.now.sh/badge?p=@chanjs/keepalive)](https://packagephobia.now.sh/result?p=@chanjs/keepalive)

# 介绍
简单实现 react 的 keepalive 功能。
# 使用
```tsx
import React, {useState, useContext,} from 'react';
import ReactDOM from 'react-dom/client';
import {HashRouter, Routes, Route, Link, useLocation} from "react-router-dom";

import KeepAliveLayout, {useKeepOutlets, KeepAliveContext} from '@chanjs/keepalive'

const Top = () => {
    const {pathname} = useLocation();
    // 使用useKeepOutlets代替useOutlet
    const child = useKeepOutlets();
    return (
        <div>
            <p>当前的路由：{pathname}</p>
            <div>{child}</div>
        </div>
    )
}

const Home = () => {
    const [num, setNum] = useState(0)
    return (
        <>
            <div>{num}</div>
            <div>
                <button onClick={() => {
                    setNum(num - 1)
                }}>数字减一
                </button>
            </div>
            <Link to='/users'>go Users</Link>
        </>);
};

const Users = () => {
    const [num, setNum] = useState(0)
    // 通过useContext(KeepAliveContext)获取delCache删除缓存事件
    const {delCache} = useContext(KeepAliveContext)
    const {pathname} = useLocation()
    return (
        <>
            <div>{num}</div>
            <div>
                <button onClick={() => {
                    setNum(num + 1)
                }}>数字加一
                </button>
            </div>
            <div>
                {/* 可以通过delCache事件控制删除缓存 */}
                <button onClick={() => {
                    delCache(pathname)
                }}>清除缓存
                </button>
            </div>
            <Link to='/'>go Home</Link>
        </>);
};

const App = () => {
    return (
        //KeepAliveLayout包裹路由，keepalive通过数组传递需要keepalive的路由，支持正则表达式
        <KeepAliveLayout keepalive={['/users']}>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Top/>}>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/users" element={<Users/>}/>
                    </Route>
                </Routes>
            </HashRouter>
        </KeepAliveLayout>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));
```
