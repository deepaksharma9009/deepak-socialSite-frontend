import {
  Alert,
  Backdrop,
  Button,
  Card,
  CircularProgress,
  Grid,
  Snackbar,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import RegistrationForm from "./RegisterForm";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { Login } from "@mui/icons-material";
import LoginForm from "./LoginForm";
import ResetPasswordRequest from "./ResetPasswordRequest";
import { useSelector } from "react-redux";
import ResetPassword from "./ResetPassword";

const Authentication = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [openSnakbar, setOpenSnakbar] = useState(false);
  const { auth } = useSelector((store) => store);

  const handleClose = () => {
    setOpenSnakbar(false);
  };

  useEffect(() => {
    if (auth.resetPasswordLink) {
      setOpenSnakbar(true);
    }
  }, [auth.resetPasswordLink]);
  return (
    <div className="">
      <Grid container>
        <Grid className="h-screen overflow-hidden" item xs={7}>
          <img
            className="h-full w-full"
            src="https://cdn.pixabay.com/photo/2014/06/18/19/37/social-371648_1280.png"
            alt=""
          />
        </Grid>
        <Grid item xs={5}>
          <div className="px-20 flex flex-col justify-center h-full">
            <div className="card p-8">
              <div className="flex flex-col items-center mb-5 space-y-1">
                <h1 className="logo text-center ">Deepak Social Park</h1>
                <p className="text-center text-sm w-[70%]">
                  Unite, Inspire, Share: Your Story, Your Network, Your Way
                </p>
              </div>

              <Routes>
                <Route path="/" element={<RegistrationForm />} />
                <Route
                  path="/reset-password-req"
                  element={<ResetPasswordRequest />}
                />
                <Route path="/reset-password" element={<ResetPassword />} />
                <Route path="/register" element={<RegistrationForm />} />
                <Route path="/login" element={<LoginForm />} />
              </Routes>
            </div>
          </div>
        </Grid>
      </Grid>

      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={openSnakbar}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          {auth.resetPasswordLink}
        </Alert>
      </Snackbar>

      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={auth.loading}
        // onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};

export default Authentication;
