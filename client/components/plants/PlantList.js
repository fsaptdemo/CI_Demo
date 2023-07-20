import React from "react";
import { connect } from "react-redux";
import { getUserPlants } from "../../store/actions/userActions";
//components
import PlantCard from "./PlantCard";

class PlantList extends React.Component {
  componentDidUpdate(prevProps) {
    if (prevProps.token !== this.props.token) {
      this.props.getPlants(this.props.token);
    }
  }

  render() {
    const { plants, username } = this.props;
    return (
      <div>
        <h1>Plant List For {username} </h1>
        {plants.length > 0 ? (
          plants.map((plant) => {
            return <PlantCard key={plant.id} plant={plant} />;
          })
        ) : (
          <h3>{username} Has No Plants</h3>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.username,
    token: state.token,
    plants: state.plants,
    loggedIn: state.loggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPlants: (token) => dispatch(getUserPlants(token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlantList);
