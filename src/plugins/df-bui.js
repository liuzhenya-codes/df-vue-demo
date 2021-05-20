import {PageDynamic} from '@df_scope/df-bui'

const components = [
  PageDynamic
]

const DfBUI = {
  install (Vue) {
    Object.values(components).forEach(component => Vue.use(component))
  }
}

export default DfBUI
