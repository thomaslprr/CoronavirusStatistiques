import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import StatsGeneraux from "../components/StatsGeneraux"
import 'bootstrap/dist/css/bootstrap.min.css';



class index extends React.Component {

  state= {
    monde:true,
  };

  ActionMonde() {
    if(!this.state.monde){
      this.setState({monde: false});
    }
  }


  render() {

    if(this.state.monde){
      return (
        <Layout>
          <SEO title="Coronavirus Stats"></SEO>

          <div className="text-center">
            <button className="m-2 btn-sm" onClick={() => this.ActionMonde()}>Monde</button>
            <button className="m-2 btn-sm" onClick={() => this.ActionPays()}>Par pays</button>
          </div>


          <StatsGeneraux></StatsGeneraux>
        </Layout>

      );
    }else{
      return (
        <Layout>
          <SEO title="Coronavirus Stats"></SEO>

          <div className="text-center">
            <button className="m-2 btn-sm" onClick={() => this.ActionMonde()}>Monde</button>
            <button className="m-2 btn-sm" onClick={() => this.ActionPays()}>Par pays</button>
          </div>


          <StatsGeneraux></StatsGeneraux>
        </Layout>

      );
    }



}


}
export default index;


