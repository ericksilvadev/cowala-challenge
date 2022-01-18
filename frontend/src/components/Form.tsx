import React, { useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
import { getIp } from '../helpers/getIp';
import { saveData } from '../helpers/saveOnStorage';

const initialValues = {
  name: '',
  profession: '',
  phone: '',
  ip: '',
};

interface IForm {
  name: string;
  profession: string;
  phone: string;
  ip: string | any;
}

const Form = () => {
  const [form, setForm] = useState<IForm>(initialValues);

  useEffect(() => {
    const data = localStorage.getItem('data');
    if (data) {
      setForm(JSON.parse(data));
    }
  }, []);

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;

    if (name === 'phone') {
    }

    setForm({ ...form, [name]: value });
  };

  const setIp = async () => {
    const ip = await getIp();

    setForm({ ...form, ip });
  };

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    saveData(form);
  };

  const handleClear = () => {
    setForm(initialValues);
    localStorage.removeItem('data');
  };

  return (
    <main className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            onChange={handleChange}
            id="name"
            autoComplete="no"
            name="name"
            value={form.name}
          />
        </div>
        <div className="profession-phone">
          <div className="input-container">
            <label htmlFor="profession">Profissão</label>
            <input
              type="text"
              onChange={handleChange}
              id="profession"
              autoComplete="no"
              name="profession"
              value={form.profession}
            />
          </div>
          <div className="input-container">
            <label htmlFor="phone">Celular</label>
            <InputMask
              mask="(99) 99999-9999"
              type="text"
              onChange={handleChange}
              id="phone"
              autoComplete="no"
              name="phone"
              value={form.phone}
            />
          </div>
        </div>
        <div className="ip-field">
          <div className="input-container">
            <label htmlFor="ip">Meu IP</label>
            <input type="text" id="ip" disabled name="ip" value={form.ip} />
          </div>
          <button type="button" onClick={setIp}>
            Encontrar IP
          </button>
        </div>
        <div className="form-buttons">
          <button type="submit">Salvar</button>
          <button onClick={handleClear}>Limpar</button>
        </div>
      </form>
    </main>
  );
};

export default Form;
