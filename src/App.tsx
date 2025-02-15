import './App.css'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './Pages/Landingpage/Page.tsx'
import Login from './Pages/Auth/Login.tsx'
import Signup from './Pages/Auth/Signup.tsx'
import Dashboard from './Pages/Dashboard/Page.tsx'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import SliderReducer from './features/SliderFeature.tsx'
import CollectionName from './features/CollectionName.tsx'
import DraftPopup from './features/DraftPopup.tsx'

export const store = configureStore({
  reducer: {
    slider: SliderReducer,
    collection_name: CollectionName,
    draft_popup: DraftPopup
  }
})

// export type IRootState = ReturnType<typeof store.getState>

function App() {

  return (
   
   <div className='app'>


   <Provider store={store}> 
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='*' element={<LandingPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/library/*' element={<Dashboard />} />
      </Routes>  
    </Provider>

   </div>
  )
}

export default App
