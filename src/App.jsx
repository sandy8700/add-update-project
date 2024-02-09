import './App.css'
import AddNewItems from './components/AddNewItem'
import ListItems from './components/ListItems'
import { Route, Routes } from 'react-router-dom';
import UpdateItems from './components/UpdateItems';
import ViewData from './components/ViewData';

function App() {

  return (
    <>
        <Routes>
          <Route path='/' element={<ListItems />} exact>Home</Route>
          <Route path='/create' element={<AddNewItems />} >Create</Route>
          <Route path='/users/:id' element={<UpdateItems />}>Edit</Route>
          <Route path='/view/:id' element={<ViewData />}>View</Route>
        </Routes>
      
      
    </>
  )
}

export default App;
