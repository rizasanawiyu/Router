import {Link, useParams} from 'react-router-dom'

function EditPost(){
    const {user_id, post_id} = useParams()

    return(
        <div>
            <h2>Edit Post {post_id}</h2>

            <label htmlFor="title">Judul Post:</label>
            <br />

            <input id='title' type="text" defaultValue={`Post ${post_id}`}/>
            <br />

            <Link to={`/users/${user_id}/posts`}>Kembali</Link>
        </div>
    )
}

export default EditPost