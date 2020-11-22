import React, { useEffect, useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from '../../utils/UserContext';
import AuthButton from "../AuthButton";

const buttonStyle = {
  marginRight: 10
};

function Nav() {

  const history = useHistory();

  const [user, setUser] = useContext(UserContext)

  const [open, setOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const updateWidth = () => {
    if (open && width > 991) {
      setOpen(false);
    }
    setWidth(window.innerWidth)
  };

  useEffect(() => {

    window.addEventListener("resize", updateWidth);
    return () => {
      window.removeEventListener("resize", updateWidth);
    }
  }, [])


  if (!user) {
    return (
      <div></div>
    )
  }
  else {
    return (

      <nav className="navbar myNav" role="navigation" aria-label="main navigation">
        <div className="navbar-brand ml-2">
          <Link to="/"><img style={{ width: "100px" }} alt="logo" />
          </Link>
        </div>
        <div className="logoNav navbar-item">Pet Pals</div>

        <div className="navbar-end">
          <Link className="navbar-item" to={`/explore/${user}`}>
            Add Pet
                        </Link>

          <Link className="navbar-item" to={`/mypets/${user}`}>
            My pets
          </Link>

          <Link className="navbar-item" to={`/addpet/${user}`} onClick={() => history.push('/addpet')}>
            Add a pet
                        </Link>
          <div className="navbar-item">
            <AuthButton />
          </div>
        </div>
      </nav>

    )
  }
}

export default Nav