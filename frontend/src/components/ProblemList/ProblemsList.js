import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import axios from "axios";
import ProblemItem from "./ProblemItem";
import Loader from "../Loader/Loader";
import config from "../../config.json";
import styles from "./problemList.module.css";
const cx = classNames.bind(styles);

export default function ProblemsList() {
    const [problems, setProblems] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        axios
            .get(`${config.backendEndpoint}/v1/problems`)
            .then((resp) => {
                setProblems(resp.data);
            })
            .catch((error) => {
                alert(error.response.data);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        <>
            {loading ? (
                <div className={cx("center")}>
                    <Loader />
                </div>
            ) : (
                <div className={cx("problemList-container")}>
                    <h1 className={cx("problemList-heading")}>Problem List</h1>
                    <div className={cx("problemList-problems")}>
                        {problems.map((problem) => (
                            <ProblemItem key={problem._id} {...problem} />
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}
