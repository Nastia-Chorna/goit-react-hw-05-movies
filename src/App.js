import { Route, Routes} from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';

export const App = () => {
    return (
      <div>
        <Routes>


        <Route path='/' element={<Navigation />}>
        <Route path='home' element={<div>HomePage</div>} />
        <Route path='movies' element={<div>MoviesPage</div>} />
        <Route path='/movies/:movieId/*' element={<div>MovieDetailsPage</div>} />
      

        </Route>
        </Routes>
    </div>
    )
}