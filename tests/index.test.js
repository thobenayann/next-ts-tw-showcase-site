/* eslint-disable @typescript-eslint/no-unused-vars */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "../pages/index";
// components
// We are importing the Home component directly from our Next app
// because we will be rendering it during the test.
describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: "Voici une demo de site exploitant le modèle d'architecture de la Jamstack !",
    })

    expect(heading).toBeInTheDocument()
  })
})