import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SellPage from "./pages/Sell";
import Profile from "./pages/Profile";
import Listings from "./pages/Listings";
import AboutUs from "./pages/AboutUs";
import ListingDetails from "./pages/ListingDetails";
import Page404 from "./pages/404Page";
import MessagesHome from "./pages/MessagesHome";
import RegisterAgent from "./pages/RegisterAgent";
import NotificationHome from "./pages/NotificationsHome";
import NotificationDetails from "./pages/NotificationDetails";
import ConnectionStatus from "./components/connection_status";
import EditListingPage from "./pages/EditListingPage";
import ChatLayout from "./pages/ChatLayout";
import OfferListingsForm from "./pages/OfferListing";

function App() {
  return (
    <>
      <ConnectionStatus />
      <BrowserRouter>
        <Routes>
          {/* TEST ROUTES  */}
          <Route path="/test/index" element={<Home />} />
          {/* Main ROUTES */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register/agent" element={<RegisterAgent />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/home" element={<Home />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/listings/:listing_id" element={<ListingDetails />} />
          <Route path="/sell" element={<SellPage />} />
          <Route path="/sell/listing" element={<OfferListingsForm />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/listings/:listing_id}" element={<ListingDetails />} />
          <Route
            path="/profile/edit_listing/:listing_id"
            element={<EditListingPage />}
          />
          <Route path="*" element={<Page404 />} />
          <Route path="/messages" element={<ChatLayout />} />

          <Route path="/messages/:user_id" element={<MessagesHome />} />
          <Route path="/notifications" element={<NotificationHome />} />
          <Route
            path="/notifications/:notification_id"
            element={<NotificationDetails />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
