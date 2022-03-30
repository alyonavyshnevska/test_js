export default function hackathon(developers) {

///////////////////// WORKS

  let output = new Array();

//   developers.forEach(
//     developer => {developer.code()
//       .then((val) => output.push(val))
//       .catch((err) => output.push(err))})
//       // .finally(() => {console.log(output.join('\n')); return output.join('\n')})})
//       // .finally(() => {output.join('\n')})})
// //

//   return output.join('\n')

  /////////////////////////////


  // developers.forEach(
  //   developer => {developer.code()
  //     .then((val) => console.log(val))
  //     .catch((err) => console.log(err))})

  // let output = new Array();

  // return Promise.allSettled(
  //     developers.map(
  //     developer => {developer.code()}))

  return new Promise((resolve, reject) =>
  resolve(
    developers.forEach(
      developer => {developer.code()
        .then((val) => console.log(val))
        .catch((err) => console.log(err))})
    )
  )
//////////

      // .then((val) => output.push(val))
      // .catch((err) => output.push(err))})
  // ).then((results) => results.forEach((result) => console.log(result.status)));

  //  let outputString = output.map((line) => line.concat('\n'))

  // return output.join('\n')


  // return new Promise((resolve, reject) => {
  //   let output = new Array;
  //   developers.forEach(developer => output.push(developer.code()));
  //   let outputString = output.join('\n')
  //   resolve(outputString);
  //   })
    // return new Promise((resolve, reject) => {
    //   let output = developers.forEach(developer => developer.code());
    //   resolve(output);
      // Promise.all(output)
      // .then(resolve(values => console.log(values)))
    // })
//     let output = new Array;
//     developers.forEach(developer => developer.code()
//     .then(ok => {
//       output.push(ok)
//     })
//     .catch(err => {
//       output.push(err)
//     }))
// return output.join('\n')

  // let output = new Array;
  // developers.forEach(developer => developer.code()
  // .then(ok => {
  //   output.push(ok)
  // })
  // .catch(err => {
  //   output.push(err)
  // }))
  // return output.join('\n')

  // Promise.all(developers.forEach(developer => developer.code()))
  // .then(res =>
  //   console.log('Array of results', res))
  //   Promise.all(developers[0].code(), developers[1].code())
  // .then(res =>
  //   console.log('Array of results', res))

  // return developers.forEach(developer => developer.code()
  // .then(output => console.log(output.join('\n')) ))

  // return developers.forEach(developer => developer.code())

  // return developers[0].code().then(ok => ok).catch(err => err)

  // return developers.forEach(developer => { return developer.code().then(ok => ok).catch(err => err)})

  // .catch(err => console.log(err))

  // return developers.forEach(developer => developer.code())

  // .then(ok => {
  //   return console.log(ok)
  // })
  // .catch(err => {
  //   console.log(err)
  // })

}

