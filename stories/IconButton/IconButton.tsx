import { IconButtonProps } from "./IconButton.model";
import React from "react";
import './IconButton.scss';
import classNames from "classnames";

export const IconButton = ({
    variant = "contained",
    children,
    color = "primary",
    onClick,
    size = 'medium',
}: IconButtonProps) => {
    const containedOrOutlined = (variant === 'contained' || variant === 'outlined');
    const classes = classNames(
        'iconbutton',
        `iconbutton--${variant}`,
        { [`iconbutton--${variant}--${color}`]: containedOrOutlined },
        { [`iconbutton--${variant}`]: !containedOrOutlined },
        `iconbutton--${size}`,
    )
    return (
        <button
            onClick={(e) => onClick?.(e)}
            className={classes}>
            {children}
        </button>
    )
}