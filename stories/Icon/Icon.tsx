import classNames from "classnames";
import { IconProps } from "./Icon.model";
import React from "react";
import './Icon.scss';
export const Icon = ({
    color,
    children,
    width = '24px',
    height = '24px',
    title,
}: IconProps) => {
    const modifyChildren = (child) => {
        const className = classNames('icon', {
            [`icon--${color}`]: color
        });

        const props = {
            color,
            width,
            height,
            title,
            className,
            role: 'presentation'
        };
        return React.cloneElement(child, props);
    };

    return <>{React.Children.map(children, (child) => modifyChildren(child))}</>
}