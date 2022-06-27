import React from 'react'
import Header from './Components/Header/Header'
import LandPage from './Components/LandPage/LandPage'

export default class App extends React.Component {
  
  
  
  state = {
    actualScreen: "landpage"
  } 


  render() {
    
    switch(this.state.actualScreen){
      case "landpage" : 
      return 
    }
    
    return (
      <div>
        <Header></Header>
        <LandPage></LandPage>
      </div>
    )
  }
}

