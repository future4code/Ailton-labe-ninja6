import React from "react";
import axios from "axios";
import {
  Container,
  JobCard,
  ContainerMid,
  ServiceTitle,
  DetailsDiv,
  Filter,
  PageCenter,
  MediumCart,
} from "./styled";
import Cart from "../img/iconcart.png";

const demoauth = {
  headers: { Authorization: "e2190c39-7930-4db4-870b-bed0e5e4b88e" },
};

export default class JobList extends React.Component {
  state = {
    jobs: [],
  };
  componentDidMount() {
    this.getAllJobs();
  }
  getAllJobs = () => {
    const url = "https://labeninjas.herokuapp.com/jobs";
    axios
      .get(url, demoauth)
      .then((res) => {
        this.setState({ jobs: res.data.jobs });
        console.log(res.data.jobs[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <>
        <Container>
          <ServiceTitle>Serviços disponíveis</ServiceTitle>
          <PageCenter>
            <Filter>
              Filtro
            </Filter>
            <ContainerMid>
              {this.state.jobs.map((data) => {
                return (
                  <JobCard key={data.id}>
                    <h1>{data.title.toUpperCase()}</h1>
                    <h3>{`$${data.price} Pila`}</h3>
                    <p>{`Data de expiração: ${data.dueDate.slice(8,10)}/${data.dueDate.slice(5, 7)}/${data.dueDate.slice(2,4)}`}</p>
                    <DetailsDiv>
                      <p>Ver Detalhes</p>
                      <img src={Cart} />
                    </DetailsDiv>
                  </JobCard>
                );
              })}
            </ContainerMid>
            <MediumCart>
              Carrinho
            </MediumCart>
          </PageCenter>
        </Container>
      </>
    );
  }
}
