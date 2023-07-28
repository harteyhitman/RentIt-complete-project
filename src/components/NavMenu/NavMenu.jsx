import { useState } from "react";
import Logo from "./Logo";
import { GiHamburgerMenu } from "react-icons/gi";
import MobileLink from "./MobileLink";
import NavLinks from "./NavLinks";

const NavMenu = ({ handleOpenLogin }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(true);
  };

  return (
    <div className="flex justify-between top-0 items-center px-6 py-10 transition-all fixed  left-0 right-0 bg-white z-99 hover:z-99 h-12 ">
      <Logo />
      <NavLinks handleOpenLogin={handleOpenLogin} />
      <GiHamburgerMenu
        onClick={handleOpenMenu}
        className="md:hidden text-lg cursor-pointer"
      />
      {openMenu && (
        <MobileLink
          handleOpenLogin={handleOpenLogin}
          setOpenMenu={setOpenMenu}
        />
      )}
    </div>
  );
};

export default NavMenu;
