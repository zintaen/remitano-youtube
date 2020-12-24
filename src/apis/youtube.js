import axios from 'axios';

export const API_KEY = 'AIzaSyDEOupneIXsK5GCOnYCMQFe5T206ag2luk';

const baseUrl = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics';

export function getListVideoInfo({ listVideoId }) {
  const queryParams = listVideoId.join('%2C');
  const url = `${baseUrl}&id=${queryParams}&key=${API_KEY}`;
  return axios.get(url);
}
