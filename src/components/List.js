import React, { Component } from "react";
import { Container } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import { getItems, deleteItem } from "../actions/itemActions";
import PropTypes from "prop-types";

class List extends Component {
  static propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.props.getItems();
  }

  render() {
    const { items } = this.props.item;
    return (
      <Container>
        <TransitionGroup>
          <h3 className="text-center">Users List</h3>
          <div className="row">
            {items.map(({ _id, name, email, img }) => (
              <CSSTransition key={_id} timeout={500} classNames="fade">
                <div className="col-md-3 mb-5">
                  <div className="card card-body text-center h-100">
                    <img
                      className="w-100"
                      src={`http://localhost:5000/` + img}
                      alt="User Pic"
                    />
                    <h5 className=" card-title" style={{ color: "teal" }}>
                      {name}
                    </h5>
                    <h6>{email}</h6>
                  </div>
                </div>
              </CSSTransition>
            ))}
          </div>
        </TransitionGroup>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  item: state.item
});

export default connect(mapStateToProps, { getItems })(List);
