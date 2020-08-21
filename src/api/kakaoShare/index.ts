declare global {
  interface Window {
    Kakao: any;
  }
}

export default function kakaoShare(requestUrl: string) {
  window.Kakao.isInitialized() ? '' : window.Kakao.init(process.env.REACT_APP_KAKAO_APP_KEY);

  window.Kakao.Link.sendScrap({
    requestUrl,
  });
}
