import React, { Component } from "react";
import NavBar from "./components/navbar";
import Products from "./components/products";
import {Route, Routes, Navigate} from 'react-router-dom'
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="content">
          <Routes>

            <Route path="/products/:id" Component={ProductDetails}/>
            <Route path="/products" Component={Products}/>
            <Route path="/posts/:year/:month" Component={Posts}/>
            <Route path="/admin" Component={Dashboard}/>
            <Route path="/messages" element={<Navigate to="/posts" />} />

            <Route path="/not-found" Component={NotFound}/>
            <Route path="/" exact Component={Home}/>
            <Route path="not-found" element= {<Navigate to="/not-found" />} />

          </Routes>
            
        </div>
      </div>
    );
  }
}

export default App;
