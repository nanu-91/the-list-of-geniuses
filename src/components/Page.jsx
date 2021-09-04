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
        <Title onClick={() => this.showClick()}>Square Pegs</Title>
        {
          show
          ? <Desc>NFTs are sold today similarly to how they were historically sold. A rich patron funds or buys an artist’s work. In the last four years, key innovations have already taken place which could disrupt this. 

          Digital art today can have more uses than decoration. Artwork can come with voting rights to an ongoing project’s direction. Proceeds from artworks can be stored in a community bank as funds for a long term vision. And works of art stored on the blockchain are immune from degradation, destruction, and censorship.
          
          Our project combines all these features to curate the most influential people in the past, present, and future. The contributions of people who improve human civilization’s well being should be recognized and encouraged. Their artworks will be stored on the Ethereum network which ties the survivability of the artwork to the second largest blockchain.
          
          The collection’s use case is a marketplace that quantifies human inspiration. What that means is today, you can buy a company’s stock on the expectation it will be more profitable in the future. Imagine buying a stock of a historical figure on the expectation they will be more inspirational in the future. Symbols of inspiration are not new concepts. Popular examples include baseball cards
          </Desc>
          : <Desc></Desc>
        }
      </Wrapper>
    )
  }
}

export default Page;
