var names = [];
var emails = []

function addEmailToSlack (emailsArr, namesArr){
  var result = [];
  for (var i = 0; i < emailsArr.length; i++){
      result.push(`${namesArr[i]} <${emailsArr[i]}>`)
  }
  // var result = emailsArr.map((email) => {

  //   return namesArr.forEach((name) => {
  //     `${name} <${email}>`
  //   })
    
  // });
  return result.join(', ')
};

// console.log(addEmailToSlack(emails, names))
