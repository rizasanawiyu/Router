import {Link, Outlet} from 'react-router-dom'

function Layout(){
    return(
        <div>
            <header>
                <h1>User</h1>
                <nav>
                    <Link to="/">Utama</Link>
                    {" | "}
                    <Link to="/users">List User</Link>
                </nav>
            </header>
            <br />
            <main>
                <Outlet/>
            </main>
        </div>
    );
}
export default Layout