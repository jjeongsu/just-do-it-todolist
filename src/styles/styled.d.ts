import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    bgColor: string
    textColor: string
    accentColor: string
    subAccentColor: string
    lightgray: string
    darkgray: string
  }
}
