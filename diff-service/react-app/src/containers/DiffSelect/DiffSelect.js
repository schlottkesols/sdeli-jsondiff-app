import React, {Component} from "react";
import "./DiffSelect.scss";
import {connect} from "react-redux";
import {ListSelect} from "../../components";
import {Link} from 'react-router-dom'
import {EntryService} from "../../services";
import {addEntries, clearEntries} from "../../actions";

class DiffView extends Component {
    state = {};

    render() {
        const {entries, dispatch} = this.props;
        const selectV1 = (item) => {
            this.setState({
                selectedV1Item: item
            });
        };
        const selectV2 = (item) => {
            this.setState({
                selectedV2Item: item
            });
        };

        const onClick = (event) => {
            if (!this.state.selectedV1Item || !this.state.selectedV2Item) {
                event.preventDefault()
            }
        };

        const updateInputValue = (evt) => {
            this.setState({
                inputValue: evt.target.value
            });
        };

        const getRequests = () => {
            EntryService.getAll(this.state.inputValue)
                .then((result) => {
                    dispatch(clearEntries());
                    dispatch(addEntries(result.data))
                })
                .catch((error) => {
                    console.error(error)
                });
        };

        return <div className="DiffSelect">
            <div>
                <label>AppId</label>
                <input type="text" onChange={updateInputValue}/>
                <button onClick={getRequests}>Get List</button>
            </div>

            <ListSelect title={"Version 1"} list={entries.filter(item => item.version === "v1")} select={selectV1}/>
            <ListSelect title={"Version 2"} list={entries.filter(item => item.version === "v2")} select={selectV2}/>
            <Link to={{
                pathname: '/diff',
                params: {left: this.state.selectedV1Item, right: this.state.selectedV2Item}
            }}
                  onClick={onClick}>
                <button className="btn">Diff Selected</button>
            </Link>
        </div>;
    }
}

const mapStateToProps = (state) => {
    const {entries} = state;
    return {entries};
};

const mapDispatchToProps = dispatch => {
    return {
        dispatch
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DiffView);
