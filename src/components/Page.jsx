import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  font-family: 'Didact Gothic', sans-serif;
  font-size: 18px;
  flex-direction: column;
  padding-left: 30px;
  padding-right: 30px;
  width: 80%;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: 30px;
  text-align: left;
`;

const Desc = styled.div`
  text-align: left;
  margin-bottom: 40px;
`;

class Page extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      show: true,
    }

    this.showClick = this.showClick.bind(this);
  }

  showClick() {
    const { show } = this.state;
    this.setState({
      show: !show
    });
  }

  render() {

    const { show } = this.state;
    return (
      <Wrapper>
        <Title onClick={() => this.showClick()}>WTF?</Title>
        {
          show
          ? <Desc>Nouns are an experimental attempt to improve the formation of on-chain avatar communities. While projects such as Cryptopunks have attempted to bootstrap digital community and identity, Nouns attempt to bootstrap identity, community, governance and a treasury that can be used by the community for the creation of long-term value.
          Learn more about on-chain nouns below, or make some off-chain nouns using nouns playground.</Desc>
          : <Desc></Desc>
        }
      </Wrapper>
    )
  }
}

export default Page;
