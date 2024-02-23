import axios from "axios";

const useAuth = () => {
    const signin = async ({
        email,
        password,
    }: {
        email: string;
        password: string;
    }) => {
        try {
            console.log("here");
            const response = await axios.post(
                "http://localhost:3000/api/auth/signin",
                {
                    email,
                    password,
                }
            );
            console.log(response);
        } catch (error) {
            console.log("here 2");
            console.log(error);
        }
    };

    const signup = async () => {};

    return { signin, signup };
};

export default useAuth;
