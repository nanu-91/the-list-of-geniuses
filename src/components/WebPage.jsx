import React from 'react';
import famous from './famous.svg';
import styled from 'styled-components';

import Page from './Page.jsx';
import Page0 from './Page0.jsx';

const ImgWrapper = styled.img`
  height: 40px;
  width: 40px;
  margin-right: 10px;
`;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
`;

const HeaderWrapper = styled.div`
  display: flex;
  font-family: 'Pacifico', cursive;
  font-size: 30px;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
`;

class WebPage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <PageWrapper>
        <HeaderWrapper><ImgWrapper src={famous} />Square Pegs</HeaderWrapper>
        <Page />
        <Page0 />
      </PageWrapper>
    )
  }
}

export default WebPage;
