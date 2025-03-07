import { render, screen } from "@testing-library/react";
import PaperPrimary from "./PaperPrimary";

describe("PaperPrimary component testing", () => {
    beforeEach(() => {
        render(
            <PaperPrimary className="p-8">
                <div data-testid="children" className="font-bold text-2xl">Test</div>
            </PaperPrimary>
        );
    });

    it("should render display correctly", () => {
        expect(screen.getByTestId("children")).toHaveClass("font-bold text-2xl");
        expect(screen.getByTestId("children")).toHaveTextContent("Test");
        expect(screen.getByText("Test")).toBeInTheDocument();
    });

    it("should render classes correctly", () => {
        expect(screen.getByTestId("children").parentElement).toHaveClass("grid grid-cols-1 md:grid-cols-2 shadow-xl rounded-xl");
        expect(screen.getByTestId("children").parentElement).toHaveClass("p-8");
    })
});
