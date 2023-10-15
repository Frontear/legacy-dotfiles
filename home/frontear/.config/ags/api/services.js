import ServiceApplications from "resource:///com/github/Aylur/ags/service/applications.js";
import ServiceAudio from "resource:///com/github/Aylur/ags/service/audio.js";
import Variable from "resource:///com/github/Aylur/ags/variable.js";
import ServiceBattery from "resource:///com/github/Aylur/ags/service/battery.js";
import ServiceHyprland from "resource:///com/github/Aylur/ags/service/hyprland.js";
import ServiceNetwork from "resource:///com/github/Aylur/ags/service/network.js";

export const Applications = ServiceApplications;
export const Audio = ServiceAudio;
export const Backlight = Variable(undefined, {
    listen: `backlight -m`
});
export const Battery = ServiceBattery;
export const Hyprland = ServiceHyprland;
export const Network = ServiceNetwork;
