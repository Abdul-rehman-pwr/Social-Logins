"use client";

import { useAuthStore } from "@/stores/auth-store";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import FieldGroup from "@/components/shared/form/field-group";
import { profileFields } from "@/data/profile-data";
import AppButton from "../shared/app-button";
import AvatarUploader from "../shared/avatar-uploader";

const defaultAvatar =
  "https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg";

export default function UserProfile() {
  const { user, logout, hasHydrated } = useAuthStore();
  const router = useRouter();
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    avatar: defaultAvatar,
  });

  useEffect(() => {
    if (!hasHydrated) return;
    if (!user) {
      router.push(`/login`);
    } else {
      setForm({
        fullName: user.fullName || "",
        email: user.email || "",
        phone: user.phone || "",
        location: user.location || "",
        avatar: user.avatar || defaultAvatar,
      });
    }
  }, [user, router]);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSave = () => {
    useAuthStore.setState({ user: { ...user, ...form } });
  };

  const handleLogout = () => {
    logout();
    router.push(`/login`);
  };

  if (!user) return null;

  return (
    <>
      <div className="w-full px-4 flex justify-center">
        <div className="w-full max-w-3xl p-6 sm:p-10 relative space-y-8">
          <div className="flex flex-col items-center gap-3">
            <AvatarUploader
              value={form.avatar}
              onChange={(newAvatar) =>
                setForm((prev) => ({ ...prev, avatar: newAvatar }))
              }
            />
            <h2 className="text-xl font-semibold text-center text-gray-800">
              {"Welcome"}, {form.fullName || "User"}
            </h2>
          </div>

          <FieldGroup
            fields={profileFields}
            values={form}
            onChange={handleChange}
          />

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 w-full">
            <AppButton text="logout" fullWidth={false} onClick={handleLogout} />
            <AppButton
              text="saveChanges"
              onClick={handleSave}
              className="bg-[#66FCF0] hover:bg-teal-600"
              fullWidth={false}
            />
          </div>
        </div>
      </div>
    </>
  );
}
