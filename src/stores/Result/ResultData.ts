import { IResult } from './types';

import Abyssinian from '../../assets/cat/cat3.jpg';
import Ameshort from '../../assets/cat/cat4.jpg';
import Bengal from '../../assets/cat/cat5.jpg';
import British from '../../assets/cat/cat6.jpg';
import Exotic from '../../assets/cat/cat7.jpg';
import Korshort from '../../assets/cat/cat8.jpg';
import Mainecoon from '../../assets/cat/cat9.jpg';
import Munchkin from '../../assets/cat/cat10.jpg';
import Norwegianforest from '../../assets/cat/cat2.jpg';
import Persian from '../../assets/cat/cat3.jpg';
import Ragdoll from '../../assets/cat/cat4.jpg';
import Russianblue from '../../assets/cat/cat5.jpg';
import Scottishfold from '../../assets/cat/cat6.jpg';
import Siamese from '../../assets/cat/cat7.jpg';
import Sphinx from '../../assets/cat/cat2.jpg';
import Turkishangora from '../../assets/cat/cat8.jpg';

export const ResultData:  IResult[] = [
  {
    id: 1,
    name: '러시안 블루',
    best: 'ESTJ', // 집사의 MBTI
    mbti: 'ISFJ',
    desc: '러시안 블루는 부드럽고 조용하며 상대방을 잘 이해하는 다정한 고양이에요. 집사의 기분을 잘 감지하고 심지어 집사가 슬퍼하면 안아주는 상냥함을 지니고 있어요. 러시안블루는 내성적이지만 누군가를 신뢰하기 시작한다면 정말 다정해지며 도우려 하는 애정 넘치는 고양이랍니다',
    image: `${Russianblue}`,
  },
  {
    id: 2,
    name: '샴',
    best: 'ESFP',
    mbti: 'INFP',
    desc: '샴고양이는 외향적이면서도 매우 지배적인 성격을 갖고 있습니다. 그래서 자신이 무엇인가 필요하다면 끊임없이 대화하고 알리지요. 실제로 샴고양이는 집사가 자기에게 주의를 기울이고, 자기가 원하는 것을 해주기를 기대하는 측면이 있답니다. 집사를 지배하고 싶어 하는 샴고양이는 귀여운 지배자이지요.',
    image: `${Siamese}`,
  },
  {
    id: 3,
    name: '페르시안',
    best: 'ENTJ',
    mbti: 'ISTP',
    desc: '느긋하면서도 우아한 고양이인 페르시안 고양이에요. 페르시안 고양이는 집사에게 충실하며 평화롭고 고요한 환경을 선호합니다. 느긋하게 누워서 우아하게 뒹굴뒹굴하는 것은 페르시안 고양이의 특기이지요. 질서 정연하고 일상적인 것을 좋아하며 혼자만의 시간을 즐기는 차분한 페르시안 고양이는 ISFJ에게 잘 맞는 고양이에요.',
    image: `${Persian}`,
  },
  {
    id: 4,
    name: '벵갈',
    best: 'ISFJ',
    mbti: 'ESTP',
    desc: '어른들에게 예쁨받는 스타일이에요. 손재주가 좋아요! 그룹의 리더 역할을 하고 화나는일, 속상한일은 금방 잊어버려요',
    image: `${Bengal}`,
  },
  {
    id: 5,
    name: '터키시 앙고라',
    best: 'ISTJ',
    mbti: 'ENFJ',
    desc: '애교쟁이 고양이에요! 사람들을 이끄는 것을 좋아하고 친구들과도 쉽게 어울립니다. 많은 이들의 신뢰를 받고 센스가 있으며 눈치가 빨라요. 남을 챙겨주길 좋아하는 배려깊은 고양이입니다.',
    image: `${Turkishangora}`,
  },
  {
    id: 6,
    name: '아비시니안',
    best: 'INTJ',
    mbti: 'ESFJ',
    desc: '철저하게 계획하고 진행하는 고양이입니다. 남을 배려하는 마음이 크고 고민상담을 잘해줘요. 새로운 사람을 만나길 좋아하고 스스럼 없이 말도 먼저 거는 타입입니다.',
    image: `${Abyssinian}`,
  },
  {
    id: 7,
    name: '노르웨이숲',
    best: 'ESFJ',
    mbti: 'INTP',
    desc: '노르웨이숲 고양이는 똑똑하면서도 독립적이에요. 또한 빨리 배우고 매우 주의 깊은 측면이 있답니다. 그래서 정기적으로 새로운 것을 배우는 것을 좋아하는 편이에요. 특히 노르웨이숲 고양이는 복잡한 퍼즐 장난감을 갖고 노는 것을 좋아한답니다.',
    image: `${Norwegianforest}`,
  },
  {
    id: 8,
    name: '아메리칸 숏헤어',
    best: 'INTJ',
    mbti: 'ESFP',
    desc: '평화주의자 입니다! 사교성이 뛰어나서 처음본 사람들과도 잘 친해져요. 어색한 침묵을 견디기 힘들어하네요. 근심, 걱정이 있다가도 금세 잊어버리는 성격입니다.',
    image: `${Ameshort}`,
  },
  {
    id: 9,
    name: '코리안 숏헤어',
    best: 'ISTJ',
    mbti: 'ENFP',
    desc: '눈치백단입니다! 외향적이긴 하지만 본인만의 시간이 꼭 필요해요. 리액션이 풍부하며 다른사람들에게 베푸는 것을 좋아합니다. 종종 즉흥적이고 무계획적이에요',
    image: `${Korshort}`,
  },
  {
    id: 10,
    name: '엑죠틱',
    best: 'ENTJ',
    mbti: 'ESTJ',
    desc: '일처리를 잘하며 논리정연하기 이야기를 잘해요. 호불호가 확실하며 근거가 뒷바침된 사실을 원해요. 계획적인 성격이라 계획이 틀어지면 스트레스를 받아요',
    image: `${Exotic}`,
  },
  {
    id: 11,
    name: '스코티시 폴드',
    best: 'ENTJ',
    mbti: 'ISFP',
    desc: '공감능력이 뛰어나요! 감정기복이 심하며 관심받는 것이 싫지만 좋아요. 거절을 잘 못하고 양보를 잘해요. 주변사람들은 당신이 착하다고 생각하지만 본인은 그렇게 생각하지 않아요.',
    image: `${Scottishfold}`,
  },
  {
    id: 12,
    name: '먼치킨',
    best: 'ISFP',
    mbti: 'ENTJ',
    desc: '현실적으로 생각하며 논리적으로 이야기해요. 힘든일이 닥쳤을때 걱정하기 보다는 해결책을 찾아요. 누군가에게 의지하려 하지 않고, 자기애가 강한 타입이네요.',
    image: `${Munchkin}`,
  },
  {
    id: 13,
    name: '렉돌',
    best: 'ESFJ',
    mbti: 'ISTJ',
    desc: '긴 털과 아주 예쁜 외모로 많이 사랑받는 고양이! 계획적이고 논리적이며 본인의 일을 간섭받기 싫어합니다. 한번 시작한 일은 끝내는 성향이고 사람들에게 관심이 많은 편인 아니네요.',
    image: `${Ragdoll}`,
  },
  {
    id: 14,
    name: '브리티쉬 숏헤어',
    best: 'ENTP',
    mbti: 'ISTP',
    desc: '기억력이 좋고 세부 사항을 재빨리 기억하는 브리티쉬 숏헤어는 훈련이 쉽고 빠른 편이며 기억력도 좋은 고양이에요. 자신의 가족들과 친밀한 관계를 맺고 끝까지 충실한 고양이이기도 합니다.',
    image: `${British}`,
  },
  {
    id: 15,
    name: '스핑크스',
    best: 'ISTP',
    mbti: 'ENTP',
    desc: '사랑스럽고 사교적인 성격 때문에 모든 고양이 종 중 가장 애정 넘치는 고양이로 뽑힌 적도 있습니다. 스핑크스는 활기차고, 탐험과 장난감을 가지고 노는 것을 좋아해요.',
    image: `${Sphinx}`,
  },
  {
    id: 16,
    name: '메인쿤',
    best: 'ENFJ',
    mbti: 'INTJ',
    desc: '거인 신사라는 별명을 가진 고양이에요! 조용하고 온화한 성격을 가지고 있으며 계획적으로 사는 것을 좋아합니다. 단체활동을 좋아하진 않지만, 리더의 역할을 주로 해요. 고민상담을 들어주는 척 하지만 사실은 공감하지 못해요.',
    image: `${Mainecoon}`,
  },
];

