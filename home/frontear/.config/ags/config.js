import App from "resource:///com/github/Aylur/ags/app.js";
import { exec } from "resource:///com/github/Aylur/ags/utils.js";

import { hyprbar } from "./windows/bar.js";
import { hyprosd } from "./windows/osd.js";
import { hyprrunner } from "./windows/runner.js";

exec(`sassc ${App.configDir}/style.scss /tmp/style.css`);
export default {
    style: "/tmp/style.css",
    windows: [
        hyprbar,
        hyprosd,
        hyprrunner
    ]
}
