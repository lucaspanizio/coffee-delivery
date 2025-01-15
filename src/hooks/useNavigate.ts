import { useNavigate as useNavigateRRD, NavigateOptions } from 'react-router-dom';

export type AppRoutes = '/' | '/checkout' | '/success';

export const useNavigate = (): ((path: AppRoutes, options?: NavigateOptions) => void) => {
  const navigateRRD = useNavigateRRD();

  const navigate = (path: AppRoutes, options?: NavigateOptions) => {
    navigateRRD(path, options);
  };

  return navigate;
};
