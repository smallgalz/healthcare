// MediChain - Soroban Smart Contract
//
// This binary entry point is intentionally minimal.
// The contract logic lives in src/lib.rs (crate-type = ["cdylib"]).
// Soroban contracts are compiled as libraries, not binaries.
// This file exists only to satisfy the [[bin]] entry in Cargo.toml
// and should not contain contract logic.

fn main() {
    eprintln!("This binary is not meant to be run directly.");
    eprintln!("Deploy the contract WASM built from the library target instead.");
    std::process::exit(1);
}
