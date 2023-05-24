import React, { useEffect } from 'react';
// import { Button } from 'react-bootstrap';
import { IResult } from 'stores/Result/types';

interface Props {
  data: IResult;
}

let url = 'https://mbtitesttypescript.netlify.app';

function KakaoShareButton(props: Props) {
  // const url = 'https://mbtitesttypescript.netlify.app';

  // kakao sdk 접근했을 때
  // React.useEffect(() => {
  //   Kakao.init('a7071df2766b22833a16fd7946c7f4a2');
  // }, []);

  //return <div></div>;

  useEffect(() => {
    kakaoButton();
  }, []);

  const resultUrl = window.location.href;

  const kakaoButton = () => {
    if ((window as any).Kakao) {
      const kakao = (window as any).Kakao;

      if (!kakao.isInitialized()) {
        kakao.init('a7071df2766b22833a16fd7946c7f4a2');
      }

      kakao.Share.createDefaultButton({
        container: '#kakaotalk-sharing-btn',
        objectType: 'feed',
        content: {
          title: '😆 예비집사 판별기 결과 😆',
          description: `예비 집사님이 고양이를 키운다면 가장 잘맞는 고양이는 ${props.data.name}입니다.`,
          imageUrl: (url = props.data.image),
          link: {
            mobileWebUrl: resultUrl,
            webUrl: resultUrl,
          },
        },
        social: {
          likeCount: 10,
          commentCount: 20,
          sharedCount: 30,
        },
        buttons: [
          {
            title: '나도 테스트 하러가기',
            link: {
              mobileWebUrl: url,
              webUrl: url,
            },
          },
        ],
      });
    }
  };

  return (
    <button
      id="kakaotalk-sharing-btn"
      className="btn-warning"
      style={{ width: 170, marginTop: 20 }}
    >
      공유하기
    </button>
  );
}

export default KakaoShareButton;
