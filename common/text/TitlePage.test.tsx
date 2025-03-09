import { render, screen } from "@testing-library/react";
import TitlePage from "./TitlePage";

describe("TitlePage Testing component", () => {
    beforeEach(() => {
        render(<TitlePage text="Title"/>)
    });

    it("should render text", () => {
        expect(screen.getByText("Title")).toBeInTheDocument();
    })
});