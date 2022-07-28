import React from "react";
import LandPage from "./Components/LandPage/LandPage";
import JobRegister from "./Components/JobRegister/JobRegister";
import JobList from "./Components/JobList/JobList";
import ShopCart from "./Components/ShopCart/ShopCart";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

export default class App extends React.Component {
  state = {
    actualScreen: "landpage",
    carrinho: [],
  };
  
  addServices = (info, name, jobs) => {
    const filterServices = jobs.filter((dados) => {
      return dados.id === info;
    });
    const cartCopy = [...this.state.carrinho];
    cartCopy.push(filterServices[0])
    this.setState({carrinho: cartCopy})
  };

  cleanCart = () =>{
    this.setState({carrinho:[]})
  }
  removeService = (id) => {    
    if (window.confirm('Tem certeza que deseja remover esse serviço do carrinho?')) {
    const deleteService = this.state.carrinho.filter((dados) => {
      return dados.id !== id;
    });
    this.setState({ carrinho: deleteService });
  }
  };
  changeScreen = () => {
    switch (this.state.actualScreen) {
      case "landpage":
        return <LandPage changeScreen={this.goTo}/>;
      case "jobRegister":
        return <JobRegister />;
      case "jobList":
        return (
          <JobList
            carrinho={this.state.carrinho}
            addServices={this.addServices}
            removeService={this.removeService}
            goTo={this.goTo}
          />
        );
      case "shopCart":
        return (
          <ShopCart
            addServices={this.addServices}
            removeService={this.removeService}
            carrinho={this.state.carrinho}
            cleanCart={this.cleanCart}
          />
        );
    }
  };

  goTo = (page) => {
    this.setState({ actualScreen: page });
  };

  render() {
    return (
      <div>
        <Header 
        removeService={this.removeService}
        carrinho={this.state.carrinho}
        changeScreen={this.goTo} />
        {this.changeScreen()}
        <Footer></Footer>
      </div>
    );
  }
}
