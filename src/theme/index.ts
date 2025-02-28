import { createTheme } from "@mui/material";
import { colors } from "../colors";

export const theme = createTheme({
    typography: {
        fontFamily: [
            'Poppins', 'sans-serif'
        ].join(','),
    },
    palette: {
        background: {
            default: colors.darkBackground
        }
    }
});
