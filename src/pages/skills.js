import React from "react"
import Container from "../components/container"
import Header from "../components/header"
import Layout from "../components/layout"
import oPageMetadata from "../../content/skills.yaml"

export default () => (
  <Container>
    <Layout pageTitle={oPageMetadata.title}>
      <Header headerText={oPageMetadata.headerText} />
      <div className="my-3">
        <ul className="list-group list-group-flush mt-4 d-flex flex-column justify-content-between">
          {oPageMetadata.aSkill &&
            oPageMetadata.aSkill.map((sSkill, nSkillIndex) => (
              <li
                key={nSkillIndex}
                className="list-group-item"
                style={{ padding: ".25rem 1.25rem" }}
              >
                {sSkill}
              </li>
            ))}
        </ul>
      </div>
    </Layout>
  </Container>
)
