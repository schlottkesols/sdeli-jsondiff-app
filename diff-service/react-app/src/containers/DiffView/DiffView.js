import React, {Component} from "react";
import "./DiffView.scss";
import {JsonDiff} from "../../components";
import {connect} from "react-redux";
import {Link, Redirect} from 'react-router-dom'

class DiffView extends Component {
    render() {
        const {left, right} = this.props;
        const redirect = () => {
            if (left && right) {
                return <JsonDiff left={left} right={right}/>
            }
            return <Redirect to="/"/>
        };

        return <div>
            <Link to="/">
                <button className="btn">Back</button>
            </Link>
            {redirect()}
        </div>;
    }
}

const mapStateToProps = (state, props) => {
    const {left, right} = props.location.params ? props.location.params : {left: null, right: null};
    return {left, right};
};

export default connect(
    mapStateToProps
)(DiffView);
