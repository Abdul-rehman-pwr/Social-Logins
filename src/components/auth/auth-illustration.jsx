import Image from "next/image";
import pandaImage from "../../../public/panda.png";

export default function AuthIllustration() {
  return (
    <div className="w-full h-full relative">
      <Image
        src={pandaImage}
        alt="Basketball Player"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}
