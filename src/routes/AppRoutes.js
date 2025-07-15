import { Routes, Route } from 'react-router';
import DashboardLayout from '../layouts/DashboardLayout/DashboardLayout';
import NotificationManage from '../pages/NotificationManage/NotificationManage';
import ReportsPage from '../pages/ReportsPage/ReportsPage';
import ActivityPage from '../pages/ActivityPage/ActivityPage';
import UserManagement from '../pages/UserManagement/UserManagement';
import WalletPage from '../pages/WalletPage/WalletPage';
import Dashboard from '../pages/Dashboard/Dashboard';
import Contests from '../pages/Contests/Contests';
import UserProfile from '../pages/UserProfile/UserProfile';
import CreateNotification from '../modals/CreateNotification/CreateNotification';

function AppRoutes() {
  return (
    <Routes>
      {/* Standalone Routes */}
     
      {/*  */}
      {/* Routes inside Dashboard layout */}
      <Route path="/" element={<DashboardLayout />}>
      <Route path="/checkup" element={<CreateNotification />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/usermanagement" element={<UserManagement />} />
      <Route path="/contests" element={<Contests />} />
      <Route path="/notifications" element={<NotificationManage />} />
      <Route path="/walletpage" element={<WalletPage />} />
      <Route path="/reports" element={<ReportsPage />} />
      <Route path="/activity" element={<ActivityPage />} />
      <Route path="/usermanagement/userprofile/:userId" element={<UserProfile />} />

      


      
      </Route>
      ;{/* 404 fallback */}
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  );
}

export default AppRoutes;
