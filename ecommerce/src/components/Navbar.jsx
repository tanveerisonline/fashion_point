import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";

function Navbar() {
  const style = "text-[14px] cursor-pointer ml-[25px] font-bold";
  return (
    <div className="navbar h-[60px] shadow-md relative z-10">
      <div className="wrapper pl-[20px] pr-[20px] pt-[10px] pb-[10px] flex justify-between">
        <div className="left flex flex-1 items-center">
          <div className="language cursor-pointer text-[16px]">En</div>
          <div className="searchInput flex items-center ml-[10px] p-[5px] border-[2px] rounded-md border-lightgrey border-solid focus-within:border-[#8a4af3] transition-all">
            <input className="input outline-none" type="text" />
            <Search
              className="searchButton cursor-pointer text-[#8a4af3]"
              // style={{ fontSize: "24px" }}
            />
          </div>
        </div>
        <div className="right flex flex-1 items-center justify-center">
          <div className="logo text-lg font-bold">Fashion Point</div>
        </div>
        <div className="center flex flex-1 items-center  justify-end">
          <div className={style}>Register</div>
          <div className={style}>SignIn</div>
          <div className={style}>
            <Badge badgeContent={2} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
