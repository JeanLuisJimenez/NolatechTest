import classNames from "classnames";
import Button from "../../Components/Button";
import TextInput from "../../Components/Input";
import { signIn } from "../../api/auth";
import { useState } from "react";
import { validateEmptyField } from "../../utils/validation";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

export default function SignIn() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState({});
  const checkErrors = () => {
    let hasError = false;
    if (!validateEmptyField(firstname, "firstname", setErrors)) hasError = true;
    if (!validateEmptyField(lastname, "lastname", setErrors)) hasError = true;
    if (!validateEmptyField(username, "username", setErrors)) hasError = true;
    if (!validateEmptyField(email, "email", setErrors)) hasError = true;
    if (!validateEmptyField(confirmEmail, "confirmEmail", setErrors))
      hasError = true;
    if (!validateEmptyField(password, "password", setErrors)) hasError = true;
    if (!validateEmptyField(confirmPassword, "confirmPassword", setErrors))
      hasError = true;

    if (email !== confirmEmail) {
      hasError = true;

      setErrors((prev) => {
        prev.confirmEmail = "This should be the same as Email";

        return { ...prev };
      });
    }

    if (password !== confirmPassword) {
      hasError = true;

      setErrors((prev) => {
        prev.confirmPassword = "This should be the same as Password";

        return { ...prev };
      });
    }

    Object.keys(errors).forEach((key) => {
      if (errors[key]) hasError = true;
    });

    return hasError;
  };

  const navigate = useNavigate();

  return (
    <>
      <Toaster />
      <div className="flex flex-col p-4 rounded-md shadow-lg bg-white gap-4">
        <div className="flex w-min py-2 px-8 rounded bg-gradient-to-b from-blue-500 to-cyan-300 text-lg text-white font-bold tracking-widest justify-center self-center">
          NOLATEST
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <TextInput
            name={"firstname"}
            label={"Firstname"}
            required
            value={firstname}
            error={errors.firstname}
            setValue={(val) => {
              setFirstname(val);

              validateEmptyField(val, "firstname", setErrors);
            }}
          />
          <TextInput
            name={"lastname"}
            label={"Lastname"}
            required
            value={lastname}
            error={errors.lastname}
            setValue={(val) => {
              setLastname(val);

              validateEmptyField(val, "lastname", setErrors);
            }}
          />
          <TextInput
            name={"username"}
            label={"Username"}
            required
            value={username}
            error={errors.username}
            setValue={(val) => {
              setUsername(val);
              validateEmptyField(val, "username", setErrors);
            }}
          />
          <TextInput
            name={"email"}
            className={classNames("sm:col-start-1")}
            label={"E-mail"}
            required
            value={email}
            error={errors.email}
            setValue={(val) => {
              setEmail(val);

              validateEmptyField(val, "email", setErrors);
            }}
          />
          <TextInput
            name={"confirm-email"}
            label={"Confirm E-mail"}
            required
            value={confirmEmail}
            error={errors.confirmEmail}
            setValue={(val) => {
              setConfirmEmail(val);

              validateEmptyField(val, "confirmEmail", setErrors);

              if (val !== email)
                setErrors((prev) => {
                  prev.confirmPassword = "This should be the same as Email";
                });
            }}
          />
          <TextInput
            name={"password"}
            label={"Password"}
            secured
            required
            value={password}
            error={errors.password}
            setValue={(val) => {
              setPassword(val);

              validateEmptyField(val, "password", setErrors);
            }}
          />
          <TextInput
            name={"confirm-password"}
            label={"Confirm Password"}
            secured
            required
            value={confirmPassword}
            error={errors.confirmPassword}
            setValue={(val) => {
              setConfirmPassword(val);

              validateEmptyField(val, "confirmPassword", setErrors);

              if (val !== email)
                setErrors((prev) => {
                  prev.confirmPassword = "This should be the same as Password";
                });
            }}
          />
        </div>
        <div className="flex justify-center">
          <Button
            title={"Sign In"}
            onClick={() => {
              if (!checkErrors())
                signIn({
                  firstname,
                  lastname,
                  username,
                  email,
                  password,
                })
                  .then(() => {
                    toast("Successfully registered. Redirecting to Login...", {
                      position: "top-center",
                      duration: 3000,
                      style: {
                        backgroundColor: "#48d50b",
                        color: "white",
                      },
                      id: "success-register",
                    });

                    setTimeout(() => {
                      navigate("/authentication/login");
                    }, 3000);
                  })
                  .catch((err) => {
                    console.log({ ...err });
                    toast(`Error: ${err.response?.data?.message}`, {
                      position: "top-center",
                      duration: 3000,
                      style: {
                        backgroundColor: "#ed0000",
                        color: "white",
                      },
                      id: "success-register",
                    });
                  });
            }}
          />
        </div>
      </div>
    </>
  );
}
