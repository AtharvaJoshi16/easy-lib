import { IconProps } from "../Icon/Icon.model";

export interface IconButtonProps {
    variant?: "contained" | "outlined" | "text" | "floating",
    color?: "primary" | "secondary" | "success" | "error" | "dark",
    onClick: (event: React.MouseEvent<HTMLElement>) => void;
    children: React.ReactElement;
}