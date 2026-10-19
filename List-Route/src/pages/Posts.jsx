import {Link, Outlet, useParams} from 'react-router-dom'

const posts = [
    { id: 11, title: "Modul 31" },
    { id: 12, title: "Pekerjaan Rumah 32" },
]

function Posts(){
    const {user_id} = useParams()

    return(
        <div>
            <h2>Post User {user_id}</h2>

            <ul>
                {posts.map((props) => (
                    <li key={posts.id}>
                        {posts.title}{" "}
                        <Link to={`/users/${user_id}/posts/${posts.id}/edit`}>Edit Post</Link>
                    </li>
                ))}
            </ul>
            <Outlet/>
        </div>
    )
}

export default Posts