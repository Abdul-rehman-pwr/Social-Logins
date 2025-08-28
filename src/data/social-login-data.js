import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export const socialLoginButtons = [
  {
    id: "google",
    icon: FcGoogle,
    bgColor: "bg-white",
    hoverColor: "hover:bg-red-50",
    iconSize: "w-5 h-5",
    onClickProp: "handleGoogleLogin",
  },
  {
    id: "github",
    icon: FaGithub,
    bgColor: "bg-white",
    hoverColor: "hover:bg-gray-100",
    iconSize: "w-5 h-5 text-gray-800",
    onClickProp: "handleGithubLogin",
  },
];
