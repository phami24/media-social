import React, { Component } from "react";
import Sidebar from "../Components/Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Profile from "./Profile";
export default class Router extends Component {
  render() {
    return (
      <div>
        <div className="flex">
          <div className="w-[20%] border border-1-slate-500 ">
            <Sidebar />
          </div>
          <div className="w-full">
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/username" element={<Profile />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    );
  }
}
