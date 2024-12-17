declare global {
  interface Window {
    VANTA: {
      GLOBE: (options: any) => { destroy: () => void };
    };
  }
}

export {};
