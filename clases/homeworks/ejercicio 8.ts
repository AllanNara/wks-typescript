//Intenta tipar una pluck function!
//TIP! Buscar la palabra reservada keyof y usar extends!

// function pluck(arreglo, prop) {
//     return arreglo.map((object) => {
//         return object[prop]
//     }) 
// }

function pluckTs<T, K extends keyof T>(arreglo: T[], prop: K): T[K][] {
    return arreglo.map((object) => {
        return object[prop]
    }) 
}

let array: object[] = [{k1: 1}, {k1: '2'}, {k1: true}]
// let array = [{k1: 1}, {k1: '2'}, {k1: true}]

let prueba: any[] = pluckTs(array, 'k1')




//PRACTICANDO EN LA WEB
// interface Point {
//     name: string;
//     age: number;
//    };
 
 
//  type P = keyof Point;
 
 
//  class Person {
//    protected name: string;
//    protected age: number;
//    constructor(name: string, age: number) {
//      this.name = name;
//      this.age = age;
//    }
//  }
 
//  class PersonOne {
//    constructor(
//        protected name: string,
//        protected age: number
//    ) {}
 
//    get(arg: P): string {
//      if(arg === 'age') return `esta es mi edad: ${this.age}`;
//      else return `este es mi nombre: ${this.name}`
//    }
//  }
 
//  // class PersonTwo {
//  //   constructor(name: string, age: number) {
//  //     this.name = name;
//  //     this.age = age;
//  //   }
//  // }
 
//  let allan = new PersonOne('allan', 23)

//////////////////////////////////////////////////////////////////////////////////////


// interface ofPluck {
//     property: number
//   }
  
//   function pluck<T extends object>(arreglo: Array<T>, prop: T) {
//       // interface I extends ofPluck{}
//       // type K = keyof I;
//       return arreglo.map((object) => {
//           return object[prop]
//       }) 
//   }
  
//   let array: Array<ofPluck> =
//   [
//     {property: 22},
//     {property: 33},
//     {property: 11},
//   ]
  
  
//   let onlyObject = pluck(array, 'property')
  
//   console.log(onlyObject)
  
//   //StackOverFlow
//   function pluck2<KeyType extends string>(p: KeyType) {
//     return function <T extends Record<KeyType, any>>(o: T): T[KeyType] {
//       return o[p];
//     };
//   }
  
//   const getA = pluck2('a');
  