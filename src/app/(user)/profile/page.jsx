import UserProfile from "@/components/user/user-profile";
import React from "react";

export const metadata = {
  title: "Mares-Profile",
  description: "Login UI using ShadCN + Next.js",
};

function Profile() {
  return (
    <div>
      <UserProfile />
    </div>
  );
}

export default Profile;
