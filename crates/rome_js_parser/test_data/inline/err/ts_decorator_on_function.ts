function method(@dec x, second, @dec third = 'default') {}
function method(@dec.fn() x, second, @dec.fn() third = 'default') {}
function method(@dec() x, second, @dec() third = 'default') {}
const method = (@dec x, second, @dec third = 'default') => {};
const method = (@dec.fn() x, second, @dec.fn() third = 'default') => {};
const method = (@dec() x, second, @dec() third = 'default') => {};
