declare global {
  interface Window {
    Kakao: any;
  }
}

export default function kakaoShare() {
  window.Kakao.isInitialized() ? '' : window.Kakao.init('process.env.KAKAO_JAVASCRIPT_APP_KEY');

  window.Kakao.Link.sendScrap({
    requestUrl: 'https://developers.kakao.com',
  });
}
