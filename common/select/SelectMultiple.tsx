"use client"
import React, { useEffect, useRef, useState } from "react";
import { FiChevronDown } from "react-icons/fi"; // อย่าลืมติดตั้ง react-icons ถ้ายังไม่มี
import styles from "./SelectMultiple.module.css"; // อัปเดตตามชื่อไฟล์ CSS จริงของคุณ

type Option = {
    value: string;
    displayValue: string; // หรือกำหนดโครงสร้างเฉพาะของ object ใน options
};

type Props = {
    label: string;
    options: Option[];
    value: Option[];
    onChange: (selectedOptions: Option[]) => void;
};

const SelectMultiple: React.FC<Props> = ({
    label,
    options,
    value,
    onChange,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [highlightedIndex, setHighlightedIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement | null>(null);

    const clearOptions = () => {
        onChange([]);
    };

    const isOptionSelected = (option: Option) => {
        return value?.some(
            (valueOption) => valueOption.value === option.value
        );
    };

    const selectOption = (option: Option) => {
        if (
            value?.some(
                (valueOption) => valueOption.value === option.value
            )
        ) {
            onChange(value.filter((obj) => obj.value !== option.value));
        } else {
            onChange([...value, option]);
        }
    };

    useEffect(() => {
        if (isOpen) setHighlightedIndex(0);
    }, [isOpen]);

    useEffect(() => {
        const handler = (event: KeyboardEvent) => {
            if (event.target !== containerRef.current) return;
            switch (event.code) {
                case "Enter":
                case "Space":
                    setIsOpen((previous) => !previous);
                    if (isOpen) selectOption(options[highlightedIndex]);
                    break;

                case "ArrowUp":
                case "ArrowDown": {
                    if (!isOpen) {
                        setIsOpen(true);
                        break;
                    }

                    const newValue =
                        highlightedIndex +
                        (event.code === "ArrowDown" ? 1 : -1);
                    if (newValue >= 0 && newValue < options?.length)
                        setHighlightedIndex(newValue);
                    break;
                }
                case "Escape":
                    setIsOpen(false);
                    break;
            }
        };

        containerRef.current?.addEventListener("keydown", handler);

        return () => {
            containerRef.current?.removeEventListener("keydown", handler);
        };
    }, [isOpen, highlightedIndex, options]);

    const handleOnBlur = () => {
        setTimeout(() => {
            setIsOpen(false);
        }, 150);
    };

    const handleOnClick = () => {
        setIsOpen((previous) => !previous);
    };

    return (
        <div>
            <div className="flex flex-col border border-[#DDD] rounded-[6px] px-4 py-2">
                <div className="text-nowBrown text-sm font-light">{label}</div>
                <div
                    ref={containerRef}
                    onBlur={handleOnBlur}
                    onClick={handleOnClick}
                    tabIndex={0}
                    className={styles.container}
                >
                    <span className={styles.value}>
                        {value?.length === options?.length ? (
                            <div className="text-nowBrown text-sm font-light">
                                ทุกคน
                            </div>
                        ) : (
                            <>
                                {value?.map((v) => (
                                    <button
                                        className={styles["option-badge"]}
                                        key={v.value}
                                        onClick={(event) => {
                                            event.stopPropagation();
                                            selectOption(v);
                                        }}
                                    >
                                        {v.displayValue}
                                        <span className={styles["remove-btn"]}>
                                            &times;
                                        </span>
                                    </button>
                                ))}
                            </>
                        )}
                    </span>
                    <button
                        onClick={(event) => {
                            event.stopPropagation();
                            clearOptions();
                        }}
                        className={styles["clear-btn"]}
                    >
                        &times;
                    </button>
                    <div className={styles.divider}></div>
                    <div>
                        <FiChevronDown
                            className={`text-xl ${
                                isOpen ? "transform rotate-180" : ""
                            } transition-all duration-300`}
                        />
                    </div>
                    <ul
                        className={`${styles.options} ${
                            isOpen ? styles.show : ""
                        }`}
                    >
                        {options?.map((option, index) => (
                            <li
                                onClick={(event) => {
                                    event.stopPropagation();
                                    selectOption(option);
                                    setIsOpen(false);
                                }}
                                onMouseEnter={() => setHighlightedIndex(index)}
                                key={option.value}
                                className={`${styles.option} ${
                                    isOptionSelected(option)
                                        ? styles.selected
                                        : ""
                                } ${
                                    index === highlightedIndex
                                        ? styles.highlighted
                                        : ""
                                }`}
                            >
                                {option.displayValue}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SelectMultiple;
