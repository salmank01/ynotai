import Header from "./Header";
import Landing from "./Landing";
export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Landing />
      {children}
    </>
  );
}
