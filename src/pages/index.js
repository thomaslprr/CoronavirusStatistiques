import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import StatsGeneraux from "../components/StatsGeneraux"
import 'bootstrap/dist/css/bootstrap.min.css';
import TabPays from "../components/TabPays";






class index extends React.Component {
  

  state= {
    monde:true,
  };




  ActionMonde() {
    if(!this.state.monde){
      this.setState({monde: true});
    }
  }

  ActionPays(){
    if(this.state.monde){
      this.setState({monde: false});
    }
  }


  render() {

    if(this.state.monde){
      return (
        <Layout>
          <SEO title="Coronavirus Stats"></SEO>

          <div className="text-center mb-3">
            <button className="m-2 btn-sm btn-dark" onClick={() => this.ActionMonde()}>Monde</button>
            <button className="m-2 btn-sm btn-outline-dark" onClick={() => this.ActionPays()}>Par pays</button>
          </div>


          <StatsGeneraux></StatsGeneraux>
        </Layout>


    );
    }else{
      return (

        <Layout>
          <SEO title="Coronavirus Stats"></SEO>

          <div className="text-center mb-3">
            <button className="m-2 btn-sm btn-outline-dark" onClick={() => this.ActionMonde()}>Monde</button>
            <button className="m-2 btn-sm btn-dark" onClick={() => this.ActionPays()}>Par pays</button>
          </div>

          <TabPays/>

        </Layout>

      );
    }



}


}
export default index;


