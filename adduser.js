const users = [
	{
		name:'Brook', 
		scores:75,
		skills:['HTM', 'CSS', 'JS'],
		age:16
	},
	{
		name:'Alex', 
		scores:80,
		skills:['HTM', 'CSS', 'JS'],
		age:18
	}, 
	{
		name:'David', 
		scores:75,
		skills:['HTM', 'CSS'],
		age:22
	}, 
	{
		name:'John', 
		scores:85,
		skills:['HTM'],
		age:25
	},
	{
		name:'Sara',
		scores:95,
		skills:['HTM', 'CSS', 'JS'],
		age: 26
	},
	{
		name:'Martha', 
		scores:80,
		skills:['HTM', 'CSS', 'JS'],
		age:18
	},
	{
		name:'Thomas',
		scores:90,
		skills:['HTM', 'CSS', 'JS'],
		age:20
	}
	];
const newuser = {
    name: "Furqhan",
    scores: 85,
    skills: ["CSS"],
    age: 25,
  };
  
  const addUser = (arr, newObject) => {
    const exit = arr.some((el) => el.name === newObject.name);
    if (!exit) {
      arr.push(newObject);
      return arr;
    } else {
      console.log("user  already exists");
    }
  };
  
   console.log(addUser(users, newuser));