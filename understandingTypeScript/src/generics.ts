function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergeObj = merge<{ name: string }, { age: number }>(
  { name: "Max" },
  { age: 30 }
);
console.log(mergeObj.age);

//////////
// interface Lengthy {
//     length: number;
//   }

//   function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
//     let descriptionText = 'Got no value.';
//     if (element.length === 1) {
//       descriptionText = 'Got 1 element.';
//     } else if (element.length > 1) {
//       descriptionText = 'Got ' + element.length + ' elements.';
//     }
//     return [element, descriptionText];
//   }
//   console.log(countAndDescribe(['Sports', 'Cooking']));

interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T) {
  //if(element.length === 0 ) No value
  let descriptionText = "Got no value.";

  if (element.length === 1) {
    //value
    descriptionText = "Got 1 element.";
  } else if (element.length > 1) {
    //values
    descriptionText = 'Got ' + element.length + ' elements.';
  }

  return [element, descriptionText];
}




function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U){
    return 'value' + obj[key];
}

extractAndConvert({name: 'Max'},'name');
////////////////////////////////////


class DataStorage<T extends string |boolean|number > {
    private data: T[] = [];

    addItem(item: T){
        this.data.push(item);
    }
    
    removeItem(item: T){
        this.data.splice(this.data.indexOf(item),1);
    }

    getItems(){
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Max');
textStorage.addItem('Manu');
textStorage.removeItem('Max');
console.log(textStorage.getItems())

//////////////////////////
interface CourseGoal {
    tittle: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(
    title: string, description: string, date: Date
    ): CourseGoal{
        let courseGoal: Partial<CourseGoal> = {};
        courseGoal.tittle = title;
        courseGoal.description = description;
        courseGoal.completeUntil = date;
        return courseGoal as CourseGoal;

}

const names: Readonly<string[]> = ['Mac','Ana'];
// names.push('Manu')
// names.pop()


