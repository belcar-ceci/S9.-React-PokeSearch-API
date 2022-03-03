import React from "react";
// eslint-disable-next-line no-unused-vars
import { render, screen } from "@testing-library/react";

import Home from "./Home";



it('renders welcome message', () => {
  render(<Home />);
  expect(screen.getAllByText(/Pokémon Let's Go, Pikachu! y Let's Go, Eevee!/i)).toBeInTheDocument();
});