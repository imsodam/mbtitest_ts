import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { IResult } from 'stores/Result/types';

const Kakao = (window as any).Kakao;

interface Props {
  data: IResult;
}

let url = 'https://mbtitesttypescript.netlify.app';

React.useEffect(() => {
  Kakao.init('a7071df2766b22833a16fd7946c7f4a2');
}, []);

function KakaoShareButton(props: Props) {
  // const url = 'https://mbtitesttypescript.netlify.app';
  const resultUrl = window.location.href;

  // kakao sdk 접근했을 때
  // React.useEffect(() => {
  //   Kakao.init('a7071df2766b22833a16fd7946c7f4a2');
  // }, []);

  const shareKakao = () => {
    Kakao.Share.sendDefault({
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
  };

  return (
    <Button
      onClick={shareKakao}
      className="btn-warning"
      style={{ width: 170, marginTop: 20 }}
    >
      공유하기
    </Button>
  );
}

export default KakaoShareButton;
