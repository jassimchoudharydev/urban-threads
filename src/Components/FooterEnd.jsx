import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  padding: 10px 0;
`;

const FooterEnd = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Container>© {currentYear} Urban Threads. All rights reserved.</Container>
  );
};

export default FooterEnd;
