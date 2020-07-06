import React, {Component} from "react";
import Select from "react-select";
import {selectCheckbox} from "./constant";


class SelectIcon extends Component {
    state = {
        valueCheckbox: {name: this.props, value: this.props}
    }

    handleChangeCheckbox = valueCheckbox => {
        this.setState({value: valueCheckbox});
        console.log(`select checkbox:`, valueCheckbox);
    };

    render() {

        const {selectCheck} = this.state;

        return (
            <div className="filter-iconList">
                <Select
                    value={selectCheck}
                    onChange={this.handleChangeCheckbox}
                    options={selectCheckbox}
                />
            </div>
        )
    }

};

export default SelectIcon;