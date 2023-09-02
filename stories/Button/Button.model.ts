export interface ButtonProps {
    children: string;
    variant: 'contained' | 'outlined' | 'text' | 'floating';
    color: 'primary' | 'secondary' | 'success' | 'error' | 'dark' | 'light';
    disabled: boolean;
    icon: React.ReactElement;
    iconPosition: "left" | "right";
    href: string;
    size: 'small' | 'medium' | 'large';
    onClick: (event: React.MouseEvent<HTMLElement>) => void;
}