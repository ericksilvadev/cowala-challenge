import axios from 'axios';

interface IGetIp {
  data: string;
}

export const getIp = async () => {
  const { data: ip } = await axios.get<IGetIp>('https://ip-fast.com/api/ip/');

  return ip;
};
