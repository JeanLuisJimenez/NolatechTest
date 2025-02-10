import classNames from "classnames";

export default function Button({title, onClick, className}) {
    return (
        <button
            className={classNames(
                "px-4 py-2 bg-blue-500 rounded text-white font-bold",
                className
            )}
            onClick={onClick}
        >
            {title}
        </button>
    );
}
