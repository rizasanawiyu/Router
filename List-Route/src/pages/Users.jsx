import { Link, useLocation } from "react-router-dom";
import {useEffect} from 'react'

const users = [
    {id: 1, name:"Budi"},
    {id: 2, name:"Bidu"}
]

function Users(){
    const location = useLocation()

    useEffect(() => {
        handleUrlChange(location.pathname)
    }, [location.pathname]);

    function handleUrlChange(pathname){
        console.log('URL Berubah: ', pathname)
    }
    return(
        <div>
            <h2>List Users</h2>

            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <Link to={`/users/${user.id}`} state={{username: user.name}}>
                            {user.name} - Detail
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Users