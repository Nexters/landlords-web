export default function webShare(title: string, url: string) {
  const navi: any = window.navigator;
  if (navi.share) {
    navi
      .share({
        title,
        url,
      })
      .then(() => {
        console.log('url share!');
      })
      .catch(console.error);
  }
}
