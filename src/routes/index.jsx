import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { HomeLayout } from "../layouts";
import PrivateRouteWrapper from "../auth-wrappers/PrivateRouteWrapper";
import {
  Home,
  About,
  Services,
  Contact,
  SearchArtisan,
  Decision,
  Profile,
  Payment,
  Login,
  Register,
  ArtisanLayout,
  CreateService,
  Gallery,
  History,
  Pricing,
  ArtisanProfile,
  Reviews,
  Schedule,
  NotFound,
  ClientProfile,
} from "../pages";
import ClientLayout from "../layouts/ClientLayout";

const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="search-artisans" element={<SearchArtisan />} />
          <Route path="artisan-profile/:id" element={<Profile />} />
          <Route path="decision" element={<Decision />} />
        </Route>

        <Route path="payment" element={<Payment />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        <Route
          path="/artisan"
          element={<PrivateRouteWrapper component={<ArtisanLayout />} />}
        >
          <Route index element={<ArtisanProfile />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="history" element={<History />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="create-a-service" element={<CreateService />} />
        </Route>

        <Route path="/client" element={<ClientLayout />}>
          <Route index element={<ClientProfile />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
