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
const addUserSkill = (arr, user, skill) => {
    let changeDone = false;
    arr.map((el) => {
      if (el.name === user) {
        changeDone = true;
        for (let i = 0; i < skill.length; i++) {
          el.skills.push(skill[i]);
        }
      }
    });
    changeDone ? console.log(arr, "result") : console.log("user does not exist");
  };
  
   addUserSkill(users, "Furqhan", ["CSS", "JavaScript"]);
  