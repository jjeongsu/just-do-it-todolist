const colors = {
  black: '#000000',
  orange: '#FF8551',
  yellow: '#F2BE22',
  red: '#F24C3D',
  skyblue: '#9AC5F4',
  neongreen: '#00DFA2',
  neonpurple: '#865DFF',
  ivory: '#F6F1E9',
  lightgrey: '#D8D8D8',
  darkgrey: '#7F8487',
}

export type ColorTypes = typeof colors

export const lightTheme = {
  bgColor: '#fff',
  textColor: '#0066ff',
  accentColor: `${colors.neonpurple}`,
  subAccentColor: `${colors.neongreen}`,
  lightgray: `${colors.lightgrey}`,
  darkgray: `${colors.darkgrey}`,
}

export const darkTheme = {
  bgColor: '#252525',
  textColor: `${colors.ivory}`,
  accentColor: `${colors.neonpurple}`,
  subAccentColor: `${colors.neongreen}`,
}
