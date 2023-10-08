import { Box, Label, ProgressBar, Window } from "./widgets.js";
import { Hyprland } from "./services.js";
const { exec } = ags.Utils;

let monitor = JSON.parse(exec("hyprctl -j monitors"))[0];

const icon = Label({
    className: "icon",
    valign: "start",
    label: "{}"
});

const progress = ProgressBar({
    className: "progress",
    valign: "end",
    value: 0.2,
});

const osd = Box({
    className: "osd",
    widthRequest: monitor["width"] * 0.15,
    vertical: true,
    children: [
        icon,
        progress
    ],
    homogeneous: true,
});

export const hyprosd = Window({
    visible: false,
    child: osd,
    name: "hyprosd",
    anchor: [],
    exclusive: false,
    layer: "overlay",
    popup: true
});
