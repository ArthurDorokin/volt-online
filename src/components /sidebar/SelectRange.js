import React, {Component} from "react";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const {createSliderWithTooltip} = Slider;
const Range = createSliderWithTooltip(Slider.Range);


class SelectRange extends Component {
    state = {
        sliderValues: [12000, 15000]
    }

    handleChange124 = sliderValues => {
        this.setState({sliderValues});
    };

    render() {

        const {sliderValues} = this.state;

        return (
            <div className="filter-price">
                {/*{sliderValues[0]} - {sliderValues[1]}*/}
                <Range
                    marks={{
                        10999: `грн 10999`,
                        23899: `грн 23899`
                    }}
                    min={10999}
                    max={23899}
                    defaultValue={sliderValues}
                    onChange={this.handleChange124}
                    tipFormatter={value => `${value}`}
                    tipProps={{
                        placement: "top",
                        visible: true
                    }}
                />
            </div>
        )
    }

};

export default SelectRange;