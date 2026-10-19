import {NavLink, Outlet} from 'react-router-dom'
import Breadcrumb from './Breadcrumb'

function Layout(){
    return(
        <div>
            <header>
                <h1>User</h1>
                <nav>
                    <NavLink to="/">Utama</NavLink>
                    {" | "}
                    <NavLink to="/users">List User</NavLink>
                </nav>
            </header>
            <br />
            <main>
                <Breadcrumb/>
                <br />
                <Outlet/>
            </main>
        </div>
    );
}
export default Layout