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
    const classes = classNames(
        'btn',
        `btn--${variant}`,
        `btn--${size}`,
        `btn--color-${color}`,
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