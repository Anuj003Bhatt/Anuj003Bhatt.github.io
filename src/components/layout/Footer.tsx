import { profile } from '../../data/profile';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-title">ANUJ BHATT</div>
          <div className="footer-note">TECHNICAL LEAD · SYSTEMS ARCHITECT · AHMEDABAD, INDIA</div>
          <div className="footer-note">© {new Date().getFullYear()} Anuj Bhatt</div>
        </div>
        <div className="footer-links">
          <a href={profile.github} rel="noopener noreferrer">GitHub</a>
          <a href={profile.linkedin} rel="noopener noreferrer">LinkedIn</a>
          <a href={profile.resume}>Résumé</a>
        </div>
      </div>
    </footer>
  );
}
