const { exec } = ags.Utils;
const { configDir } = ags.App;

import { hyprbar } from "./bar.js";
import { hyprosd } from "./osd.js";
import { hyprrunner } from "./runner.js";

exec(`sassc ${configDir}/style.scss /tmp/style.css`);
export default {
    style: "/tmp/style.css",
    windows: [
        hyprbar,
        hyprosd,
        hyprrunner
    ]
}
