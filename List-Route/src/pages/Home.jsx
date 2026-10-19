import {Link} from 'react-router-dom'

function Home(){
    return(
        <div>
            <h2>Selamat Datang</h2>

            <Link to="/users">List Users</Link>
        </div>
    )
}

export default Home