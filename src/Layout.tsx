import React, {FC} from 'react';
import Navbar from "./Components/UI/Navbar/Navbar";
import "./App.css"
interface LayoutProps{
    children:React.ReactNode
}
const Layout:FC<LayoutProps> = ({children}) => {
    return (
        <div className={"layout"}>
            <Navbar/>
            <main className={"main"}>{children}</main>
        </div>
    );
};

export default Layout;