import { IconProps } from "../Icon/Icon.model";

export interface IconButtonProps {
    variant?: "contained" | "outlined" | "text" | "floating",
    color?: "primary" | "secondary" | "success" | "error" | "dark" | "light",
    onClick: (event: React.MouseEvent<HTMLElement>) => void;
    children: React.ReactElement;
    size?: 'small' | 'medium' | 'large';
}