const molduras = (largura, altura) => {
  let linha = '';
  for (let i = 1; i <= altura; i++) {
    if (i === 1 || i === altura) {
      for (let j = 1; j <= largura; j++) {
        if (j === 1 || j === largura) {
          linha += '+';
        } else {
          linha += '-';
        }
      }

      console.log(linha);
    } else {
      for (let j = 1; j <= largura; j++) {
        if (j === 1 || j === largura) {
          linha += '-';
        } else {
          linha += ' ';
        }
      }
      console.log(linha);
    }

    linha = '';
  }

  return '';
};
