import React, { useEffect, useState } from "react";
import { ClientHeader } from "../../../components";
import { useGetClientProfile } from "../../../services/queries";
import { useAuthContext } from "../../../context";
import InputForm from "../../artisan-admin/Profile/components/InputForm";
import { Loader2 } from "lucide-react";
import { useUpdateClientProfile } from "../../../services/mutation";

const Profile = () => {
  const { data: clientProfileData, isSuccess } = useGetClientProfile();

  const {
    mutate: submitUpdate,
    isSuccess: isSuccessUpdate,
    isPending: isPendingUpdate,
  } = useUpdateClientProfile();

  const { setProfile, profile } = useAuthContext();

  useEffect(() => {
    if (isSuccess) {
      const ProfileDetails = clientProfileData.data;
      setProfile(ProfileDetails);
    }
  }, [isSuccess, isSuccessUpdate]);

  const { company_name, id, user } = clientProfileData?.data || {};

  const [ProfileData, setProfileData] = useState({
    company_name: company_name || "",
    id: id,
    user: user || "",
  });

  useEffect(() => {
    if (isSuccess) {
      const ProfileDetails = clientProfileData.data;
      setProfileData(ProfileDetails);
    }
  }, [isSuccess]);

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitUpdate(ProfileData);
  };

  return (
    <>
      <ClientHeader text="Profile" />
      <main className="flex flex-col  min-h-[100vh] gap-10">
        <form
          className="m-10 pb-10 w-[90%] max-w-3xl mx-auto flex flex-col gap-4"
          onSubmit={handleSubmit}
        >
          <InputForm
            label="username"
            name="user"
            type="text"
            placeholder="Username"
            onChange={handleProfileChange}
            disabled={true}
            value={user || ""}
          />

          <InputForm
            label="Company Name (Name)"
            name="company_name"
            type="text"
            onChange={handleProfileChange}
            placeholder="Company Name"
            value={ProfileData.company_name || ""}
          />

          <button
            className="bg-skyBlue900 px-3 py-1 lg:px-3 lg:py-1 text-white text-base lg:text-lg font-medium rounded-md flex items-center justify-between gap-2 w-fit"
            disabled={isPendingUpdate}
          >
            {isPendingUpdate && (
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            )}
            Update Profile
          </button>
        </form>
      </main>
    </>
  );
};

export default Profile;
