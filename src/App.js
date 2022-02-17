import { Route, Routes} from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';

export const App = () => {
    return (
      <div>
        <Routes>


        <Route path='/' element={<Navigation />}></Route>


        </Routes>
    </div>
    )
}