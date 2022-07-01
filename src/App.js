import React from "react";
import LandPage from "./Components/LandPage/LandPage";
import JobRegister from "./Components/JobRegister/JobRegister";
import JobList from "./Components/JobList/JobList";
import ShopCart from "./Components/ShopCart/ShopCart";
import Header from "./Components/Header/Header";

export default class App extends React.Component {
  state = {
    actualScreen: "jobRegister",
    carrinho: [],
  };
  addServices = (info, name, jobs) => {
    const filterServices = jobs.filter((dados) => {
      return dados.id === info;
    });
    const cartCopy = [...this.state.carrinho];
    const cartControl = cartCopy
      .map((item) => {
        return item.id;
      })
      .find((dado) => {
        return dado === info;
      });
    if (cartControl === undefined) {
      cartCopy.push(filterServices[0]);
      this.setState({ carrinho: cartCopy });
    } else {
      alert(`O serviço ${name} já foi adicionado.`);
    }
  };
  removeService = (id) => {
    const deleteService = this.state.carrinho.filter((dados) => {
      return dados.id !== id;
    });
    this.setState({ carrinho: deleteService });
  };
  changeScreen = () => {
    switch (this.state.actualScreen) {
      case "landpage":
        return <LandPage />;
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
            carrinho={this.state.carrinho}
            removeService={this.removeService}
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
        <Header changeScreen={this.goTo} />
        {this.changeScreen()}
      </div>
    );
  }
}
