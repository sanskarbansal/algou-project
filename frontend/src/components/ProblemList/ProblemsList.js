import React, { useEffect, useState } from "react";
import axios from "axios";
import config from "../../config.json";
import ProblemItem from "./ProblemItem";
import classNames from "classnames/bind";
import styles from "./problemList.module.css";
const cx = classNames.bind(styles);

export default function ProblemsList() {
    const [problems, setProblems] = useState([]);
    useEffect(() => {
        axios
            .get(`${config.backendEndpoint}/v1/problems`)
            .then((resp) => {
                setProblems(resp.data);
            })
            .catch((error) => {
                alert(error.response.data);
            });
    }, []);

    return (
        <div className={cx("problemList-container")}>
            <h1 className={cx("problemList-heading")}>Problem List</h1>
            <div className={cx("problemList-problems")}>
                {problems.map((problem) => (
                    <ProblemItem key={problem._id} {...problem} />
                ))}
            </div>
        </div>
    );
}
