import React from 'react';
import type { FC } from 'react';
export declare const KeepAliveContext: React.Context<KeepAliveLayoutProps>;
export declare function useKeepOutlets(): JSX.Element;
interface KeepAliveLayoutProps {
    keepalive: any[];
    keepElements?: any;
    delCache?: (path: string) => void;
}
declare const KeepAliveLayout: FC<KeepAliveLayoutProps>;
export default KeepAliveLayout;
