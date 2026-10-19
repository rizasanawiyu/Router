import {useParams} from 'react-router-dom'

function Comment(){
    const {user_id}= useParams()
    return(
        <div>
        <h2>Comment</h2>

        <ul>
            <li>Comment Pertama</li>
            <li>Comment Kedua</li>
        </ul>
        </div>
    )
}

export default Comment