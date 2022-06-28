import React from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css"; //Example style, you can use another
import styles from "./codeEditor.module.css";
export default function CodeEditor() {
    const [code, setCode] = React.useState(
        `#include <bits/stdc++.h>\nusing namespace std;\n\nint main(){\n  int a, b;\n  cin >> a >> b;\n  cout << "Sum of a+b: " << a + b;\n}`
    );
    return (
        <Editor
            className={styles.codeEditor}
            value={code}
            onValueChange={(code) => setCode(code)}
            highlight={(code) => highlight(code, languages.js)}
            padding={10}
            style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 12,
            }}
        />
    );
}
