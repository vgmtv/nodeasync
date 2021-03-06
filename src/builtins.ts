import {promisify} from 'util'
import * as fs from 'graceful-fs'
// Graceful-fs
export const readFileAsync = promisify(fs.readFile)
export const writeFileAsync = promisify(fs.writeFile)
export const statAsync = promisify(fs.stat)
export const mkdirAsync = promisify(fs.mkdir)
export const rmdirAsync = promisify(fs.rmdir)
export const unlinkAsync = promisify(fs.unlink)
export const renameAsync = promisify(fs.rename)
export const existsAsync = promisify(fs.exists)
export const readdirAsync = promisify(fs.readdir)
export const copyFileAsync = promisify(fs.copyFile)

// Native node fs
export const fsReadFileAsync = promisify(fs.readFile)
export const fsWriteFileAsync = promisify(fs.writeFile)
export const fsStatAsync = promisify(fs.stat)
export const fsMkdirAsync = promisify(fs.mkdir)
export const fsRmdirAsync = promisify(fs.rmdir)
export const fsUnlinkAsync = promisify(fs.unlink)
export const fsRenameAsync = promisify(fs.rename)
export const fsExistsAsync = promisify(fs.exists)
export const fsReaddirAsync = promisify(fs.readdir)
export const fsCopyFileAsync = promisify(fs.copyFile)

