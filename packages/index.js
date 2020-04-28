// 整个包的入口
import Button from './LeeButton'
import Dialog from './LeeDialog'
import Input from './LeeInput'
import Checkbox from './LeeCheckbox'
import Radio from './LeeRadio'
import RadioGroup from './LeeRadioGroup'
import Switch from './LeeSwitch'
import CheckboxGroup from './LeeCheckboxGroup'
import Form from './LeeForm'
import FormItem from './LeeFormItem'
import './font/iconfont.css'

const components = [
    Button,
    Dialog,
    Input,
    Checkbox,
    Radio,
    RadioGroup,
    Switch,
    CheckboxGroup,
    Form,
    FormItem
]
function install(Vue) {
    components.forEach(component => {
        Vue.component(component.name, component)
    })

}
// 判断是否直接引入文件，如果是，就不用调用Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    install
}