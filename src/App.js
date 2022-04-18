import { Route, Routes, Navigate} from 'react-router-dom';
import Header from './components/Header/Header';
import { lazy, Suspense } from 'react';

const HomePage = lazy(() => 
  import('./components/HomePage/HomePage').then(module => ({ default: module.HomePage}))
);
const MovieDetailsPage = lazy(() => 
  import('./components/MovieDetailsPage/MovieDetailsPage').then(module => ({ default: module.MovieDetailsPage}))
);
const MoviesPage = lazy(() => 
  import('./components/MoviesPage/MoviesPage').then(module => ({ default: module.MoviesPage}))
);

export const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={''}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId/*" element={<MovieDetailsPage />}>
            {/* <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} /> */}
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
};