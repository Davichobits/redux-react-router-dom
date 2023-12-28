import {Header} from '../Header/Header'
import { CartOverview } from '../CartOverview/CartOverview'
import { Outlet, useNavigation } from 'react-router-dom'
import {Loader} from '../Loader/Loader'

export const AppLayout = () => {

  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <>
      {
        isLoading && <Loader />
      }
      <Header />
      <Outlet />
      <CartOverview />
    </>
  )
}