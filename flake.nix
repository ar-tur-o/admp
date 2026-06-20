{
  inputs = {
    nix-minecraft.url = "github:Infinidoge/nix-minecraft";
  };

  outputs = {self, nix-minecraft, ...}: {
    nixosModules.default = import ./server.nix { inherit self nix-minecraft;};
  };
}
