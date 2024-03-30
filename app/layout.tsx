import AuthProvider from "./AuthProvider";
import NavMenu from "./NavMenu";
import "./globals.css";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <AuthProvider>
      <html lang="en">
        <body>
          <div className="container">
            <NavMenu />
            {children}
          </div>
        </body>
      </html>
    </AuthProvider>
  );
};

export default RootLayout;
