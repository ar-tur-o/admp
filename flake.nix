{
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
    nix-minecraft.url = "github:Infinidoge/nix-minecraft";
  };

  outputs = {self, nixpkgs, nix-minecraft, ...}: {
    nixosModules.default = nixpkgs.lib.nixosSystem {
      system = "x86_64-linux";
      specialArgs = {inherit nix-minecraft self;};
      modules = [./server.nix];
    };
  };
}
