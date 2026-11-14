import type { InjectionKey, Ref } from 'vue'

// Dashboard.vue provides this and TopNavigationBar.vue injects it. A typed key lets both sides share
// one type, so a misspelled key or a changed shape fails the type check instead of failing at runtime.
export type MenuCollapse = {
  isCollapse: Ref<boolean>
  toggleCollapse: () => void
}

export const menuCollapseKey: InjectionKey<MenuCollapse> = Symbol('menuCollapse')
