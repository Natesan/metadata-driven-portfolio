import React from "react"
import Container from "../components/container"
import Header from "../components/header"
import Layout from "../components/layout"
import Links from "../components/links"
import "../styles/contact.css"
import oPageMetadata from "../../content/contact.yaml"

export default () => (
  <Container>
    <Layout pageTitle={oPageMetadata.title}>
      <Header headerText={oPageMetadata.headerText} />
      <div className="panel panel-default pt-2 text-center">
        <p>{oPageMetadata.introText}</p>
      </div>
      <div className="panel panel-default pt-5 text-center d-flex justify-content-center">
        <Links links={oPageMetadata.aContactLinkMetadata}></Links>
      </div>
    </Layout>
  </Container>
)
