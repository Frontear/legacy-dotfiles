import { Box, Entry, Label, Window } from "./widgets.js";
import { Applications } from "./services.js";
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
        let app = Applications.query(entry.text);

        if (app.length > 1) {
            console.log("Too many applications to handle");
            return;
        }

        app[0].launch();

        entry.text = "";
        closeWindow("hyprrunner");
    },
    maxWidthChars: 20,
});

const runner = Box({
    className: "runner",
    widthRequest: monitor["width"] * 0.30,
    margin: monitor["height"] * 0.10,
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
    popup: true
});
