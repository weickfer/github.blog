import { BrowserRouter, Routes as Switch, Route  } from 'react-router-dom'
import { Home } from './pages/Home'
import { Post } from './pages/Post'

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/posts/*" element={<Post />} />
      </Switch>
    </BrowserRouter>
  )
}
