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
  ServiceCart,
  CartCard,
  FooterCart
} from "./styled";
import Cart from "../img/iconcart.png";
import JobDetails from "../JobDetails/JobDetails";

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
    details: false,
    clickedService: "",
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
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getActualId = (id) => {
    this.setState({ clickedService: id})
    this.setState({ details: true})
  }

  closePopUp = () => {
    this.setState({ details: false})
  }

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
      const cartAdd = this.props.carrinho.map((dados)=>{
        return (
        <CartCard>
          <p>{dados.title}</p>
          <p>R$:{dados.price}</p>
          <button onClick={()=>this.props.removeService(dados.id)}>x</button>
          </CartCard>
      )})
      const somaPrecos = this.props.carrinho
      .map((item) => item.price)
      .reduce((prev, curr) => prev + curr, 0);
    return (
      <>
        <Container>
          {this.state.details && <JobDetails  jobs={this.state.jobs} addServices={this.props.addServices} closePopUp={this.closePopUp} id={this.state.clickedService}/>}
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
                  return job.title.toLowerCase().includes(this.state.query.toLowerCase()) || // Avisar o Daniel!!!
                    job.description.toLowerCase().includes(this.state.query.toLowerCase())
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
                      return this.state.order * (new Date(currentJob.dueDate).getTime() - new Date(nextJob.dueDate).getTime())
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
                        <p onClick={() => this.getActualId(data.id)}>Ver Detalhes</p>
                        <img onClick={()=>this.props.addServices(data.id,data.title,this.state.jobs)} src={Cart} />
                      </DetailsDiv>
                    </JobCard>
                  );
                })}
            </ContainerMid>
            <MediumCart>
              <h1>Carrinho</h1>
              <ServiceCart>{cartAdd}</ServiceCart>
              <FooterCart>
              <h4>Valor total: R$ ${somaPrecos}</h4>
              <button onClick={()=>this.props.goTo("shopCart")} >Finalizar Compra</button>
              </FooterCart>
            </MediumCart>
          </PageCenter>
        </Container>
      </>
    );
  }
}
