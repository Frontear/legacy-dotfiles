const { Service, Variable } = ags;

export const Audio = Service.Audio;
export const Backlight = Variable(undefined, {
    listen: `backlight -m`
});
export const Battery = Service.Battery;
export const Hyprland = Service.Hyprland;
export const Network = Service.Network;
