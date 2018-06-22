import React, {Component} from "react";
import "./ListSelect.scss";
import PropTypes from 'prop-types'

class ListSelect extends Component {
    constructor() {
        super();
        this.state = {};
    }

    onSelected = (item, event) => {
        let {selection} = this.state;
        if(selection){
            selection.className = ""
        }

        event.target.className = "selected";
        this.props.select(item);
        this.setState({
            selection: event.target
        });
    };

    render() {
        const {list} = this.props;
        return <div className="list-select">
            <ul>
                <li className="title">{this.props.title}</li>
                {list.map(item =>
                    <li key={item.id} onClick={this.onSelected.bind(this, item)}>{new Date(item.createdAt).toUTCString()}</li>
                )}
            </ul>
        </div>
    }
};

ListSelect.propTypes = {
    title: PropTypes.string.isRequired,
    list: PropTypes.array.isRequired,
    select: PropTypes.func.isRequired
};

export default ListSelect;
