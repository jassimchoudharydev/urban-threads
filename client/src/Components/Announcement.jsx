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

function Announcement() {
  return (
    <Container>
      Enjoy 50% off on all items plus free shipping on orders over $50 at Urban
      Threads 🚀
    </Container>
  );
}

export default Announcement;
