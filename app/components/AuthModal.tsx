"use client";

import { useEffect, useState, useContext } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AuthModalInputs from "./AuthModalInputs";
import useAuth from "../../hooks/useAuth";
import { AuthenticationContext } from "../context/AuthContext";
import { Alert, CircularProgress } from "@mui/material";

const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
};

export default function AuthModal({ isSignIn }: { isSignIn: boolean }) {
    const { signin, signup } = useAuth();
    const [open, setOpen] = useState(false);

    const { loading, data, error, setAuthState } = useContext(
        AuthenticationContext
    );

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value,
        });
    };

    const handleClick = () => {
        if (isSignIn) {
            signin(
                {
                    email: inputs.email,
                    password: inputs.password,
                },
                handleClose
            );
        } else {
            signup(inputs, handleClose);
        }
    };

    const [inputs, setInputs] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        city: "",
        password: "",
    });

    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        if (isSignIn) {
            if (inputs.email && inputs.password) {
                return setDisabled(false);
            }
        } else {
            if (
                inputs.firstName &&
                inputs.lastName &&
                inputs.email &&
                inputs.password &&
                inputs.city &&
                inputs.phone
            ) {
                return setDisabled(false);
            }
        }
        setDisabled(true);
    }, [inputs]);

    const renderContent = (signInContent: string, signUpContent: string) => {
        return isSignIn ? signInContent : signUpContent;
    };
    return (
        <div>
            <button
                onClick={handleOpen}
                className={`${renderContent(
                    "bg-blue-400 text-white",
                    ""
                )} border p-1 px-4 rounded mr-3`}
            >
                {renderContent("Sign In", "Sign Up")}
            </button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby='modal-modal-title'
                aria-describedby='modal-modal-description'
            >
                <Box sx={style}>
                    {loading ? (
                        <div className='py-24 px-2 h-[600px] flex justify-center'>
                            <CircularProgress />
                        </div>
                    ) : (
                        <div className='p-2 h-[600px]'>
                            {error && (
                                <Alert severity='error' className='mb-4'>
                                    {error}
                                </Alert>
                            )}
                            <div className='uppercase text-center font-bold pb-2 mb-2 border-b'>
                                <p className='text-sm'>
                                    {renderContent("Sign in", "Create Account")}
                                </p>
                            </div>
                            <div className='m-auto'>
                                <h2 className='text-2xl font-light text-center'>
                                    {renderContent(
                                        "Login to your account",
                                        "Create your OpenTable account"
                                    )}
                                </h2>
                            </div>
                            <AuthModalInputs
                                inputs={inputs}
                                handleChangeInput={handleChangeInput}
                                isSignIn={isSignIn}
                            />
                            <button
                                className='uppercase bg-red-600 w-full text-white p-3 rounded text-sm mb-5 disabled:bg-gray-400'
                                disabled={disabled}
                                onClick={handleClick}
                            >
                                {renderContent("Sign In", "Create Account")}
                            </button>
                        </div>
                    )}
                </Box>
            </Modal>
        </div>
    );
}
