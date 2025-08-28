"use client";

import { useRef } from "react";
import Image from "next/image";
import { UploadCloud } from "lucide-react";

export default function AvatarUploader({ value, onChange }) {
  const fileRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      onChange(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="relative group w-[110px] h-[110px] mx-auto">
      <Image
        src={value}
        alt="User Avatar"
        fill
        className="rounded-full border-2 border-gray-200 object-cover"
      />
      <button
        type="button"
        onClick={() => fileRef.current?.click()}
        className="absolute bottom-0 right-0 bg-white border border-gray-300 p-1 rounded-full shadow hover:bg-gray-100 transition"
      >
        <UploadCloud className="w-5 h-5 text-gray-700" />
      </button>
      <input
        ref={fileRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
}
