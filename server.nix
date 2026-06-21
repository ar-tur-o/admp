{self, nix-minecraft}: {pkgs, lib, config, ...}:
{
  imports = [ nix-minecraft.nixosModules.minecraft-servers ];

  options.minecraft-admp = {
    enable = lib.mkEnableOption "Minecraft ADMP Server";
    packHash = lib.mkOption {
      type = lib.types.str;
      default = lib.fakeHash;
      description = "sha256 hash (SRI format) of the modpack archive.";
    };
  };

  config = lib.mkIf config.minecraft-admp.enable {
    nixpkgs.overlays = [ nix-minecraft.overlay ];
    services.minecraft-servers = {
      enable = true;
      eula = true;

      servers = {
        # Arturo's Diagetic Modpack 1.0
        admp = let
          modpack = pkgs.fetchModrinthModpack {
            src = "${self}/TwoWeeks-1_1_9.mrpack";
            packHash = config.minecraft-admp.packHash;
            side = "server";
          };
        in {
          enable = true;

          package = pkgs.neoforgeServers.neoforge-1_21_1-21_1_233;

          serverProperties = {
            allow-flight = true;
            server-port = 25565;
            gamemode = "survival";
            difficulty = "hard";
            level-seed = 1801915356025060336;
            max-players = 10;
            white-list = false;
            view-distance = 8;
            simulation-distance = 4;
            network-compression-threshold = 256;
            spawn-protection = 0;
            motd = "The one piece is real...";
          };

          whitelist = {
            ComputerDay = "88f64f7e-d033-4561-93c7-c9dfb4636421";
          };

          operators = {
            ComputerDay = "88f64f7e-d033-4561-93c7-c9dfb4636421";
          };
          
          jvmOpts = "-Xmx14G -Xms6G -XX:+UseZGC -XX:+ZGenerational -XX:+UnlockExperimentalVMOptions -XX:+DisableExplicitGC -XX:+AlwaysPreTouch -XX:+ParallelRefProcEnabled -XX:+PerfDisableSharedMem";

          symlinks."mods" = pkgs.runCommand "mods-filtered" {} ''
            cp -r ${modpack}/mods $out
            chmod -R +w $out
            rm -f $out/surveyor-*.jar
            rm -f $out/connector-*.jar
            rm -f $out/noisiumed-*.jar
          '';

          files = {
            "config" = "${modpack}/config";
            "kubejs" = "${modpack}/kubejs";
            "world/datapacks" = "${self}/datapacks";
          };
        };
      };
    };
    
    # Open firewall for Minecraft
    networking.firewall.allowedTCPPorts = [ 25565 ];
  };
}
