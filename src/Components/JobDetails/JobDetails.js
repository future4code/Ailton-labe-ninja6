import React from "react";
import axios from "axios";
import {
  Container,
  Containerzudo,
  Description,
  BackDetails,
  PaymentDiv,
  MethodsCard,
  MethodsDiv,
  ValueAndDate,
  InfosDiv,
} from "../JobDetails/styled";
import Cart from "../img/iconcart.png";
import CartPreto from "../img/iconcartpreto.png";

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
        console.log(this.state.jobInfos);
        this.setState({ jobInfos: res.data });
      })
      .catch((error) => {
        alert("nosso server foi di beisi", error);
      });
  };

  render() {
    const paymentMethods = this.state.jobInfos.paymentMethods?.map(
      (dados, index) => {
        return <MethodsCard key={index}>{dados.toUpperCase()}</MethodsCard>;
      }
    );
    return (
      <Containerzudo>
        <Container>
          <h1>{this.state.jobInfos.title?.toUpperCase()}</h1>
          <Description>{this.state.jobInfos.description}</Description>
          <PaymentDiv>
            Métodos de pagamento
            <MethodsDiv>{paymentMethods}</MethodsDiv>
          </PaymentDiv>
          <ValueAndDate>
            <InfosDiv>
              <p>Valor Total</p>
              <h2>${this.state.jobInfos.price} </h2>
            </InfosDiv>

            <InfosDiv>
              <p>Data de expiração</p>
              <h2>
                {`${this.state.jobInfos.dueDate?.slice(
                  8,
                  10
                )}/${this.state.jobInfos.dueDate?.slice(
                  5,
                  7
                )}/${this.state.jobInfos.dueDate?.slice(0, 4)}`}
              </h2>
            </InfosDiv>
          </ValueAndDate>
          <BackDetails>
            <div
            onClick={() =>
              this.props.addServices(
                this.state.jobInfos.id,
                this.state.jobInfos.title,
                this.props.jobs
              )
            }>
              <p>Adicionar ao Carrinho</p>
              <img               
                src={CartPreto}
              />
            </div>
            <p onClick={this.props.closePopUp}>Voltar</p>
          </BackDetails>
        </Container>
      </Containerzudo>
    );
  }
}
