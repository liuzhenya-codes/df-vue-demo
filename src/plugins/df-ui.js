import {
  Input,
  Checkbox,
  Select,
  Tree,
  TreeSelect,
  Button,
  Option,
  CollapseTransition
} from '@df_scope/df-ui'

const components = [
  Input,
  Checkbox,
  Select,
  Tree,
  TreeSelect,
  Button,
  Option,
  CollapseTransition
]

const DfUI = {
  install (Vue) {
    Object.values(components).forEach(component => Vue.use(component))
  }
}

export default DfUI
