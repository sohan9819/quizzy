// export const shuffleArray = (array: any[]) =>
//   [...array].sort(() => Math.random() - 0.5);

export const categoryName = (value: number | '') => {
  switch (value) {
    case '':
      return 'Any Category';

    case '9':
      return 'General Knwoledge';

    case '10':
      return 'Book';
    case '11':
      return 'Film';
    case '12':
      return 'Music';
    case '17':
      return 'Nature';
    case '18':
      return 'Computers';
    case '19':
      return 'Mathematics';

    default:
      break;
  }
};
