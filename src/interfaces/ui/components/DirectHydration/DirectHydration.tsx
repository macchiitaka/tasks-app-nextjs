import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

export const DirectHydration: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setCurrentTime(Date.now());
    }, 16);
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <Root>
      <button
        type="button"
        onClick={() => {
          alert('Direct Hydration');
        }}
      >
        Direct Hydration: {currentTime}
      </button>
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 50vh;
  background-color: blue;
`;
