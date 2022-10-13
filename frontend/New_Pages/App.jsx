import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import { Switch, BrowserRouter as Router, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import SignUp from "./components/SignUpPage";
import NewListings from "./components/NewListingPage";
import SellPage from "./components/SellPage";
import WishlistPage from "./components/WishlistPage";
import GroupPage from "./components/GroupPage";
import CreateGroupPage from "./components/CreateGroupPage"
import MyGroupsPage from "./components/MyGroupsPage"
import ProductInformationPage from "./components/ProductInformationPage" 
import CheckoutPage from "./components/CheckoutPage";
import CategoryPage from "./components/CategoryPages";
import GroupInfoPage from "./components/GroupPopUp";
import SellCategoryPage from "./components/SellPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home-page">
        <HomePage/>
        </Route>
        <Route path="/:path(|login-page)">
          <LoginPage/>
        </Route>
        <Route path="/sign-up-page">
          <SignUp/> 
        </Route>
        <Route path="/new-listings-page">
          <NewListings/>
        </Route>
        <Route path="/sell-page/:sellerId">
          <SellPage/>
        </Route>
        <Route path="/wishlist-page">
          <WishlistPage/>
        </Route>
        <Route path="/group-page">
          <GroupPage/>
        </Route>
        <Route path="/create-group-page">
          <CreateGroupPage/>
        </Route>
        <Route path="/my-groups-page">
          <MyGroupsPage/>
        </Route>
        <Route path="/product-page/:productId">
          <ProductInformationPage/>
        </Route>
        <Route path="/checkout-page">
          <CheckoutPage/>
        </Route>
        <Route path="/category-page/:categoryId">
          <CategoryPage/>
        </Route>
        <Route path="/group-info-page/:groupId">
          <GroupInfoPage/>
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;

