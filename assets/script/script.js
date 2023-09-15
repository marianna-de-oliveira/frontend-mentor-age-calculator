// data atual
const complete = new Date()
const day = complete.getDay()
const month = complete.getMonth()
const year = complete.getFullYear()

let totalDiasPorMes

// data dada pelo usuário
const userDay = 15
const userMonth = 8
const userYear = 1995

// checa se é ano bissexto (ja testado)
function leapYear(userYear) {
  return userYear % 4 === 0
    ? console.log('fevereiro tem 29 dias')
    : console.log('fevereiro tem 28 dias')
}

// checa quantidade de dias por mês (ja testado)
function obterQuantidadeDeDiasNoMes(numeroDoMes) {
  switch (numeroDoMes) {
    case 1: // Janeiro
    case 3: // Março
    case 5: // Maio
    case 7: // Julho
    case 8: // Agosto
    case 10: // Outubro
    case 12: // Dezembro
      return console.log(31)
    case 4: // Abril
    case 6: // Junho
    case 9: // Setembro
    case 11: // Novembro
      return console.log(30)
    case 2: // Fevereiro (tratando ano bissexto)
      return leapYear(userYear) ? 29 : 28
    default:
      return console.log('mes invalido') // Mês inválido
  }
}

function checkValidade() {
    // sera que se eu dividir o total de dias do ano e considerar a quantidade de dias de cada mes, a cada 30/31 dias === 1 mes ??? descobrir como fazer isso 
  //   if (userDay > 31 || userDay < 1) {
  //     console.log('erro')
  //   } else {
  // if (userDay > day) {
  //   console.log(`dia do usuario - dia atual ${userDay - day}`)
  // } else {
  //   console.log(`dia atual - dia do usuario ${day - userDay}`)
  // }
  //   }

  // levar em consideração a quantidade de dias que cada mes tem, se passar de 30/31 === mes + 1
  //   if (userMonth > 12 || userMonth < 1 || day) {
  //     console.log('erro')
  //   } else {
  //     console.log(userMonth - month)
  //   }

  // testado - aceita ano 0
  if (userYear > year || userYear === null) {
    console.log('erro')
  } else {
    console.log(year - userYear)
  }
}

checkValidade()
