import Variable from "resource:///com/github/Aylur/ags/variable.js";
import Service from "resource:///com/github/Aylur/ags/service.js";

export const Applications = Service.Applications;
export const Audio = Service.Audio;
export const Backlight = Variable(undefined, {
    listen: `backlight -m`
});
export const Battery = Service.Battery;
export const Hyprland = Service.Hyprland;
export const Network = Service.Network;
