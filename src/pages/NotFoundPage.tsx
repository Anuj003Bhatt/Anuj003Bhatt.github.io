import { Link } from 'react-router-dom';
export function NotFoundPage() { return <section className="page-hero"><div className="container"><div className="breadcrumb">404</div><h1>System path not found.</h1><p className="hero-copy">The requested route does not exist in this architecture.</p><Link className="button button-primary" to="/">Return to system overview ↗</Link></div></section>; }
