import React, { Component } from "react";
import PropType from "prop-types"

class Decrement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: props.number
        };
    }

    decrementNumber = (state) => {
        if (state.number <= 0) {
            return alert("Number cannot be less than zero");
        }

        this.setState({number: state.number - 1});
    }

    render() {
        return (
            <>
                <div style={{margin: 0.5 + "rem"}}>
                    {this.state.number}
                    <button onClick={() => {this.decrementNumber(this.state)}}>Decrement</button>
                </div>
            </>
        )
    }
}

Decrement.propType = {
    number: PropType.number.isRequired
}

export default Decrement;