import React from "react";
import { AlertProps } from "./Alert.model";
import './Alert.scss';
import classNames from "classnames";
import { Icon } from '../Icon';
import { Info, Close } from '../globals/icons';
import { IconButton } from '../IconButton';
import { AlertHeading } from "./AlertHeading";
import { AlertText } from "./AlertText";

export const Alert = ({
    variant = 'info',
    timeout = 1000,
    children,
}: AlertProps) => {
    console.log(children);
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
                <div className="alert__icon-with-text__content">
                    {children}
                </div>
            </div>
            <IconButton variant="text" color="dark" size="small" onClick={() => { }}>
                <Close />
            </IconButton>
        </div>
    )
};

Alert.Heading = AlertHeading;
Alert.Text = AlertText;