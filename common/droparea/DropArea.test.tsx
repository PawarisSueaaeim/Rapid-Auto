import React from "react";
import Dropzone from "react-dropzone";
import { act, fireEvent, render } from "@testing-library/react";

describe("DropArea testing component", () => {
    test("invoke onDragEnter when dragenter event occurs", async () => {
        const file = new File([JSON.stringify({ ping: true })], "ping.json", {
            type: "application/json",
        });
        const data = mockData([file]);
        const onDragEnter = jest.fn();

        const ui = (
            <Dropzone onDragEnter={onDragEnter}>
                {({ getRootProps, getInputProps }) => (
                    <div {...getRootProps()}>
                        <input {...getInputProps()} />
                    </div>
                )}
            </Dropzone>
        );
        const { container } = render(ui);

        const divElement = container.querySelector("div");
        if (divElement) {
            await act(() => fireEvent.dragEnter(divElement, data));
        }
        expect(onDragEnter).toHaveBeenCalled();
    });
});

const mockData = (files: any) => {
    return {
        dataTransfer: {
            files,
            items: files.map((file: any) => ({
                kind: "file",
                type: file.type,
                getAsFile: () => file,
            })),
            types: ["Files"],
        },
    };
};
