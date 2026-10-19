import {Link, Outlet, useParams} from 'react-router-dom'

const post = [
    { id: 101, title: "Modul 31" },
    { id: 102, title: "Pekerjaan Rumah 32" }
]

function Posts(){
    const {user_id} = useParams()

    return(
        <div>
            <h2>Post User {user_id}</h2>

            <ul>
                {post.map((props) => (
                    <li key={props.id}>
                        {props.title}{" "}
                        <Link to={`/users/${user_id}/posts/${post.id}/edit`}>Edit Post</Link>
                    </li>
                ))}
            </ul>
            <Outlet/>
        </div>
    )
}

export default Posts