import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  'a',
  'b',
  'c',
  'ç',
  'd',
  'e',
  'ê',
  'f',
  'g',
  'h',
  'i',
  'î',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  'ş',
  't',
  'u',
  'û',
  'v',
  'w',
  'x',
  'y',
  'z'
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
