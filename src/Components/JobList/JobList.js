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
  FooterCart,
  NameAndPrice,
  FilterTypeSelect,
  FilterAndSamuraizudo,
  BuyButton,
  ClickedItem,
  ViewDetailsP,
} from "./styled";
import Cart from "../img/iconcart.png";
import JobDetails from "../JobDetails/JobDetails";
import lixo from "../img/latadelixo.png";
import Samuraizudo from "../img/samuraizudo.webp";
import LoadingScreen from "../Loading Screen/LoadingScreen";

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
    loading: true,
  };

  componentDidMount() {
    this.getAllJobs();
  }

  getAllJobs = () => {
    const url = "https://labeninjas.herokuapp.com/jobs";
    axios
      .get(url, demoauth)
      .then((res) => {
        this.setState({ jobs: res.data.jobs, loading: false });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  deleteJob = (id) => {
    const url = `https://labeninjas.herokuapp.com/jobs/${id}`;
    axios
      .get(url, demoauth)
      .then((res) => {
        // console.log(res);
        alert("Serviço deletado");
      })
      .catch((res) => {
        alert("Nosso servidor foi de berço");
      });
  };

  getActualId = (id) => {
    this.setState({ clickedService: id });
    this.setState({ details: true });
  };

  closePopUp = () => {
    this.setState({ details: false });
  };

  handleInputQuery = (e) => {
    this.setState({ query: e.target.value });
  };

  handleInputMinPrice = (e) => {
    this.setState({ minPrice: e.target.value });
  };

  handleInputMaxPrice = (e) => {
    this.setState({ maxPrice: e.target.value });
  };

  handleInputSortingParameter = (e) => {
    this.setState({ sortingParameter: e.target.value });
  };

  handleInputOrder = (e) => {
    this.setState({ order: e.target.value });
  };

  teste = () => {
    const JobIds = this.state.jobs.map((data) => {
      return data.id;
    });
    const cartIds = this.props.carrinho.map((data) => {
      return data.id;
    });
    // console.log(JobIds, cartIds);
  };

  render() {
    const added = this.state.jobs
      .filter((job) => {        
        return (
          job.title
            .toLowerCase()
            .includes(this.state.query.toLowerCase()) || // Avisar o Daniel!!!
          job.description
            .toLowerCase()
            .includes(this.state.query.toLowerCase())
        );
      })
      .filter((job) => {
        return (
          this.state.minPrice === "" ||
          job.price >= this.state.minPrice
        );
      })
      .filter((job) => {
        return (
          this.state.maxPrice === "" ||
          job.price <= this.state.maxPrice
        );
      })
      .sort((currentJob, nextJob) => {
        switch (this.state.sortingParameter) {
          case "title":
            return (
              this.state.order *
              currentJob.title.localeCompare(nextJob.title)
            );
          case "dueDate":
            return (
              this.state.order *
              (new Date(currentJob.dueDate).getTime() -
                new Date(nextJob.dueDate).getTime())
            );
          default:
            return (
              this.state.order * (currentJob.price - nextJob.price)
            );
        }
      })
      .map((data) => {        
        const isInCart = this.props.carrinho.some((dataCart) => {
          console.log('a')
          return data === dataCart;
        });                  
        if (isInCart) {
          return (
            <JobCard key={data.id}>
              <h1>{data.title.toUpperCase()}</h1>
              <h3>{`$${data.price}`}</h3>
              <p>{`Data de expiração: ${data.dueDate.slice(
                8,
                10
              )}/${data.dueDate.slice(5, 7)}/${data.dueDate.slice(
                2,
                4
              )}`}</p>
              <DetailsDiv>
                <ViewDetailsP onClick={() => this.getActualId(data.id)}>
                  Ver Detalhes
                </ViewDetailsP>
                <ClickedItem>Item adicionado ao carrinho</ClickedItem>                          
              </DetailsDiv>
            </JobCard>
          );
        } else {
          return (
            <JobCard key={data.id}>
              <h1>{data.title.toUpperCase()}</h1>
              <h3>{`$${data.price}`}</h3>
              <p>{`Data de expiração: ${data.dueDate.slice(
                8,
                10
              )}/${data.dueDate.slice(5, 7)}/${data.dueDate.slice(
                2,
                4
              )}`}</p>
              <DetailsDiv>
                <ViewDetailsP onClick={() => this.getActualId(data.id)}>
                  Ver Detalhes
                </ViewDetailsP>
                <img
                  onClick={() =>
                    this.props.addServices(
                      data.id,
                      data.title,
                      this.state.jobs
                    )
                  }
                  src={Cart}
                />
              </DetailsDiv>
            </JobCard>
          );
        }
      })

    const cartAdd = this.props.carrinho.map((dados) => {
      return (
        <CartCard key={dados.id}>
          <NameAndPrice>
            <p>{dados.title.toUpperCase()}</p>
            <p>${dados.price}</p>
          </NameAndPrice>
          <img src={lixo} onClick={() => this.props.removeService(dados.id)} />
        </CartCard>
      );
    });
    const somaPrecos = this.props.carrinho
      .map((item) => item.price)
      .reduce((prev, curr) => prev + curr, 0);
    return (
      <>
        <Container>
          {this.state.details && (
            <JobDetails
              jobs={this.state.jobs}
              addServices={this.props.addServices}
              closePopUp={this.closePopUp}
              id={this.state.clickedService}
              deleteJob={this.deleteJob}
              carrinho={this.props.carrinho}
            />
          )}
          <ServiceTitle>Serviços disponíveis</ServiceTitle>
          <PageCenter>
            <FilterAndSamuraizudo>
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

                <FilterTypeSelect>
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
                </FilterTypeSelect>

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
              <img src={Samuraizudo} />
            </FilterAndSamuraizudo>

            <ContainerMid>
              {this.state.loading && <LoadingScreen />}
              {added}
            </ContainerMid>
            <MediumCart>
              <h1>CARRINHO</h1>
              {this.props.carrinho.length >= 1 ? (
                <ServiceCart>{cartAdd}</ServiceCart>
              ) : (
                <p>Adicione um item ao carrinho</p>
              )}
              <FooterCart>
                <h4 onClick={this.testaBool}>Valor total: ${somaPrecos}</h4>
                <BuyButton onClick={() => this.props.goTo("shopCart")}>
                  Finalizar Compra
                </BuyButton>
              </FooterCart>
            </MediumCart>
          </PageCenter> 
            <img src={Samuraizudo} />
        </Container>
      </>
    );
  }
}
