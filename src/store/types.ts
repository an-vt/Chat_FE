import NumFactoryStateTypes from './modules/NumFactory/types'
import AuthStateTypes from './modules/auth/types'

export default interface RootStateTypes {
  text: string
}

export interface AllStateTypes extends RootStateTypes {
  numFactoryModule: NumFactoryStateTypes
  authModule: AuthStateTypes
}
