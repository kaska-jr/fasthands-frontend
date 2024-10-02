import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useAuthContext } from "../../context";
import { useNavigate } from "react-router-dom";
import { Button, Dialog, Flex } from "@radix-ui/themes";

const ArtisanLogout = () => {
  const { logout } = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    localStorage.clear();
    navigate("/login");
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <div className="h-28 flex items-center cursor-pointer">
          <div className="w-[70%] items-center flex justify-center">
            <button className="border border-red-600 px-2 py-1 lg:px-3 lg:py-2 text-red-600 text-base lg:text-xl font-medium rounded-md flex items-center justify-between gap-3">
              <span>Logout</span>
              <IoIosArrowRoundForward />
            </button>
          </div>
        </div>
      </Dialog.Trigger>

      <Dialog.Content maxWidth="450px">
        <Dialog.Title>Are you sure you want to logout?</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          You can always log in again.
        </Dialog.Description>

        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </Dialog.Close>

          <Button
            onClick={handleLogout}
            className=" cursor-pointer !text-skyBlue900 !border !border-skyBlue900 bg-white hover:!bg-skyBlue900 hover:!text-white w-fit px-3 rounded-md h-8 flex justify-center items-center"
          >
            Logout
          </Button>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default ArtisanLogout;
