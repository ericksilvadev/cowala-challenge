const Form = () => {
  return (
    <main className="form-container">
      <form>
        <div className="input-container">
          <label htmlFor="name">Nome</label>
          <input type="text" id="name" autoComplete="no" />
        </div>
        <div className="profession-phone">
          <div className="input-container">
            <label htmlFor="profession">Profissão</label>
            <input type="text" id="profession" autoComplete="no" />
          </div>
          <div className="input-container">
            <label htmlFor="phone">Celular</label>
            <input type="text" id="phone" autoComplete="no" />
          </div>
        </div>
        <div className="ip-field">
          <div className="input-container">
            <label htmlFor="ip">Meu IP</label>
            <input type="text" id="ip" disabled />
          </div>
          <button type="button">Encontrar IP</button>
        </div>
        <div className="form-buttons">
          <button type="submit">Salvar</button>
          <button type="button">Limpar</button>
        </div>
      </form>
    </main>
  );
};

export default Form;
