import Link from "next/link";

const SOCIAL_LINKS = [
  { href: "https://www.linkedin.com/in/agneshjha/", icon: "lab la-linkedin" },
  { href: "https://x.com/agneshjha1", icon: "lab la-twitter" },
  { href: "https://www.instagram.com/iam_agnesh07/", icon: "lab la-instagram" },
  { href: "https://www.behance.net/agneshjha", icon: "lab la-behance" },
];

export default function LeftSidebar({ photoSrc }) {
  return (
    <div className="left-sidebar">
      <div className="sidebar-header d-flex align-items-center justify-content-center">
        <Link href="/" target="_blank" className="text-center">
          <img
            src="/assets/images/new/Agnesh-jha-logo.png"
            alt="Agnesh Jha Logo"
            className="site-logo"
          />
        </Link>
      </div>
      <img className="me" src={photoSrc} alt="Agnesh Jha" />
      <a
        href="mailto:agneshjha07@gmail.com"
        target="_blank"
        rel="noreferrer"
        style={{ marginBottom: 15, display: "block" }}
      >
        <h2 className="email">agneshjha07@gmail.com</h2>
      </a>
      <a
        href="tel:+919899733658"
        target="_blank"
        rel="noreferrer"
        style={{ marginTop: 10, marginBottom: 20, display: "block" }}
      >
        <h2 className="email">+91 98997 33658</h2>
      </a>
      <ul className="social-profile d-flex align-items-center flex-wrap justify-content-center">
        {SOCIAL_LINKS.map((s) => (
          <li key={s.href}>
            <a href={s.href} target="_blank" rel="noreferrer">
              <i className={s.icon} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
