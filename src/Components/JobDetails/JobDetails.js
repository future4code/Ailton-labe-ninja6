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
  AddedDiv,
  AddDiv,
} from "../JobDetails/styled";
import Cart from "../img/iconcart.png";
import CartPreto from "../img/iconcartpreto.png";
import LoadingScreen from "../Loading Screen/LoadingScreen";

const demoauth = {
  headers: { Authorization: "e2190c39-7930-4db4-870b-bed0e5e4b88e" },
};

export default class JobDetails extends React.Component {
  state = {
    jobInfos: {},
    loading: true,
  };

  componentDidMount() {
    this.getJobById();
  }

  getJobById = () => {
    const url = `https://labeninjas.herokuapp.com/jobs/${this.props.id}`;
    axios
      .get(url, demoauth)
      .then((res) => {
        this.setState({ jobInfos: res.data, loading: false });
        this.isInCart()
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const filterId = this.props.carrinho?.some((data) => {
      return data.id === this.props.id
    });
    const paymentMethods = this.state.jobInfos.paymentMethods?.map(
      (dados, index) => {
        return <MethodsCard key={index}>{dados.toUpperCase()}</MethodsCard>;
      }
    );
    return (
      <Containerzudo>
        <Container>
          {this.state.loading ? (
            <LoadingScreen />
          ) : (
            <>
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
                {filterId ? (
                  <AddedDiv>
                    <p>Item adicionado ao carrinho</p>
                  </AddedDiv>
                ) : (
                  <AddDiv
                    onClick={() =>
                      this.props.addServices(
                        this.state.jobInfos.id,
                        this.state.jobInfos.title,
                        this.props.jobs,
                        )
                    }
                  >
                    <p>Adicionar ao Carrinho</p>
                    <img src={CartPreto} />
                  </AddDiv>
                )}
                <p onClick={() => this.props.deleteJob(this.state.jobInfos.id)}>
                  Excluir serviço
                </p>
                <p onClick={this.props.closePopUp}>Voltar</p>
              </BackDetails>
            </>
          )}
        </Container>
      </Containerzudo>
    );
  }
}