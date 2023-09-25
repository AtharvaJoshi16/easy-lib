import { Typography } from "../Typography"

export const AlertText = ({
    children,
}) => {
    return (
        <Typography variant="p" style="regular">
            {children}
        </Typography>
    )
}