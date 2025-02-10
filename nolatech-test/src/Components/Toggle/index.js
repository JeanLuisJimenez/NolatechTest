import classNames from "classnames";

export default function Toggle({
                                   options = [],
                                   selectedOption = null,
                                   selectValue = () => {
                                   },
                                   label,
                               }) {
    return <div>
        {label && <span className={"text-base font-semibold"}>{label}</span>}
        <div className={"flex rounded overflow-hidden border-blue-500 border-2 cursor-pointer"}>
            {options.map(option =>
                <button key={`toggle-${option.label}`} onClick={() => {
                    selectValue(option.value)
                }} className={classNames('flex-1 text-center p-2 font-semibold', {
                    "bg-blue-500 text-white": selectedOption === option.value
                })}>
                    {option.label}
                </button>)}
        </div>
    </div>
}