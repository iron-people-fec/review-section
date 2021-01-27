import React from 'react';
import styled from 'styled-components';
import Helpful from './small-components/Helpful.jsx';

const Container = styled.div`
  width: 34%;
  color: #666666;
  font-size: 12px;
`
const Button = styled.button`
  display: inline-block;
  width: 120px;
  padding: 8px 0;
  border:#888888 solid 1px;
  border-radius: 4px;
  font-size: 12px;
  background-color: white;
  color: #333333;
  margin: 0 2px;

  &:hover {
    background-color: rgb(240, 240, 240);
    border-color: black;
    cursor: pointer;
  }

  &:focus {
    outline: gray 1px dashed;
    outline-offset: 2px;
  }
`
const Buttons = styled.div`
  margin-top: 1.2em;
`
const Links = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: baseline;
`
const ReportLink = styled.div`
  font-size: 14px;
  text-decoration: underline;
`


const Aside = ({ review, helpful, notHelpful, id}) => {


  return (
    <Container>
      <img src="https://i.ibb.co/pPgyT3v/screen-shot-2021-01-20-at-12-43-09-AM.png" style={{ height: "110px"}}></img>
      <div className="helpful-form">
        <span>{review.helpful_count <= 0 ? "Did you find this review helpful?" : <Helpful helpful_count={ review.helpful_count}/>} </span>
        <Links>
        <Buttons>
          <Button onClick={() => helpful(review.id)} data-id={id}>Helpful</Button>
          <Button onClick={() => notHelpful(review.id)} data-id={id}>Not helpful</Button>
        </Buttons>
        <ReportLink>Report review</ReportLink>
        </Links>
      </div>
    </Container>
  );
}

export default Aside;