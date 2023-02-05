import { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  min-height: 100%;
  min-width: 100%;
  background-color: #00000033;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Popup({
  children,
  visibility,
  setVisibility,
}: {
  children: React.ReactNode;
  visibility: boolean;
  setVisibility: Function;
}) {
  const target = useRef<HTMLInputElement>(null);

  const onClickPopup = useCallback((event: any) => {
    if (event.target.id.includes('popup')) {
      setVisibility(false);
    }
  }, []);
  useEffect(() => {}, []);

  return visibility ? (
    <Container id="popup" ref={target} onClick={onClickPopup}>
      {children}
    </Container>
  ) : null;
}

export default Popup;
