import React from 'react';
import styled from '@emotion/styled';
import {ApolloIcon} from '@apollo/space-kit/icons/ApolloIcon';
import {ReactComponent as DocsIcon} from '../../assets/roxabo.svg';

const Wrapper = styled.div({
  display: 'flex',
  fontSize: 24
});

const StyledApolloIcon = styled(ApolloIcon)({
  height: '1em',
  marginRight: '0.2857142857em'
});

const StyledDocsIcon = styled(DocsIcon)({
  marginTop: '0.07142857143em'
});

export default function Logo() {
  return (
    <Wrapper>
      <StyledDocsIcon />
    </Wrapper>
  );
}
