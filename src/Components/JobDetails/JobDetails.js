import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Container, Containerzudo } from '../JobDetails/styled';
import Cart from "../img/iconcart.png";

const demoauth = {
  headers: { Authorization: "e2190c39-7930-4db4-870b-bed0e5e4b88e" },
};

export default class JobDetails extends React.Component {

  state = {
    jobInfos: {}
  }

  componentDidMount() {
    this.getJobById()
  }

  getJobById = () => {

    const url = `https://labeninjas.herokuapp.com/jobs/${this.props.id}`

    axios.get(url, demoauth)
      .then((res) => {
        this.setState({ jobInfos: res.data })
      })
      .catch((error) => {
        alert("nosso server foi di beisi", error)
      })
  }

  render() {

    return (
      <Containerzudo onClick={this.props.closePopUp}>
      <Container>
        <h1>{this.state.jobInfos.title}</h1>
        <h2>{this.state.jobInfos.description}</h2>
        <h2>{this.state.jobInfos.price}</h2>
        <h2>{this.state.jobInfos.dueDate}</h2>
        <div>
          
          <p>Voltar</p>
          <img src={Cart} />

        </div>
      </Container>
      </Containerzudo>
    )
  }
}
