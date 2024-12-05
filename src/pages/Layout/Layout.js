import { Outlet } from 'react-router-dom';
import './Layout.css';
import '../Footer/Footer'
import Footer from '../Footer/Footer';
import Topbar from '../Topbar/Topbar';

const Layout = () => {
  return (
    <div className="layout-container">

      <Topbar />

      <div className="content">
        <Outlet />
      </div>

      <Footer />
      
    </div>
  );
};

export default Layout;
