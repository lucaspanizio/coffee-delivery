import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from '@/components/templates/layout';
import { Checkout } from '@/pages/checkout';
import { Home } from '@/pages/home';

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </Router>
  );
};
