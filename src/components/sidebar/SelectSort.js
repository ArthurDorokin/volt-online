import React, {Component} from "react";
import Select from "react-select";
import {catalog, selectSort} from "./constant";

class SelectSort extends Component {
    state = {
        catalog,
        valueSort: {label: this.props, value: this.props}

    }

    handleChange = valueSort => {
        if (valueSort.value == 0) {
            const byPopularityData = this.state.catalog;
            console.log(byPopularityData);
            const sortPopularityData = byPopularityData.sort((a, b) => a.id > b.id ? 1 : -1);
            this.setState({catalog: sortPopularityData});
        }
        if (valueSort.value == 1) {
            const byPriceData = this.state.catalog;
            console.log(byPriceData);
            const sortPriceData = byPriceData.sort((a, b) => a.price > b.price ? 1 : -1);
            this.setState({catalog: sortPriceData});
        }
        if (valueSort.value == 2) {
            const byNameData = this.state.catalog;
            console.log(byNameData);
            const sortNameData = byNameData.sort((a, b) => a.info > b.info ? 1 : -1);
            this.setState({catalog: sortNameData});
        }
    };

    render() {
        const {selectedOption} = this.state;
        return (
            <div className="sortList">
                <Select
                    value={selectedOption}
                    onChange={this.handleChange}
                    options={selectSort}
                    defaultValue={{label: "по популярности", value: 0}}
                />
            </div>
        )
    }

};

export default SelectSort;