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
    query: "",
    minPrice: "",
    maxPrice: "",
    sortingParameter: "title",
    order: 1,
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

  handleInputQuery = (e) => {
    this.setState({ query: e.target.value })
  }

  handleInputMinPrice = (e) => {
    this.setState({ minPrice: e.target.value })
  }

  handleInputMaxPrice = (e) => {
    this.setState({ maxPrice: e.target.value })
  }

  handleInputSortingParameter = (e) => {
    this.setState({ sortingParameter: e.target.value })
  }

  handleInputOrder = (e) => {
    this.setState({ order: e.target.value })
  }

  render() {
    return (
      <>
        <Container>
          <ServiceTitle>Serviços disponíveis</ServiceTitle>
          <PageCenter>
            <Filter>
              <h2>FILTROS</h2>
              <span>
              <input
                type="text"
                placeholder="Pesquisa"
                value={this.state.query}
                onChange={this.handleInputQuery}
              />
              </span>
              
              <span>
              <input
                type="number"
                placeholder="Preço Mínimo"
                value={this.state.minPrice}
                onChange={this.handleInputMinPrice}
              />
              </span>
              
              <span>
              <input
                type="number"
                placeholder="Preço Máximo"
                value={this.state.maxPrice}
                onChange={this.handleInputMaxPrice}
              />
              </span>

              <div>
                <label> Filtro: </label>
                <select
                  name="sort"
                  value={this.state.sortingParameter}
                  onChange={this.handleInputSortingParameter}
                >
                  <option value="title"> Título </option>
                  <option value="price"> Preço </option>
                  <option value="dueDate"> Prazo </option>
                </select>
              </div>

              <div>
                <label> Ordenação: </label>
                <select
                  name="order"
                  value={this.state.order}
                  onChange={this.handleInputOrder}
                >
                  <option value={1}> Crescente </option>
                  <option value={-1}> Decrescente </option>
                </select>
              </div>

            </Filter>
            <ContainerMid>
              {this.state.jobs
                .filter(job => {
                  return job.title.toLowerCase().includes(this.state.query) ||
                    job.description.toLowerCase().includes(this.state.query)
                })
                .filter(job => {
                  return this.state.minPrice === "" || job.price >= this.state.minPrice
                })
                .filter(job => {
                  return this.state.maxPrice === "" || job.price <= this.state.maxPrice
                })
                .sort((currentJob, nextJob) => {
                  switch (this.state.sortingParameter) {
                   case "title":
                    return this.state.order * (currentJob.title.localeCompare(nextJob.title))
                      case "dueDate":
                        return this.state.order * (new Date (currentJob.dueDate).getTime() - new Date(nextJob.dueDate).getTime())
                      default:
                        return this.state.order * (currentJob.price - nextJob.price)
                }
                })
                .map((data) => {
                  return (
              <JobCard key={data.id}>
                <h1>{data.title.toUpperCase()}</h1>
                <h3>{`$${data.price} Pila`}</h3>
                <p>{`Data de expiração: ${data.dueDate.slice(8, 10)}/${data.dueDate.slice(5, 7)}/${data.dueDate.slice(2, 4)}`}</p>
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
