import {useRef, createContext, useContext} from 'react';
import {useOutlet, useLocation, matchPath} from 'react-router-dom'
import type {FC} from 'react';

export const KeepAliveContext = createContext<KeepAliveLayoutProps>({keepalive: [], keepElements: {}});

const isKeepPath = (aliveList: any[], path: string) => {
    let isKeep = false;
    aliveList.map(item => {
        if (item === path) {
            isKeep = true;
        }
        if (item instanceof RegExp && item.test(path)) {
            isKeep = true;
        }
        if (typeof item === 'string' && item.toLowerCase() === path) {
            isKeep = true;
        }
    })
    return isKeep;
}

export function useKeepOutlets() {
    // 当前路由
    const location = useLocation();
    // 当前路由组件
    const element = useOutlet();
    const {keepElements, keepalive} = useContext<any>(KeepAliveContext);
    const isKeep = isKeepPath(keepalive, location.pathname);
    if (isKeep) {
        keepElements.current[location.pathname] = element;
    }
    return <>
        {
            Object.entries(keepElements.current).map(([pathname, element]: any) => {
                return (
                    <div key={pathname}
                         style={{height: '100%', width: '100%', position: 'relative', overflow: 'hidden auto'}}
                         className="rumtime-keep-alive-layout" hidden={!matchPath(location.pathname, pathname)}>
                        {element}
                    </div>
                )
            })
        }
        <div hidden={isKeep} style={{height: '100%', width: '100%', position: 'relative', overflow: 'hidden auto'}}
             className="rumtime-keep-alive-layout-no">
            {!isKeep && element}
        </div>
    </>
}

interface KeepAliveLayoutProps {
    keepalive: any[];
    keepElements?: any;
    delCache?: (path: string) => void;
}

const KeepAliveLayout: FC<KeepAliveLayoutProps> = (props) => {
    const {keepalive, ...other} = props;
    const keepElements = useRef<any>({})

    function delCache(path: string) {
        keepElements.current[path] = null;
    }

    return (
        <KeepAliveContext.Provider value={{keepalive, keepElements, delCache}} {...other} />
    )
}

export default KeepAliveContext;
