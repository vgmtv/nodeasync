import {join} from 'path'
import {tmpdir} from 'os'
import {existsAsync} from '../src/builtins'
import {mkdirpAsync} from '../src/advance'

describe('advance', () => {
  it('make directory recursive', async (done) => {
    const dir = join(tmpdir(), '/one/two/three')
    await mkdirpAsync(dir)
    expect(await existsAsync(dir)).toBeTruthy()
    done()
  })
})
