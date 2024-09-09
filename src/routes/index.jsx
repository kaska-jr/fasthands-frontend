import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
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
  CreateService,
  Gallery,
  History,
  Pricing,
  ArtisanProfile,
  Reviews,
  Schedule,
  ClientProfile,
} from "../pages";
import { ClientLayout, ArtisanLayout, HomeLayout } from "../layouts";
import { Loading, NotFound } from "../components";

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loading />}>
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

        <Route
          path="/client"
          element={<PrivateRouteWrapper component={<ClientLayout />} />}
        >
          <Route index element={<ClientProfile />} />
          <Route path="search-artisan" element={<SearchArtisan />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
