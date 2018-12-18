import * as p from '../src/index'

describe('index', () => {
  it('export number of functions correctly', () => {
    expect(p).toHaveProperty('readFileAsync')
    expect(p).toHaveProperty('readFileAsync')
    expect(p).toHaveProperty('writeFileAsync')
    expect(p).toHaveProperty('statAsync')
    expect(p).toHaveProperty('mkdirAsync')
    expect(p).toHaveProperty('rmdirAsync')
    expect(p).toHaveProperty('unlinkAsync')
    expect(p).toHaveProperty('renameAsync')
    expect(p).toHaveProperty('existsAsync')
    expect(p).toHaveProperty('readdirAsync')
  })
})
