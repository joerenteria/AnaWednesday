import React from "react";
import { Link } from "react-router-dom";

function NavBar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (<div>

      <Link className="link1" as={Link} to="/signup">
          sign up
        </Link>

      <Link className="link1" as={Link} to="/login">
          log in
        </Link>

        <Link className="link1" as={Link} to="/new">
          create page
        </Link>
        <Link className="link1" as={Link} to="/account">
          my account
        </Link>
       
        <Link className="link1" to="/" onClick={handleLogoutClick}>logout</Link>

</div>
  );
}

export default NavBar;
