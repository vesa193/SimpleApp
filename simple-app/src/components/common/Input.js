import React from "react";

export const Input = React.forwardRef((props, ref) => {
    const {name, value, isDisabled} = props;
    const {placeholder, isAutoCompleteOff} = props;
    const {onChange, type} = props;

    const onChangeHandler = (event) => {
        if (typeof onChange === 'function') {
            onChange({ name: event.target.name, value: event.target.value });
        }
    }

    return (
        <input
            ref={ref}
            name={name}
            type={type}
            placeholder={placeholder}
            onChange={onChangeHandler}
            value={value}
            disabled={isDisabled}
            { ...(isAutoCompleteOff && { autoComplete: 'off' })}
        />
    )
});
