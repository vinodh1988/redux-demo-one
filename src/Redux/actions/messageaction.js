export const messageAction= () => {
    let a= [" Javascript is great", "React is Easy",
'Typescript is super easy', "Angular is good Framework",'Node JS Rocks']
  
  return {
      type: 'MESSAGE_ACTION',
      data :  a[Math.round(Math.random()*4)]
  }
}
/*
  
  action is a javascript which return an object typically
  with two properties
  1. action type
  2. data
*/