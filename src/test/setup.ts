import "@testing-library/jest-dom";

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => {},
  }),
});

// jsdom lacks ResizeObserver; ReactFlow's ZoomPane uses it. No-op is enough.
class ResizeObserverStub {
  observe() {}
  unobserve() {}
  disconnect() {}
}
(globalThis as unknown as { ResizeObserver: unknown }).ResizeObserver = ResizeObserverStub;

// jsdom lacks DOMMatrixReadOnly used internally by ReactFlow viewport math.
const globalAny = globalThis as unknown as { DOMMatrixReadOnly?: unknown };
if (!globalAny.DOMMatrixReadOnly) {
  class DOMMatrixReadOnlyStub {
    m22 = 1;
  }
  globalAny.DOMMatrixReadOnly = DOMMatrixReadOnlyStub;
}
