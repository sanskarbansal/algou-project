import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vs } from "react-syntax-highlighter/dist/esm/styles/prism";

const components = {
    code({ node, inline, className, children, ...props }) {
        return !inline ? (
            <SyntaxHighlighter style={vs} PreTag="div" children={String(children).replace(/\n$/, "")} {...props} />
        ) : (
            <code className={className} {...props} />
        );
    },
};

export default function Markdown(props) {
    return (
        <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            linkTarget="_blank"
            components={components}
            remarkPlugins={[gfm]}
            children={props.content || props.children}
        />
    );
}
