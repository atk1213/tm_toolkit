var names = ['Alexander Benko', 'Andrew More', 'Anna Dinh', 'Christopher Sanchez', 'Frankie Barreto', 'Frankie Liu', 'Jeremy Ho', 'John Kim', 'Jordan Chun', 'Joshua Clute', 'Kyle Shelton', 'Marlena Ajoste', 'Michael Siu', 'Mrinal Vig', 'Omar El Tarzi', 'Rongyi Du', 'Rylan Albach', 'Stephanie Shively', 'Tayo Omololu', 'Vai San (Danny)', 'Wilson Papilla'];
var emails = ['alexbenko@live.com', 'recondomore@gmail.com', 'annathuydinh@gmail.com', 'chrissanchez89@gmail.com', 'barretoacquire@gmail.com', 'zhuangfrankie@gmail.com', 'eneka.ken@gmail.com', 'jkim005@yahoo.com', 'jchun765@gmail.com', 'clutejoshua@gmail.com', 'kylejamesshelton@gmail.com', 'mpajoste@gmail.com', 'michaeltsiu13@gmail.com', 'mrinalvig@hotmail.com', 'omartarzi@gmail.com', 'rongyi.du@gmail.com', 'rylanalbach@gmail.com', 'smshively16@gmail.com', 'gokeomololu@gmail.com', 'vai.quoc.san@gmail.com', 'wilson.pap@gmail.com']

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
