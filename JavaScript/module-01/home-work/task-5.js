console.log('~5~');

let text = prompt(
  'Пожалуйста, напишите страну, в которую хотите осуществить доставку',
);
let newText = '';
if (text !== null) {
  text = text.toLowerCase();
} else if (text === null) {
  console.log('Вы не ввели название города!');
} else if (text !== Number.isNaN(text)) {
  console.log('Вы ввели цифры!');
}

switch (text) {
  case 'китай': {
    const cost = 100;
    newText += text[0].toUpperCase();
    for (let i = 1; i < text.length; i += 1) {
      newText += text[i];
    }
    console.log(`Доставка в ${newText} будет стоить ${cost} кредитов`);
    alert(`Доставка в ${newText} будет стоить ${cost} кредитов`);
    break;
  }
  case 'чили': {
    const cost = 250;
    newText += text[0].toUpperCase();
    for (let i = 1; i < text.length; i += 1) {
      newText += text[i];
    }
    console.log(`Доставка в ${newText} будет стоить ${cost} кредитов`);
    alert(`Доставка в ${newText} будет стоить ${cost} кредитов`);
    break;
  }
  case 'австралия': {
    const cost = 170;
    newText += text[0].toUpperCase();
    for (let i = 1; i < text.length; i += 1) {
      if (text[i] === 'я' && i === text.length - 1) {
        newText += 'ю';
      } else {
        newText += text[i];
      }
    }
    console.log(`Доставка в ${newText} будет стоить ${cost} кредитов`);
    alert(`Доставка в ${newText} будет стоить ${cost} кредитов`);
    break;
  }
  case 'индия': {
    const cost = 80;
    newText += text[0].toUpperCase();
    for (let i = 1; i < text.length; i += 1) {
      if (text[i] === 'я' && i === text.length - 1) {
        newText += 'ю';
      } else {
        newText += text[i];
      }
    }
    console.log(`Доставка в ${newText} будет стоить ${cost} кредитов`);
    alert(`Доставка в ${newText} будет стоить ${cost} кредитов`);
    break;
  }
  case 'ямайка': {
    const cost = 120;
    newText += text[0].toUpperCase();
    for (let i = 1; i < text.length; i += 1) {
      if (text[i] === 'а' && i === text.length - 1) {
        newText += 'у';
      } else {
        newText += text[i];
      }
    }
    console.log(`Доставка в ${newText} будет стоить ${cost} кредитов`);
    alert(`Доставка в ${newText} будет стоить ${cost} кредитов`);
    break;
  }
  case null:
    alert('Вы не ввели название города!');
    break;
  default:
    alert('В вашей стране доставка не доступна');
    break;
}
