import React from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { closeMenu } from "../../redux/features/artisan-admin/ToggleMenuSlice";
import { useDispatch } from "react-redux";

const NavigationLinks = [
  { id: 1, link: "/artisan", label: "profile" },
  { id: 2, link: "/artisan/gallery", label: "gallery" },
  { id: 3, link: "/artisan/pricing", label: "Service" },
  { id: 7, link: "/artisan/bookings", label: "bookings" },
  { id: 4, link: "/artisan/escrow", label: "escrow" },
  // { id: 5, link: "/artisan/history", label: "history" },
  // { id: 6, link: "/artisan/reviews", label: "reviews" },
];

const ArtisanNav = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  return (
    <div className="flex-1 flex items-center">
      <div className="flex flex-col  items-center w-full">
        <div className="w-[70%] flex flex-col gap-3">
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

export default ArtisanNav;
