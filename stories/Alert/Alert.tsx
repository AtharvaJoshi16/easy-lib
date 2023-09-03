import React from "react";
import { AlertProps } from "./Alert.model";
import './Alert.scss';
import classNames from "classnames";
import { Icon } from '../Icon';
import { Info, Close } from '../globals/icons';
import { IconButton } from '../IconButton';

export const Alert = ({
    variant = 'info',
    timeout = 1000,
    children,
}: AlertProps) => {
    const classes = classNames(
        'alert',
        `alert--${variant}`
    )
    return (
        <div className={classes}>
            <div className="alert__icon-with-text">
                <Icon width="16px" height="16px" title="info">
                    <Info />
                </Icon>
                {children}
            </div>
            <IconButton variant="text" color="dark" size="small" onClick={() => { }}>
                <Close />
            </IconButton>
        </div>
    )
};