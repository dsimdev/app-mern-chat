import React, { useContext } from "react";
import { UserContext } from "../../UserContext";
import SignedInMenu from "./SignedInMenu";
import SignedOutMenu from "./SignedOutMenu";
const Navbar = () => {
  const { user, setUser } = useContext(UserContext);

  const logout = async () => {
    try {
      const res = await fetch("https://api-mern-chat.herokuapp.com/logout", {
        credentials: "include",
      });
      const data = res.json();
      console.log("logout data", data);
      setUser(null);
    } catch (error) {
      console.log(error);
    }
  };
  const menu = user ? <SignedInMenu logout={logout} /> : <SignedOutMenu />;
  return (
    <>
      <div>
        <nav classname="green">
          <div classname="nav-wrapper">
            <a href="/" classname="brand-logo">
              Chat
            </a>
            <a href="#" data-target="mobile-demo" classname="sidenav-trigger">
              <i classname="material-icons">menu</i>
            </a>
            <ul id="nav-mobile" classname="right hide-on-med-and-down">
              {"{"}menu{"}"}
            </ul>
          </div>
        </nav>
        <ul classname="sidenav" id="mobile-demo">
          {"{"}menu{"}"}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
