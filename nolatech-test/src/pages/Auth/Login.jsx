import { useState } from "react";
import TextInput from "../../Components/Input";
import Button from "../../Components/Button";
import { login } from "../../api/auth";

export default function Login() {
  const [password, setPassword] = useState();
  const [credential, setCred] = useState();

  return (
    <>
      <div className="flex flex-col p-4 rounded-md shadow-lg bg-white gap-4">
        <div className="flex w-min py-2 px-8 rounded bg-gradient-to-b from-blue-500 to-cyan-300 text-lg text-white font-bold tracking-widest justify-center self-center">
          NOLATEST
        </div>
        <div className="text-center font-semibold uppercase">Welcome back!</div>
        <div>
          <TextInput
            placeholder={"Username/Email"}
            value={credential}
            setValue={setCred}
          />
          <TextInput
            placeholder={"Password"}
            value={password}
            secured
            setValue={setPassword}
          />
        </div>
        <div className="self-center">
          <Button
            title={"Login"}
            onClick={() => {
              login({ loginCred: credential, password }).then();
            }}
          />
        </div>
      </div>
    </>
  );
}
