import {useOutletContext, useParams} from 'react-router-dom'

function Comment(){
    const { user_id } = useParams()
    const { userName } = useOutletContext()

    return(
        <div>
        <h2>Comment</h2>

        <p>ID User: {user_id}</p>
        <p>Nama User: {userName}</p>
        <ul>
            <li>Comment Pertama</li>
            <li>Comment Kedua</li>
        </ul>
        </div>
    )
}

export default Comment