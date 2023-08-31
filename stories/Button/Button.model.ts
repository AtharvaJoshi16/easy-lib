export interface ButtonProps {
    children: string;
    variant: 'contained' | 'outlined' | 'text' | 'floating';
    color: 'primary' | 'secondary' | 'success' | 'error' | 'dark';
    disabled: boolean;
    icon: JSX.Element;
    iconPosition: "left" | "right";
    href: string;
    size: 'small' | 'medium' | 'large';
    onClick: (event: React.MouseEvent<HTMLElement>) => void;
}