import NavMenu from "./NavMenu";
import "./globals.css";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body>
        <NavMenu />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
