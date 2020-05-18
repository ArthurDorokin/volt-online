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
            const byPopularityDate = this.state.catalog;
            console.log(byPopularityDate);
            const sortPopularityDate = byPopularityDate.sort((a, b) => a.id > b.id ? 1 : -1);
            this.setState({catalog: sortPopularityDate});
        }
        if (valueSort.value == 1) {
            const byPriceDate = this.state.catalog;
            console.log(byPriceDate);
            const sortPriceDate = byPriceDate.sort((a, b) => a.price > b.price ? 1 : -1);
            this.setState({catalog: sortPriceDate});
        }
        if (valueSort.value == 2) {
            const byNameDate = this.state.catalog;
            console.log(byNameDate);
            const sortNameData = byNameDate.sort((a, b) => a.info > b.info ? 1 : -1);
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