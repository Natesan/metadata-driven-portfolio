import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import Container from "../components/container"
import Links from "../components/links"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/index.css"
import oPageMetadata from "../../content/index.yaml"

export default () => (
  <Container>
    <Layout pageTitle={oPageMetadata.title}>
      <div className="jumbotron text-center my-2">
        <Header headerText={oPageMetadata.headerText}></Header>
      </div>
      <div className="panel panel-default pt-2 text-center">
        <p>{oPageMetadata.introText}</p>
      </div>
      <div className="panel panel-default pt-5 text-center d-flex justify-content-around">
        <Links links={oPageMetadata.homePageLinks}></Links>
      </div>
    </Layout>
  </Container>
)
