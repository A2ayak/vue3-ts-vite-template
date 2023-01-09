import { DatePicker, Modal, message } from "ant-design-vue"

import { App } from "vue"

export function setAntdvCompConfig(app: App<Element>) {
  message.config({
    maxCount: 3,
    top: "110px",
  })
  Modal.props.keyboard = false
  Modal.props.maskClosable = false
  app.use(Modal)
}
