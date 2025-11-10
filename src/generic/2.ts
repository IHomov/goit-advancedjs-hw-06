/*
  У вас є тип AllType. Існує функція compare, яка приймає два об'єкти. Ці об'єкти містять поля AllType. 
  Ваше завдання – використовувати Pick та generics для вказівки, що поля цих об'єктів належать AllType.
  Функція compare повинна повертати AllType.
*/

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number
}

type TopKeys = 'name' | 'color';
type BottomKeys = 'position' | 'weight';
type TopType = Pick<AllType, TopKeys>;
type BottomType = Pick<AllType, BottomKeys>;
let top: TopType = { name: 'Apollo', color: 'Blue' };
let bottom: BottomType = { position: 1, weight: 100 }

function compare (top:TopType, bottom:BottomType): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  }
}

export {};