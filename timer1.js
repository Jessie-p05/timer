const args = process.argv.slice(2, process.argv.length);
args.sort(function (a, b) {
  return a - b
});


for (let num of args) {
  if (num > 0 && !isNaN(num)) {
    num = num * 1000;
    setTimeout(() => {
      process.stdout.write('\x07');
    }, num);
  }
}
