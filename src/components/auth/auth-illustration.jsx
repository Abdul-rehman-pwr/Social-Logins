import Image from "next/image";
import tealImage from "../../../public/teal.jpg";

export default function AuthIllustration() {
  return (
    <div className="w-full h-full relative">
      <Image
        src={tealImage}
        alt="Basketball Player"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}
