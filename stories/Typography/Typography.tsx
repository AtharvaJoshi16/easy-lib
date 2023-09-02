import classNames from "classnames";
import { TypographyProps } from "./Typography.model";
import React from "react";
import './Typography.scss';

export const Typography = ({
    variant = 'p',
    noWrap = false,
    children,
    underline = false,
    strike = false,
    italic = false,
    style = 'regular',
}: TypographyProps) => {
    const classes = classNames(
        'typography',
        `typography--${variant}`,
        { ['typography--nowrap']: noWrap },
        { ['typography--underline']: underline },
        { ['typography--strike']: strike },
        { ['typography--italic']: italic },
        `typography--${style}`
    )
    const Tag = variant as keyof JSX.IntrinsicElements;

    return (
        <Tag
            className={classes}
        >
            {children}
        </Tag>
    )
}