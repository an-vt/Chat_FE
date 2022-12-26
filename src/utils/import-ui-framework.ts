import { App } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

export default function importUiFramework(app: App) {
  // Load the Element Plus components as needed
  app.use(ElementPlus)
  return app
}
