import {Link, Outlet, useParams} from 'react-router-dom'

function UserDetail(){
    const {user_id} = useParams()

    return(
        <div>
            <h2>Detail User {user_id}</h2>

            <nav>
                <Link to={`/users/${user_id}/posts`}>Post User</Link>
                {" | "}
                <Link to={`/users/${user_id}/comments`}>Comment User</Link>
            </nav>
            <hr />
            <Outlet/>
        </div>
    )
}

export default UserDetail