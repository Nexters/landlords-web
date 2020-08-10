export default function webShare() {
  const navi: any = window.navigator;
  if (navi.share) {
    navi
      .share({
        title: 'WebShare',
        url: 'http://google.com',
      })
      .then(() => {
        console.log('url share!');
      })
      .catch(console.error);
  }
}
