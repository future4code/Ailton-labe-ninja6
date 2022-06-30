import React from "react";
import axios from "axios";
import {
  Container,
  Containerzudo,
  Description,
  BackDetails, 
  PaymentDiv,
  MethodsCard
} from "../JobDetails/styled";
import Cart from "../img/iconcart.png";

const demoauth = {
  headers: { Authorization: "e2190c39-7930-4db4-870b-bed0e5e4b88e" },
};

export default class JobDetails extends React.Component {
  state = {
    jobInfos: {},
  };

  componentDidMount() {
    this.getJobById();
  }

  getJobById = () => {
    const url = `https://labeninjas.herokuapp.com/jobs/${this.props.id}`;

    axios
      .get(url, demoauth)
      .then((res) => {
        console.log(this.state.jobInfos)
        this.setState({ jobInfos: res.data });
      })
      .catch((error) => {
        alert("nosso server foi di beisi", error);
      });
  };

  render() {
    const paymentMethods = this.state.jobInfos.paymentMethods?.map((dados, index) => {
      return <MethodsCard key={index}>{dados.toUpperCase()}</MethodsCard>
    })
    return (
      <Containerzudo>
        <Container>
          <h1>{this.state.jobInfos.title?.toUpperCase()}</h1>
          <Description>{this.state.jobInfos.description}</Description>
          <PaymentDiv> Métodos de pagamento: {paymentMethods}</PaymentDiv>
          <h3>R$ {this.state.jobInfos.price} </h3>
          <h2>{`Data de expiração: ${this.state.jobInfos.dueDate?.slice(8, 10)}/${this.state.jobInfos.dueDate?.slice(5, 7)}/${this.state.jobInfos.dueDate?.slice(0, 4)}`}
          </h2>
          <BackDetails>
            <p onClick={this.props.closePopUp}>Voltar</p>
            <img src={Cart} />
          </BackDetails>
        </Container>
      </Containerzudo>
    );
  }
}
