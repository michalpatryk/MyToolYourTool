import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    "palette": {
        "type": "light",
        "primary": {
            "main": "#00BCD4",
        },
        "secondary": {
            "main": "#ef5350",
        },
        "background": {
            //#455A64
            "default": "#546e7a",
            "paper": "#424242"
        },
        "divider": "#42424",
        "back":"#fff9c4",
        "text": {
            "primary": "#fff",
            "secondary": "rgba(255, 255, 255, 0.7)",
            "disabled": "rgba(255, 255, 255, 0.5)"
        },
        "action": {
            "active": "#fff",
            "hover": "rgba(255, 255, 255, 0.08)",
            "selected": "rgba(255, 255, 255, 0.16)",
            "disabled": "rgba(255, 255, 255, 0.3)",
            "disabledBackground": "rgba(255, 255, 255, 0.12)"
        }
    },
    "shape": {
        "borderRadius": 4
    }
});

export default theme;

