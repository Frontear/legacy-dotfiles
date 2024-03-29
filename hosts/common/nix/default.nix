{
  config,
  inputs,
  lib,
  ...
}: {
  # Allow "unfree" packages
  nixpkgs.config.allowUnfree = true;

  # TODO: some kind of setting to allow nix shell nixpkgs#... or nix-shell -p ...
  # to work without needing to manually mark for unfree each time.

  # Enable flakes for the system, kinda important to do lol.
  nix.settings.experimental-features = "nix-command flakes";

  # Stolen from Misterio77/nix-starter-configs
  # This will add each flake input as a registry
  # To make nix3 commands consistent with your flake
  nix.registry = (lib.mapAttrs (_: flake: {inherit flake;})) ((lib.filterAttrs (_: lib.isType "flake")) inputs);

  # This will additionally add your inputs to the system's legacy channels
  # Making legacy nix commands consistent as well, awesome!
  nix.nixPath = ["/etc/nix/path"];
  environment.etc =
    lib.mapAttrs'
    (name: value: {
      name = "nix/path/${name}";
      value.source = value.flake;
    })
    config.nix.registry;
}
