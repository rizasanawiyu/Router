import {Link, Outlet, useParams, useLocation} from 'react-router-dom'

const userNames = {
    1: 'Budi',
    2: 'Bidu'
}

function UserDetail(){
    const {user_id} = useParams()
    const location = useLocation()

    const userName = location.state?.userName ?? userNames[user_id] ?? 'User Tidak Ada'

    return(
        <div>
            <h2>Detail User {user_id}</h2>

            <p>ID User: {user_id}</p>
            <p>Nama User: {userName}</p>
            <nav>
                <Link to={`/users/${user_id}/posts`}>Post User</Link>
                {" | "}
                <Link to={`/users/${user_id}/comments`}>Comment User</Link>
            </nav>
            <hr />
            <Outlet context={{userName}}/>
        </div>
    )
}

export default UserDetail