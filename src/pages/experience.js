import React from "react"
import Container from "../components/container"
import Header from "../components/header"
import Layout from "../components/layout"
import oPageMetadata from "../../content/experience.yaml"

export default () => (
  <Container>
    <Layout pageTitle={oPageMetadata.title}>
      <Header headerText={oPageMetadata.headerText} />
      {oPageMetadata.aExperience.map((oExperience, nExperienceIndex) => (
        <div className="my-3" key={nExperienceIndex}>
          <h5>{oExperience.title}</h5>
          <ul className="list-group list-group-flush mt-2">
            {oExperience &&
              oExperience.description.map((sDescription, nDescriptionIndex) => (
                <li
                  key={nDescriptionIndex}
                  className="list-group-item"
                  style={{ padding: ".25rem 1.25rem" }}
                >
                  {sDescription}
                </li>
              ))}
          </ul>
        </div>
      ))}
    </Layout>
  </Container>
)
