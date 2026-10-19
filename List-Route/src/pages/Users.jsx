import { Link } from "react-router-dom";

const users = [
    {id: 1, name:"Budi"},
    {id: 2, name:"Bidu"}
]

function Users(){
    return(
        <div>
            <h2>List Users</h2>

            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <Link to={`/users/${user.id}`}>
                            {user.name} - Detail
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Users