declare global {
  interface Window {
    FB: any;
  }
}

export default function facebookShare() {
  window.FB.init({
    appId: process.env.REACT_APP_FACEBOOKE_APP_ID,
    status: true,
    cookie: true,
    xfbml: true,
    version: 'v8.0',
  });

  window.FB.ui({
    method: 'share',
    href: 'https://developers.facebook.com/docs/',
  });
}
