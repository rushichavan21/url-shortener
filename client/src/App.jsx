
  import { Outlet } from '@tanstack/react-router'
import ServerDown from './components/ServerDown/ServerDown'
  const App = () => {
    return (
      <div >
        {/* <ServerDown/> */}
    <Outlet/>
      </div>
    )
  }

  export default App