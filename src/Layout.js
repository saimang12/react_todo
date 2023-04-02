import { Link, Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <div className="Wrap">
            <div className="inner">
                <header className="header">
                    <h1>To Do</h1>
                    <nav className="gnb">
                        <Link to='/'>Home</Link>
                        <Link to='/board'>Board</Link>
                        <Link to='/write'>Write</Link>
                    </nav>
                </header>
                <div className="main">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Layout