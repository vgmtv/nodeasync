import {join} from 'path'
import {walk} from '../walk'

const root = join(__dirname, '../../dir')

describe('walk', () => {
  it('walk through dir recursively', async () => {
    const files = await walk(root)
    expect(files.length).toBeGreaterThan(0)
  })
})
