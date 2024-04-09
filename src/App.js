import { Fragment } from 'react';
import { defaultRouter } from './router/Router';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultLayout from './layout/defaultLayout/DefaultLayout';



function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          {defaultRouter.map((route, index) => {
            let Layout = DefaultLayout
            if (route.layout) {
              Layout = route.layout
            } else if (route.layout === null) {
              Layout = Fragment
            }
            return (
              <Route key={index}
                path={route.path}
                element={<Layout>{route.element}</Layout>}>
              </Route>
            )
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
