import React, {Component} from "react";
import "./JsonView.scss";
import prettyHtml from "json-pretty-html";

class JsonView extends Component {
    render() {
        let title = this.props.title;
        let json = this.props.json;

        return (
            <div className="json">
                <h3>{title}</h3>
                <p
                    dangerouslySetInnerHTML={{
                        __html: prettyHtml(json, json.dimensions)
                    }}
                />
            </div>
        );
    }
}

export default JsonView;
