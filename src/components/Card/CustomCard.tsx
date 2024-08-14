import React from 'react';
import styled from 'styled-components';

interface CardProps {
  width?: string;
  height?: string;
  shadow?: boolean;
  bgColor?: string; // 배경색 prop 추가
  children?: React.ReactNode; // children prop 정의
}

const CardContainer = styled.div<CardProps>`
  width: ${({ width }) => width || '408px'};
  height: ${({ height }) => height || '399px'};
  flex-shrink: 0;
  border-radius: 16px;
  border: 1px solid #f7662d;
  background: ${({ bgColor }) => bgColor || '#fff'}; // 배경색 설정
  box-shadow: ${({ shadow }) =>
    shadow ? 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)' : 'none'};

  display: flex;
  align-items: center;
  justify-content: center;
`;

const CustomCard = ({
  width,
  height,
  shadow,
  bgColor,
  children,
}: CardProps) => {
  return (
    <CardContainer
      width={width}
      height={height}
      shadow={shadow}
      bgColor={bgColor}
    >
      {children}
    </CardContainer>
  );
};

export default CustomCard;
