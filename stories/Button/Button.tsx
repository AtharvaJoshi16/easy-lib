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
    onClick,
}: ButtonProps) => {
    const containedOrOutlined = (variant === 'contained' || variant === 'outlined');
    const classes = classNames(
        'btn',
        `btn--${variant}`,
        { [`btn--${variant}--${color}`]: containedOrOutlined },
        { [`btn--${variant}`]: !containedOrOutlined },
        `btn--${size}`,
        { [`btn--${size}__icon__${iconPosition}`]: icon },
    )

    return (
        <button
            className={classes}
            disabled={disabled}
            aria-disabled={disabled}
            onClick={(e) => onClick?.(e)}
        >
            <div className="btn__content">
                {iconPosition === 'left' && <span>{icon}</span>}
                {children}
                {iconPosition === 'right' && <span>{icon}</span>}
            </div>
        </button>
    );
}