import React from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { closeMenu } from "../../redux/features/artisan-admin/ToggleMenuSlice";
import { useDispatch } from "react-redux";

const NavigationLinks = [
  {
    id: 1,
    link: "/client",
    label: "Profile",
  },
  { id: 2, link: "/client/search-artisan", label: "Find Skills" },
  { id: 3, link: "/client/chat/new-chat", label: "Messaging" },
  { id: 4, link: "/client/bookings", label: "Bookings" },
  { id: 5, link: "/client/commissions", label: "Commissions" },
  { id: 6, link: "/client/escrow", label: "Escrow" },
];

const ClientNav = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  return (
    <div className="flex-1 flex items-center">
      <div className="flex flex-col  items-center w-full">
        <div className="w-[70%] flex flex-col gap-4 lg:gap-4">
          {NavigationLinks.map((NavigationLink) => {
            const { id, link, label } = NavigationLink;
            return (
              <NavLink
                key={id}
                to={link}
                onClick={() => dispatch(closeMenu())}
                className={`${
                  pathname === link ? "border-white" : "border-transparent"
                } border-b-2 text-white capitalize font-semibold text-base lg:text-xl w-fit px-1 lg:px-2`}
              >
                {label}
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ClientNav;
