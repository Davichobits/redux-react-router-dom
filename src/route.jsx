import { createBrowserRouter} from 'react-router-dom';
import { AppLayout } from './ui/atoms/AppLayout/AppLayout';
import { Home } from './features/molecules/Home/Home'
import { Error } from './ui/atoms/Error/Error'
import { Menu } from './features/molecules/Menu/Menu';
import { Cart } from './features/molecules/Cart/Cart';
import { CreateOrder } from './features/molecules/Order/CreateOrder';
import { Order } from './features/molecules/Order/Order';

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/order/new',
        element: <CreateOrder />,
      },
      {
        path: '/order/:orderId',
        element: <Order />,
      }
    ],
  },
]);