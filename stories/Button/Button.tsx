import { ButtonProps } from "./Button.model";
import classNames from "classnames";
import './Button.scss';
import React from "react";

export const Button = ({
    children,
    variant = 'contained',
    color = 'primary',
    disabled = false,
    icon,
    iconPosition = 'left',
    href,
    size = 'medium',
}: ButtonProps) => {
    const containedOrOutlined = (variant === 'contained' || variant === 'outlined');
    const classes = classNames(
        'btn',
        `btn--${variant}`,
        { [`btn--${variant}--${color}`]: containedOrOutlined },
        { [`btn--${variant}`]: !containedOrOutlined },
        `btn--${size}`,
    )

    return (
        <button
            className={classes}
            disabled={disabled}
            aria-disabled={disabled}
        >
            {children}
            {iconPosition === 'right' && <span>{icon}</span>}
        </button>
    );
}