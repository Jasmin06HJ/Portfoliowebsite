import { Outlet } from 'react-router';
import { Navbar } from '../components/Navbar';

export function RootLayout() {
  return (
    <div className="min-h-screen bg-[#101722]">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
