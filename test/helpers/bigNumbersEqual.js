function assertBnEq (a, b, message) {
  assert(a.eq(b), `${message} (${a.valueOf()} != ${b.valueOf()})`)
}

module.exports = {

    assertBnEq

}
