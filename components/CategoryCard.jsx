import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Link from 'next/link';
import styled from 'styled-components';

const CategoryCard = ({ categoryProps }) => {
  const { id, title, imageUrl } = categoryProps;

  return (
    <StyledCard key={id}>
      <Link href={`/categories/${title}`}>
        <StyledLink>{title}</StyledLink>
      </Link>
      <StyledImg variant='bottom' src={imageUrl} />
    </StyledCard>
  );
};

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  margin: 1rem;
`;

const StyledLink = styled.a`
  padding: 1rem;
  font-size: 3rem;
  text-transform: uppercase;
  text-decoration: underline;
  cursor: pointer;
`;

const StyledImg = styled(Card.Img)`
  height: 250px;
  width: 100%;
  overflow: hidden;
`;

export default CategoryCard;
