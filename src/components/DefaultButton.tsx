import styled from "styled-components";

const Button = styled.button`
  padding: 24px;
  font-size: 24px;
`

type DefaultButtonProps = {
  size: 'S' | 'M' | 'L',
  style: 'primary' | 'warning' | 'disabled'
}

const DefaultButton = ({ size, style }: DefaultButtonProps) => {
  return <>
    <Button>사이즈: {size}, 스타일: {style}</Button>
  </>
}


export default DefaultButton
