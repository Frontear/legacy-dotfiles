import ServiceApplications from "resource:///com/github/Aylur/ags/service/applications.js";
import ServiceAudio from "resource:///com/github/Aylur/ags/service/audio.js";
import Variable from "resource:///com/github/Aylur/ags/variable.js";
import ServiceHyprland from "resource:///com/github/Aylur/ags/service/hyprland.js";
import ServiceNetwork from "resource:///com/github/Aylur/ags/service/network.js";

export const Applications = ServiceApplications;
export const Audio = ServiceAudio;
export const Backlight = Variable(undefined, {
    listen: [["backlight", "-m"],
        out => {
            return {
                percent: Number(out)
            }
        }
    ]
});
export const Battery = Variable(undefined, {
    listen: [["battery", "-m"],
        out => {
            let split = out.split(":")

            return {
                percent: Number(split[0]),
                charged: split[1] == "Full",
                charging: split[1] == "Charging"
            }
        }]
});
export const Hyprland = ServiceHyprland;
export const Network = ServiceNetwork;
