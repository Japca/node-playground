import indigo from "@material-ui/core/colors/indigo";
import grey from "@material-ui/core/colors/grey";
import {createMuiTheme} from "@material-ui/core/styles/index";

const theme = createMuiTheme({
    palette: {
        primary: {
            light: grey[100],
            main: grey[100],
            dark: grey[100],

            contrastText: grey[800],
        },

        secondary: {
            light: indigo[700],
            main: indigo[700],
            dark: indigo[700],

            contrastText: grey[800],
        },

        // error: {
        //     light: palette.error[300],
        //     main: palette.error[500],
        //     dark: palette.error[700],
        //     contrastText: getContrastText(palette.error[500]),
        // },
    },
});
export default theme;