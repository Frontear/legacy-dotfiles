import App from "resource:///com/github/Aylur/ags/app.js";
import { exec } from "resource:///com/github/Aylur/ags/utils.js";

import { hyprbar } from "./bar.js";
import { hyprosd } from "./osd.js";
import { hyprrunner } from "./runner.js";

exec(`sassc ${App.configDir}/style.scss /tmp/style.css`);
export default {
    style: "/tmp/style.css",
    windows: [
        hyprbar,
        hyprosd,
        hyprrunner
    ]
}
