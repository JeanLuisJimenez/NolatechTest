import classNames from "classnames";
import {useState} from "react";
import {FaEye, FaEyeSlash} from "react-icons/fa6";

export const TEXT_POSITIONS = {
    ABOVE: "above",
    BELOW: "below",
    LEFT: "left",
    RIGHT: "right",
};

export default function TextInput({
                                      label,
                                      textPosition = TEXT_POSITIONS.ABOVE,
                                      placeholder,
                                      secured,
                                      type,
                                      required,
                                      className,
                                      name,
                                      value = "",
                                      setValue = () => {},
                                      error,
                                  }) {
    const [securedTextVisible, setSTVisible] = useState(false);

    return (
        <div
            className={classNames(
                "flex gap-2",
                {
                    "flex-col": textPosition,
                },
                className
            )}
        >
            <div className="flex gap-1 font-semibold text-base">
                {label}
                {required && <p className="text-red-600 font-bold">*</p>}
            </div>
            <div
                className={classNames(
                    "flex border-2 border-gray-200 rounded overflow-hidden",
                    {
                        "border-red-600": error,
                    }
                )}
            >
                <input
                    name={name}
                    value={value}
                    onChange={({target}) => setValue(target.value)}
                    className={classNames("py-[2px] px-2 h-10 w-full")}
                    type={!securedTextVisible && secured ? "password" : type}
                    placeholder={placeholder}
                />
                {secured && (
                    <button
                        className={classNames(
                            "flex w-10 justify-center items-center bg-gray-200 text-zinc-600 aspect-square"
                        )}
                        onClick={() => {
                            setSTVisible((prev) => !prev);
                        }}
                    >
                        {securedTextVisible ? <FaEyeSlash/> : <FaEye/>}
                    </button>
                )}
            </div>
            {error && (
                <p className="leading-none text-xs text-red-600 font-semibold">
                    {error}
                </p>
            )}
        </div>
    );
}
