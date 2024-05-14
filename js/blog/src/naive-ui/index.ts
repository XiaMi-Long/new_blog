import type { App } from 'vue'
import * as NaiveUI from 'naive-ui'

const naive = NaiveUI.create({
  components: [
    NaiveUI.NInput,
    NaiveUI.NIcon,
    NaiveUI.NAvatar,
    NaiveUI.NButton,
    NaiveUI.NSpace,
    NaiveUI.NMenu,
    NaiveUI.NLayout,
    NaiveUI.NLayoutSider,
    NaiveUI.NLayoutHeader,
    NaiveUI.NLayoutFooter,
    NaiveUI.NLayoutContent,
    NaiveUI.NGrid,
    NaiveUI.NGi,
    NaiveUI.NEllipsis,
    NaiveUI.NModal,
    NaiveUI.NCard,
    NaiveUI.NTabs,
    NaiveUI.NTabPane,
    NaiveUI.NForm,
    NaiveUI.NFormItem
  ]
})

export function setupNaive(app: App<Element>) {
  app.use(naive)
}
