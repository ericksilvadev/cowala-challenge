const validade = (data, prazo) => {
  const dataFormatada = new Date(data);
  const prazoNumerico = Number(prazo.split('').slice(0, -1).join(''));
  const umDiaEmMilisegundos = 86400000;
  const dataComValidade = new Date(
    dataFormatada.getTime() + prazoNumerico * umDiaEmMilisegundos
  );
  const hoje = Date.now();

  return dataComValidade > hoje;
};
