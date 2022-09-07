import React from 'react';
import PropTypes from 'prop-types';

export const Input = React.forwardRef((props, ref) => {
    const { name, value, isDisabled } = props;
    const { placeholder, isAutoCompleteOff } = props;
    const { onChange, type } = props;

    const onChangeHandler = (event) => {
        if (typeof onChange === 'function') {
            onChange({ name: event.target.name, value: event.target.value });
        }
    };

    return (
        <input
            ref={ref}
            name={name}
            type={type}
            placeholder={placeholder}
            onChange={onChangeHandler}
            value={value}
            disabled={isDisabled}
            {...(isAutoCompleteOff && { autoComplete: 'off' })}
        />
    );
});

Input.displayName = 'Input';

Input.defaultProps = {
    name: '',
    value: '',
    placeholder: '',
    type: 'text',
    isDisabled: false,
    isAutoCompleteOff: false,
};

Input.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    isDisabled: PropTypes.bool,
    isAutoCompleteOff: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
};
