import { describe, it } from "vitest";
import { render } from "@testing-library/react";
import { AutomatonDiagram } from "@/components/mdx/MdxComponents";

describe("AutomatonDiagram", () => {
  it("renders the 3-state lesson example without throwing", () => {
    render(
      <AutomatonDiagram
        states={["q0", "q1", "q2"]}
        alphabet={["a", "b"]}
        transitions={[
          { from: "q0", to: "q1", label: "a" },
          { from: "q0", to: "q0", label: "b" },
          { from: "q1", to: "q1", label: "a" },
          { from: "q1", to: "q2", label: "b" },
          { from: "q2", to: "q1", label: "a" },
          { from: "q2", to: "q0", label: "b" },
        ]}
        initial="q0"
        accepting={["q2"]}
      />
    );
  });
});
