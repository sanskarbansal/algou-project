import classNames from "classnames/bind";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./problemItem.module.css";

const cx = classNames.bind(styles);

export default function ProblemItem({ difficulty, title, _id }) {
    return (
        <Link to={`/${_id}`} className={cx("problemItem-container")}>
            <h4 className={cx("problemItem-heading")}>{title}</h4>
            <span className={cx("problemItem-difficulty", `problemItem-difficulty_${difficulty?.toLowerCase()}`)}>{difficulty}</span>
        </Link>
    );
}
