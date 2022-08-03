import React, { useEffect, useRef, useState } from 'react';
import { styled } from '@mui/material/styles';
import './App.css';
import Header from './components/Header';

function App() {
  const [textarea, setTextarea] = useState<string>(
    '국민제안의 선정 방식도 많은 국민들이 공감하면 채택되는 바텀업(Bottom-up) 방식이 아니라 대통령실이 선정한 심사위원 11명에 의해 선정되는 방식이었다. 심사위원 명단이나 심사기준이 공개되어 있지 않다 보니 어떤 제안을 어떤 기준으로 선정하는 일반 국민은 알 길이 없고, 이러니 ‘짜고 치는 고스톱’이 아닌지 의심이 들 수밖에 없다'
  );
  const [isMore, setIsMore] = useState<number>(0);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (textRef.current === null) return;
    if (isMore) {
      textRef.current.style.height = `${textRef.current.offsetHeight}px`;
    }
  }, [isMore]);

  const RenderP = (props: { children: React.ReactNode }) => {
    const onBtnMoreClick = () => {
      setIsMore(1);
    };
    return (
      <div className='textWrap'>
        <p className='text' ref={textRef}>
          {props.children}
        </p>
        <div className='emptyBoxStyle'></div>
        <button className='moreShow' type='button' onClick={onBtnMoreClick}>
          더보기
        </button>
      </div>
    );
  };

  const onTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextarea(event.currentTarget.value);
  };

  return (
    <AppContainer ismore={isMore}>
      <Header />
      <div className='contextWrap'>
        <textarea
          className='textarea'
          value={textarea}
          onChange={onTextareaChange}
        />
        <RenderP>{textarea}</RenderP>
      </div>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled('div')<{ ismore: number }>`
  .contextWrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    background-color: #000;
    max-width: 900px;
    height: 80vh;

    .textarea {
      width: 100%;
      height: 300px;
      resize: none;
      border: nonr;
    }

    .textWrap {
      display: flex;
      justify-content: space-between;
      position: relative;
      width: 300px;
      .text {
        width: 100%;
        display: ${(props) => (props.ismore ? 'block' : '-webkit-box')};
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        white-space: pre-line;
        color: #fff;
        text-overflow: ellipsis;
        overflow: ${(props) => (props.ismore ? 'auto' : 'hidden')};
        line-height: 1.6;
      }
      .emptyBoxStyle {
        width: 50px;
        height: 100%;
      }
      .moreShow {
        position: absolute;
        border: none;
        background-color: inherit;
        color: gray;
        text-decoration: underline;
        right: 0;
        bottom: 19px;
        cursor: pointer;
      }
    }
  }
`;
