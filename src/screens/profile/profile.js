import React from "react";
import { motion } from "framer-motion";
import "../../components/tippy";
import Tippy from "@tippyjs/react";
import Aheader from "../../components/header/admin_header/admin";
import Anavbar from "../../components/navbar/admin_bar/admin";

const Profile = () => {
  return (
    <div>
      <Aheader />
      <Anavbar />
    </div>
  );
};

export default Profile;
