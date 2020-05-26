
async function start() {
  return await Promise.resolve('async is working')
}

start().then(console.log)
const unused = 42;
class Util {
    static id = Date.now()
}

console.log('Util', Util.id)
console.log('unused', unused)

