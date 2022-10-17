import React from "react";

const SignedInMenu = ({ logout }) => {
  return (
    <li onclick="{logout}">
      <a href="#">Logout</a>
    </li>
  );
};

export default SignedInMenu;
