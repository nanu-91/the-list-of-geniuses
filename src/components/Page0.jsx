import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  font-size: 18px;
  flex-direction: column;
  padding-left: 30px;
  padding-right: 30px;
  width: 80%;
  justify-content: flex-start;
  align-items: flex-start;
  font-family: 'Didact Gothic', sans-serif;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: 30px;
`;

const Desc = styled.div`
  text-align: left;
  font-family: 'Didact Gothic', sans-serif;
  margin-bottom: 40px;
`;

class Page0 extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      show: false,
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
        <Title onClick={() => this.showClick()}>Summary</Title>
        {
          show
          ? <Desc>
              <ul>
                <li>1 artwork of a genius is added to the collection every two week.</li>
                <li>100% of the artwork’s proceeds goes to the community wallet.</li>
                <li>The community votes on each next genius.</li>
                <li>Artworks stored on chain</li>
              </ul>
          </Desc>
          : <Desc></Desc>
        }
      </Wrapper>
    )
  }
}

export default Page0;
