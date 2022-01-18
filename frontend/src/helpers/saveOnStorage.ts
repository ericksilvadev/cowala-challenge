interface IData {
  name: string;
  profession: string;
  phone: string;
  ip: string | any;
}

export const saveData = (data: IData) => {
  localStorage.setItem('data', JSON.stringify(data));
};
