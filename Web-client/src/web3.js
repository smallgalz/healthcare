import Web3 from 'web3';

let web3;

// EIP-1193: modern injected provider (MetaMask, etc.)
if (window.ethereum) {
  web3 = new Web3(window.ethereum);
  // Request account access when needed (called on user action, not on load)
} else if (window.web3) {
  // Legacy fallback for older injected providers
  web3 = new Web3(window.web3.currentProvider);
} else {
  // No injected provider — fall back to a local node for development
  web3 = new Web3('http://localhost:8545');
  console.warn('No Web3 provider detected. Falling back to http://localhost:8545');
}

export default web3;
