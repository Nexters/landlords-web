import {
  persona_homebody,
  persona_im_first,
  persona_insider,
  persona_playplay_dodo,
  persona_pro_living_alone,
  persona_smart,
} from '../../assets';


const PersonaMapper = (persona: string) => {
  if(persona === '꼼꼼한 집순이/집돌이') return persona_homebody;
  else if(persona === '똑부러지는 프로자취러') return persona_pro_living_alone;
  else if(persona === '내 맘대로 스마트하게') return persona_smart;
  else if(persona === '놀 땐 놀고, 할 땐 한다!') return persona_playplay_dodo;
  else if(persona === '내가 1순위') return persona_im_first;
  else if(persona === '집에선 잠만! 핵인싸') return persona_insider;
};

export default PersonaMapper;
