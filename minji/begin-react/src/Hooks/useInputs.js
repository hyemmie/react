import { useState, useCallback } from 'react';

function useInputs(initialForm) {
    const [form, setForm] = useState(initialForm);

    const onChange = useCallback(e => {
        const {name, value} = e.target;
        setForm(form => ({...form, [name]: value}));
    }, []);
//[name]은 어떤 역할인지,,, 
    const reset = useCallback(() =>  setForm(initialForm), [initialForm]);
    return [form, onChange, reset];

}

export default useInputs;