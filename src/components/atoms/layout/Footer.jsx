import { Link } from "react-router-dom";
import styled from "styled-components";

export const Footer = () => {
  return <SFooter>&copy; 2022 Feel Good Inc.</SFooter>;
};

const SFooter = styled.footer`
  background-color: #11999e;
  text-align: center;
  color: #fff;
  padding: 8px 0;
  position: fixed;
  bottom: 0px;
  width: 100%;
`;
