import React from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';

const ArticleCard = ({ articleProps }) => {
  const { title, author, description, url, urlToImage } = articleProps;
  return (
    <>
      <StyledCard>
        <Card.Body>
          <Title>{title}</Title>
          <Author>{author}</Author>
          <Content>{description}</Content>
          <a href={url}>Go to article</a>
        </Card.Body>
        <StyledImg src={urlToImage} alt='Image is not provided' />
      </StyledCard>
    </>
  );
};

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: row;
  margin: 1rem 5rem;
  padding: 1rem;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 3rem;
`;

const Title = styled(Card.Title)`
  font-size: 2rem;
  color: black;
`;

const Author = styled(Card.Text)`
  font-size: 1.75rem;
  color: navy;
`;

const Content = styled(Card.Text)`
  font-size: 1.5rem;
  color: green;
`;

const StyledImg = styled(Card.Img)`
  align-self: center;
  height: 200px;
  width: auto;
`;

export default ArticleCard;
