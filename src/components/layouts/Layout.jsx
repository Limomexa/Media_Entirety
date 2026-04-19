import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden bg-white">
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "url('/background-img.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
