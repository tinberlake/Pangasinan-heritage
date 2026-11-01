import "../styles/tokens.css";
import "../styles/base.css";
import "../styles/atoms.css";
import "../styles/molecules.css";
import "../styles/organisms.css";
import "../styles/pages.css";
import HeaderNavigation from "../components/organisms/HeaderNavigation";

export const metadata = {
  title: {
    default: "Pangasinan Heritage Digital Showcase",
    template: "%s | Pangasinan Heritage",
  },
  description:
    "Discover natural, historical and religious heritage sites in Pangasinan, from the Hundred Islands to the Bolinao Lighthouse.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <HeaderNavigation />
        <main id="main">{children}</main>
      </body>
    </html>
  );
}
