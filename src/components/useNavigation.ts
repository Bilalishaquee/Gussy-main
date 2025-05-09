// hooks/useNavigation.ts
import { useNavigate } from 'react-router-dom';

export function useNavigation() {
  const navigate = useNavigate();

  const navigateTo = (path: string) => {
    navigate(path);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  return navigateTo;
}