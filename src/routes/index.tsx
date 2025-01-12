import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from '@/components/templates/layout';
import { Checkout } from '@/pages/checkout';
import { Success } from '@/pages/success';
import { Home } from '@/pages/home';

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/success" element={<Success />} />
        </Route>
      </Routes>
    </Router>
  );
};
