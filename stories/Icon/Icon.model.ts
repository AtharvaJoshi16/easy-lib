export interface IconProps {
    color: "dark" | "light" | "primary" | "secondary" | "success" | "error",
    children: React.ReactElement,
    width?: string,
    height?: string,
    title: string,
}