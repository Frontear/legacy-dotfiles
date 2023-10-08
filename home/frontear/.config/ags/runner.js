import { Box, Entry, Label, Window } from "./widgets.js";
import { Hyprland } from "./services.js";
const { exec, execAsync } = ags.Utils;
const { configDir, closeWindow } = ags.App;

let monitor = JSON.parse(exec("hyprctl -j monitors"))[0];

const run = Label({
    className: "text run",
    halign: "start",
    hexpand: false,
    xalign: 0.0,
    label: "Run> ",
});

const input = ags.Widget.Entry({
    className: "text",
    onAccept: entry => {
        execAsync(["gtk-launch", entry.text]).catch(err => {
            console.log("Failed to launch application");
        });
        entry.text = "";
        closeWindow("hyprrunner");
    },
    maxWidthChars: 20,
});

const runner = Box({
    className: "runner",
    widthRequest: monitor["width"] * 0.30,
    children: [
        run,
        input
    ]
});

export const hyprrunner = Window({
    visible: false,
    child: runner,
    name: "hyprrunner",
    anchor: [ "top" ],
    exclusive: false,
    focusable: true,
    layer: "overlay",
    margin: monitor["height"] * 0.10,
    popup: true
});
