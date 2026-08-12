import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { ScrollManager } from './ScrollManager';

export function Layout() {
  return <>
    <ScrollManager />
    <Header />
    <main id="main"><Outlet /></main>
    <Footer />
  </>;
}
