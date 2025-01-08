import { Home } from '@/pages/home';
import { Layout } from '@/components/templates/layout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
};
