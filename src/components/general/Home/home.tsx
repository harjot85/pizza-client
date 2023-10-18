import ActionBar from "./action-bar";
import MainNavigation from "./main-navigation";

import { styled } from "@mui/material";

const ComponentContainer = styled("div")({
  color: "#333533",
  backgroundColor: "#edc531",
  width: "100%",
  minHeight: '60rem'
});


export const Home = () => {
  return (
    <ComponentContainer>
      <ActionBar />

      <MainNavigation />

      <div id="contact-phone">Phone</div>
    </ComponentContainer>
  );
};