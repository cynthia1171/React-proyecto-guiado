import React, { Component } from "react";
import { connect } from "react-redux";
import { setCity } from "./../actions";//constante con llave
import LocationList from "./../components/LocationList";//componente sin llave


class LocationListContainer extends Component {
  handleSelectionLocation = city => {
    this.props.setCity(city);
  };
  render() {
    return (
      <div>
        <LocationList cities={this.props.cities} onSelectedLocation={this.handleSelectionLocation} />
      </div>
    )
  }  
}

// esta función nos deja trabajar con las acciones
const mapDispatchToPropsActions = (dispatch) => ({
  setCity: value => dispatch(setCity(value))
});


export default connect(null, mapDispatchToPropsActions)(LocationListContainer);