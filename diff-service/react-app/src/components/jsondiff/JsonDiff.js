import React, {Component} from "react";
import "./JsonDiff.scss";
import * as jsondiffpatch from "jsondiffpatch";
import {JsonView} from "../jsonview";

class JsonDiff extends Component {
    render() {
        let left = this.props.left;
        let right = this.props.right;
        let diffed = jsondiffpatch.diff(left, right);
        let diffHtml = jsondiffpatch.formatters.html.format(diffed, left);
        jsondiffpatch.formatters.html.hideUnchanged();

        let handleClick = function (cb) {
            if (cb.target.checked) jsondiffpatch.formatters.html.showUnchanged();
            else jsondiffpatch.formatters.html.hideUnchanged();
        };

        return (
            <div className="diff">
                <div className="diff-left">
                    <JsonView title="Left" json={left}/>
                </div>
                <div className="diff-right">
                    <JsonView title="Right" json={right}/>
                </div>
                <div className="diff-result">
                    <h3>Diff</h3>
                    <div>
                        <input type="checkbox" onClick={handleClick}/>
                        <label>Show Unchanged</label>
                    </div>
                    <p
                        dangerouslySetInnerHTML={{
                            __html: diffHtml
                        }}
                    />
                </div>
            </div>
        );
    }
}

export default JsonDiff;
