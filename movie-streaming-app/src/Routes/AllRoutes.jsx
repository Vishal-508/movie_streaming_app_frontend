import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import AddMoviepage from "./AddMoviepage";
import MovieDetailsPage from "./MovieDetailsPage";
import Login from "./Login";
import { PrivateRoute } from "./PrivateRoute";

const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Homepage />{" "}
          </PrivateRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route
        path="/movieDetails/:id"
        element={
          <PrivateRoute>
            <MovieDetailsPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/addmovie"
        element={
          <PrivateRoute>
            <AddMoviepage />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AllRoutes;
