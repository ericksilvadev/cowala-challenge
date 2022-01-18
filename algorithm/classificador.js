const classificador = (payload) => {
  const grupo = {
    voce: '',
    responsaveis: [],
    membros: [],
  };

  payload.forEach(({ souEu, responsavel, nome }) => {
    if (souEu) grupo.voce = nome;
    else if (responsavel) grupo.responsaveis.push(nome);
    else grupo.membros.push(nome);
  });

  grupo.responsaveis.sort();
  grupo.membros.sort();

  return grupo;
};
