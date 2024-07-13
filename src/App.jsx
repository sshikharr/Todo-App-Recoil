import TodoInput from './Components/TodoInput'
import Button from './Components/Button'
import Filter from './Components/Filter'
import './App.css'
import List from './Components/List'
import { RecoilRoot } from 'recoil'

function App() {

  return (
    <>
    <RecoilRoot>
      <TodoInput/>
      <br></br>
      <Filter/>
      <br></br>
      <Button></Button>
      <br></br>
      <List/>
    </RecoilRoot>
    </>
  )
}

export default App
