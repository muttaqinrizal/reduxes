import React from "react";
import PropTypes from "prop-types";

const diskonJumlah = items => {
  return (items / 4) * 100;
};

const Count = props => {
  return (
    <div>
      <h3>Count : {props.jumlah}</h3>
      <h3>Discount : {diskonJumlah(props.jumlah)}%</h3>
    </div>
  );
};

Count.propTypes = {
  jumlah: PropTypes.number
};

Count.defaultProps = {
  jumlah: 0
};

export default Count;
