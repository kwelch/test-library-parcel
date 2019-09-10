interface Person {
  firstName: string;
  lastName: string;
  title: string;
  interests: string[];
}

const me: Person = {
  firstName: 'Kyle',
  lastName: 'Welch',
  title: "Sr. Software Engineer",
  interests: [
    'hockey',
    'family',
    'community-building',
  ]
}

export const kyle = me;

export const sayHello = () => {
  console.log(`Hello: ${me.firstName}`)
}

export default me;