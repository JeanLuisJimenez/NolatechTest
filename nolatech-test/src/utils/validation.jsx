export function validateEmptyField(val, name, setError) {
    setError((prev) => {
        if (val) prev[name] = null;
        else prev[name] = "Field can not be empty";

        return {...prev};
    });

    return !!val;
}
