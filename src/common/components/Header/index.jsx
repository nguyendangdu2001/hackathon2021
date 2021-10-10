import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container flex items-center justify-between mx-auto">
      <Link to="/" className="text-2xl font-bold">
        Vaccine Covid
      </Link>
      <div className="flex space-x-2 font-semibold">
        <Link to="/register-vaccine" className="p-3">
          Đăng ký tiêm
        </Link>
        <Link to="/lookup" className="p-3">
          Tra cứu
        </Link>
      </div>
    </div>
  );
};

export default Header;
