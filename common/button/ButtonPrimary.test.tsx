import { fireEvent, render, screen } from '@testing-library/react'
import ButtonPrimary from './ButtonPrimary';

describe("ButtonPrimary", () => {
    const onClickTest = jest.fn();
    beforeEach(() => {
        render(<ButtonPrimary text="Toggle" onClick={onClickTest} bgColor='#000' textColor='#fff'/>);
    })
    it("should render correctly", () => {
        expect(screen.getByText("Toggle")).toBeInTheDocument();
        expect(screen.getByText("Toggle")).toHaveStyle({backgroundColor: '#000', color: '#fff'});
    });
    it("should render onClick correctly", () => {
        const button = screen.getByText("Toggle");
        fireEvent.click(button);
        expect(onClickTest).toHaveBeenCalledTimes(2);
    });
});