import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import Markdown from "../Markdown";

import config from "../../config.json";
import { useState } from "react";
import CodeEditor from "../CodeEditor";
import classNames from "classnames/bind";
import styles from "./problem.module.css";
import Loader from "../Loader/Loader";

const cx = classNames.bind(styles);

export default function Problem() {
    const [problem, setProblem] = useState({});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const { problemId } = useParams();
    useEffect(() => {
        setLoading(true);
        axios
            .get(`${config.backendEndpoint}/v1/problems/${problemId}`)
            .then((resp) => {
                setProblem(resp.data);
                setError(null);
            })
            .catch((error) => {
                if (error.response.data.code >= 400 && error.response.data.code < 500) {
                    setError(error.response.data);
                }
            })
            .finally(() => {
                setLoading(false);
            });
    }, [problemId]);

    const { title, difficulty, problem: body } = problem;

    return (
        <>
            {loading ? (
                <div className={cx("center")}>
                    <Loader />
                </div>
            ) : (
                <div className={cx("problem-container")}>
                    <Link to="/">&lt; Back </Link>
                    {title && (
                        <>
                            <div className={cx("problem-heading")}>
                                <h1 className={cx("problem-title")}>{title}</h1>
                                <h5 className={cx("problem-difficulty", `problem-difficulty_${difficulty?.toLowerCase()}`)}>{difficulty}</h5>
                            </div>
                            <div className={cx("problem-body")}>
                                <Markdown content={body} />
                            </div>
                            <h1>Code Editor</h1>
                            <div className={cx("problem-editor")}>
                                <CodeEditor />
                            </div>
                        </>
                    )}
                    {error && <h1 className={cx("error-title")}>{error.message}</h1>}
                </div>
            )}
        </>
    );
}
