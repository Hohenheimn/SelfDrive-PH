import {
    eachDayOfInterval,
    eachYearOfInterval,
    endOfMonth,
    format,
    startOfDay,
    isToday,
    isSameMonth,
    isEqual,
    endOfWeek,
    startOfWeek,
    parse,
    add,
} from "date-fns";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useRef, useState } from "react";
import ModalTemp from "./ModalTemp";

type Props = {
    value: {
        value: string;
        toggle: boolean;
    };
    setValue: Function;
};

const todayStyle = "bg-ThemeOrange text-white font-bold";
const sameMonth = "font-bold";
const selectedDay = "bg-lowOrange text-white font-bold";

export default function DashboardCalendar() {
    const router = useRouter();
    const Months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const [toggleButton, setToggleButton] = useState({
        month: false,
        year: false,
    });
    const date = new Date();
    // get date today
    let today = startOfDay(date);
    const [isSelected, setSelect] = useState(today);
    const [currentMonth, setCurrentMonth] = useState(format(today, "MMMM"));
    const [currenYear, setCurrentYear] = useState(format(today, "yyyy"));
    let wholeYear = currentMonth + "-" + currenYear;

    let firstDayofMonthYear = parse(wholeYear, "MMMM-yyyy", new Date());

    let days = eachDayOfInterval({
        start: startOfWeek(firstDayofMonthYear),
        end: endOfWeek(endOfMonth(firstDayofMonthYear)),
    });

    let Years = eachYearOfInterval({
        start: new Date(1970, 6, 10),
        end: new Date(5000, 6, 10),
    });

    const SelectedDateHandler = (day: any) => {
        setSelect(day);
    };

    const PrevNext = (button: string) => {
        // Get Current Month and Year
        let firstDayCurrentMonth = parse(currentMonth, "MMMM", new Date());
        let firstDayCurrentYear = parse(currenYear, "yyyy", new Date());

        let firstdayNextMonth = add(firstDayCurrentMonth, {
            months: button === "next" ? 1 : -1,
        });
        setCurrentMonth(format(firstdayNextMonth, "MMMM"));

        const validateMonth = format(firstdayNextMonth, "MM");
        if (validateMonth === "01" && button === "next") {
            let firstdayNextYear = add(firstDayCurrentYear, {
                years: 1,
            });
            setCurrentYear(format(firstdayNextYear, "yyyy"));
        }
        if (validateMonth === "12" && button === "prev") {
            let firstdayNextYear = add(firstDayCurrentYear, {
                years: -1,
            });
            setCurrentYear(format(firstdayNextYear, "yyyy"));
        }
    };

    const nextMonthHandler = () => {
        PrevNext("next");
    };

    const prevMonthHandler = () => {
        PrevNext("prev");
    };

    return (
        <>
            {/* Ask kung pano naka infinite ung year tas naka focus agad ung year sa current yr */}
            {router.query.date !== undefined && <DateModal />}
            <div className=" w-full">
                <div className="p-3 rounded-t bg-[#ff782429]">
                    <div className="mb-5 flex items-center justify-between">
                        <div className="flex items-center w-full justify-between">
                            <button
                                aria-label="calendar backward"
                                onClick={prevMonthHandler}
                                disabled={
                                    currenYear === "1970" &&
                                    currentMonth === "January"
                                        ? true
                                        : false
                                }
                                className="focus:text-gray-400 focus:bg-ThemeOrange hover:text-white mr-3 hover:bg-ThemeOrange text-gray-800 dark:text-gray-100 border flex justify-center items-center bg-white rounded-full font-NHU-black w-8 h-8 "
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-tabler icon-tabler-chevron-left"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                    />
                                    <polyline points="15 6 9 12 15 18" />
                                </svg>
                            </button>
                            <ul className="flex">
                                <li className="relative mr-2 cursor-pointer text-center text-ThemeBlue rounded-lg font-bold">
                                    <span
                                        className=" py-2 px-3 inline-block text-[32px]"
                                        onClick={() =>
                                            setToggleButton({
                                                ...toggleButton,
                                                month: !toggleButton.month,
                                            })
                                        }
                                    >
                                        {currentMonth}
                                    </span>
                                    {toggleButton.month && (
                                        <ul className="absolute top-full left-0 w-full bg-white shadow-md max-h-[200px] overflow-auto">
                                            {Months.map((month, index) => (
                                                <li
                                                    key={index}
                                                    className={`py-2 px-3 text-[14px] cursor-pointer hover:bg-lowOrange ${
                                                        currentMonth ===
                                                            month &&
                                                        " bg-ThemeOrange text-white"
                                                    }`}
                                                    onClick={() => {
                                                        setCurrentMonth(month);
                                                        setToggleButton({
                                                            ...toggleButton,
                                                            month: false,
                                                        });
                                                    }}
                                                >
                                                    {month}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                                <li className=" relative cursor-pointer rounded-lg font-bold">
                                    <span
                                        className=" py-2 px-3 inline-block text-[32px] text-ThemeBlue"
                                        onClick={() =>
                                            setToggleButton({
                                                ...toggleButton,
                                                year: !toggleButton.year,
                                            })
                                        }
                                    >
                                        {currenYear}
                                    </span>
                                    {toggleButton.year && (
                                        <ul className="absolute top-full left-0 w-full bg-white shadow-md max-h-[200px] overflow-auto">
                                            {Years.map((year, index) => (
                                                <li
                                                    key={index}
                                                    className={`py-2 px-3 text-[14px] text-ThemeBlue text-center cursor-pointer hover:bg-lowOrange ${
                                                        currenYear ===
                                                            format(
                                                                year,
                                                                "yyyy"
                                                            ) &&
                                                        " bg-ThemeOrange text-white"
                                                    }`}
                                                    onClick={() => {
                                                        setCurrentYear(
                                                            format(year, "yyyy")
                                                        );
                                                        setToggleButton({
                                                            ...toggleButton,
                                                            year: false,
                                                        });
                                                    }}
                                                >
                                                    {format(year, "yyyy")}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            </ul>
                            <button
                                aria-label="calendar forward"
                                onClick={nextMonthHandler}
                                disabled={
                                    currenYear === "5000" &&
                                    currentMonth === "December"
                                        ? true
                                        : false
                                }
                                className="focus:text-gray-400 relative focus:bg-ThemeOrange hover:text-white hover:bg-ThemeOrange ml-3 text-gray-800 dark:text-gray-100 border flex justify-center items-center bg-white rounded-full font-NHU-black w-8 h-8"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-tabler  icon-tabler-chevron-right"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                    />
                                    <polyline points="9 6 15 12 9 18" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className=" flex flex-wrap mb-2">
                        <div className=" text-base font-bold text-center text-gray-800 dark:text-gray-100 w-[14.28%]">
                            Sun
                        </div>
                        <div className="text-base font-bold text-center text-gray-800 dark:text-gray-100 w-[14.28%]">
                            Mon
                        </div>
                        <div className="text-base font-bold text-center text-gray-800 dark:text-gray-100 w-[14.28%]">
                            Tue
                        </div>
                        <div className="text-base font-bold text-center text-gray-800 dark:text-gray-100 w-[14.28%]">
                            Wed
                        </div>
                        <div className="text-base font-bold text-center text-gray-800 dark:text-gray-100 w-[14.28%]">
                            Thu
                        </div>
                        <div className="text-base font-bold text-center text-gray-800 dark:text-gray-100 w-[14.28%]">
                            Fri
                        </div>
                        <div className="text-base font-bold text-center text-gray-800 dark:text-gray-100 w-[14.28%]">
                            Sat
                        </div>
                    </div>
                    <div className=" flex flex-wrap">
                        {days.map((day, index) => (
                            <Days
                                key={index}
                                SelectedDateHandler={SelectedDateHandler}
                                day={day}
                                today={today}
                                isSelected={isSelected}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

type PropsDays = {
    SelectedDateHandler: (day: Date) => void;
    day: Date;
    today: Date;
    isSelected: Date;
};

const Days = ({ SelectedDateHandler, day, today, isSelected }: PropsDays) => {
    const router = useRouter();
    return (
        <div
            className={` cursor-pointer aspect-square flex justify-center items-center text-base text-gray-800 dark:text-gray-100 w-[14.28%]`}
        >
            <button
                onClick={() => {
                    SelectedDateHandler(day);
                    router.push(`?date=${format(day, "MMMM/dd/yyyy")}`);
                }}
                className={` ${
                    !isToday(day) &&
                    !isEqual(day, isSelected) &&
                    "hover:bg-gray-100"
                } w-[90%] overflow-hidden m-0 border aspect-square text-[14px] rounded-lg flex flex-col items-start justify-start text-start p-2 ${
                    isToday(day) && todayStyle
                } ${isSameMonth(day, today) && sameMonth} ${
                    isEqual(day, isSelected) && !isToday(day) && selectedDay
                } ${isSameMonth(day, today) && !isToday(day) && "bg-white"}`}
            >
                <aside className="flex justify-end items-end mb-2">
                    <p>
                        <time
                            dateTime={format(day, "yyyy-MM-dd")}
                            className=" text-[24px] mb-2 text-ThemeBlue  mr-1"
                        >
                            {format(day, "d")}
                        </time>
                    </p>
                    <p className=" font-thin mr-1 text-ThemeBlue">
                        {format(day, "MMM")}
                    </p>
                    <p className=" font-thin text-ThemeBlue">
                        {format(day, "yyyy")}
                    </p>
                </aside>
                <p className=" leading-tight font-thin text-[13px] ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odit, doloremque.
                </p>
            </button>
        </div>
    );
};

const DateModal = () => {
    const router = useRouter();
    return (
        <ModalTemp>
            <h1 className="font-medium text-[16px]">{router.query.date}</h1>
            <h1 className=" text-[24px] text-ThemeBlue font-medium mb-5">
                Jomari Tiu
            </h1>
            <h2 className=" font-medium mb-2 text-[20px]">Car name TMX 155</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
                eos placeat suscipit sequi culpa at voluptatibus beatae vitae
                doloribus, facilis ea doloremque obcaecati distinctio, vel
                voluptatem ullam dolore ratione rerum.
            </p>
            <div className="flex justify-end">
                <button
                    className=" ThemeButton mt-5"
                    onClick={() => router.push("")}
                >
                    Close
                </button>
            </div>
        </ModalTemp>
    );
};
