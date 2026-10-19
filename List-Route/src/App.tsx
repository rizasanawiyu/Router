import {Routes, Route} from 'react-router-dom'

import Layout from './components/Layout'
import Home from './pages/Home'
import Users from './pages/Users'
import UserDetail from './pages/UserDetail'
import Posts from './pages/Posts'
import EditPost from './pages/EditPost'
import Comments from './pages/Comment'

function App() {

  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route index element={<Home/>}/>

        <Route path='users'>
          <Route index element={<Users/>}/>
          
            <Route path=':user_id' element={<UserDetail/>}>
              <Route path='posts' element={<Posts/>}>
                <Route path=':post_id/edit' element={<EditPost/>}/>
              </Route>
              <Route path='comments' element={<Comments/>}/>
            </Route>
        </Route>
      </Route>
    </Routes>
  )
}

export default App
