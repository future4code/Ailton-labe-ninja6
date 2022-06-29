import React from "react";
import LandPage from "./Components/LandPage/LandPage";
import JobRegister from "./Components/JobRegister/JobRegister";
import JobList from "./Components/JobList/JobList";
import ShopCart from "./Components/ShopCart/ShopCart";
import Header from "./Components/Header/Header";

export default class App extends React.Component {
  
  state = {
    actualScreen: "jobList",
  };

  changeScreen = () => {
    switch (this.state.actualScreen) {
      case "landpage":
        return <LandPage />;
      case "jobRegister":
        return <JobRegister />;
      case "jobList":
        return <JobList />;
      case "shopCart":
        return <ShopCart />;
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
