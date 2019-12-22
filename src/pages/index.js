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
      <div className="text-center">
        <Header headerText={oPageMetadata.headerText}></Header>
      </div>
      <div className="panel panel-default text-center my-3">
        <p>{oPageMetadata.introText}</p>
      </div>
      <div className="panel panel-default text-center d-flex justify-content-around my-3">
        <Links links={oPageMetadata.homePageLinks}></Links>
      </div>
    </Layout>
  </Container>
)
