export interface AlertProps {
    variant: 'success' | 'error' | 'info' | 'warning',
    children: React.ReactElement<AlertDataProps>[];
    timeout: number;
}

export interface AlertDataProps {
    children: string;
}