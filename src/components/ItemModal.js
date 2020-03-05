import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Container } from "reactstrap";
import { connect } from "react-redux";
import { addItem } from "../actions/itemActions";
class ItemModal extends Component {
  state = {
    name: "",
    email: "",
    file: null
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onPhotoUpload = e => {
    this.setState({ file: e.target.files[0] });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", this.state.name);
    data.append("profileimage", this.state.file);
    data.append("email", this.state.email);

    this.props.addItem(data);

    this.setState({ name: "", email: "", file: null });
  };

  render() {
    return (
      <Container>
        <h3 className="text-center">Add User</h3>
        <Form
          onSubmit={this.onSubmit}
          style={{ marginLeft: "5em", marginRight: "5em" }}
        >
          <FormGroup>
            <Label for="username">Username</Label>
            <Input
              type="text"
              name="name"
              id="name"
              placeholder="Username"
              value={this.state.name}
              onChange={this.onChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.onChange}
              req
            />
          </FormGroup>
          <FormGroup>
            <Label for="pic">Profile Image</Label>
            <Input
              type="file"
              name="file"
              id="pic"
              onChange={this.onPhotoUpload}
            />
          </FormGroup>
          <Button
            color="dark"
            style={{ marginTop: "1em", marginBottom: "2em" }}
          >
            {" "}
            Register User
          </Button>
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  item: state.item
});
export default connect(mapStateToProps, { addItem })(ItemModal);
