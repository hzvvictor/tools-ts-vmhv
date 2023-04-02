import { existsSync } from 'fs'
const exist = (path: string) => (existsSync(path))
export default exist;