import logo from './logo.svg';
import Navbar from './component/navbar';
import User from './component/user';
import Usercreate from './component/usercreate';
import ViewProfile from './component/ViewProfile';
import Edituser from './component/Edituser';

import { Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div >
     <Navbar />
     <Routes>
      {/* ใช้ลิ้งหน้าโดยเข้าถึงผ่า path */}
      <Route path='/' element={<User />}></Route>
      <Route path='create' element={<Usercreate />}></Route>
      <Route path='ViewProfile/:id' element={<ViewProfile />}></Route>
      <Route path='Edituser/:id' element={<Edituser />}></Route>
     </Routes>
     
    </div>
  );
}

export default App;
