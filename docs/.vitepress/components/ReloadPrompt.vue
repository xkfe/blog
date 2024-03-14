<script setup lang="ts">
import 'element-plus/theme-chalk/src/notification.scss'
import { ElNotification } from 'element-plus'
import { useRegisterSW } from 'virtual:pwa-register/vue'
import { useEventListener, useIntervalFn, useOnline,watchOnce } from '@vueuse/core'
import { onMounted, watchEffect } from 'vue';

defineOptions({
  name: 'ReloadPrompt',
})

const intervalMS = 30 * 1000 * 10 // 300s 5min
const IS_PROD = process.env.NODE_ENV === 'production'

const online = useOnline()
const {
  offlineReady,
  needRefresh,
  updateServiceWorker,
} = useRegisterSW({
  immediate: true,
  onRegisteredSW(_swScriptUrl, registration) {
    console.log('_swScriptUrl :>> ', _swScriptUrl);
    console.log('object :>> ', registration);
    IS_PROD && registration && useIntervalFn(async () => {
      try {
        // 检查更新，如果vite.config.ts配置为autoUpdate，此操作将直接触发更新，并刷新页面激活更新
        const response = await fetch('/sw.js', { cache: 'no-store' });
        response && response.status === 200 && await registration?.update();
      } catch (e) {
        console.log('cannot ping/update sw.js', e)
      }
    }, intervalMS)
  },
})

async function close() {
  offlineReady.value = false
  needRefresh.value = false
}

watchOnce(
  () => online.value,
  () => {
  if (!online.value) {
    ElNotification({
      title: '应用离线',
      message: '当前应用处于离线状态，您可以继续操作，但是无法获取最新数据',
      type: 'warning',
    })
    return
  }
})

watchEffect(() => {
  if (needRefresh.value) {
    const notify = ElNotification({
      title: '发现新版本，请点击按钮更新',
      position: 'bottom-right',
      duration: 0,
      offset: 60,
      showClose: false,
      dangerouslyUseHTMLString: true,
      customClass: 'prompt-toast',
      message: `
      <div class="mt-10 flex">
        <button class="reload-btn reload-btn--primary reload-confirm">
          <i class="el-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-v-ea893728=""><path fill="currentColor" d="M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z" /></svg>
          </i>
          <span class="el-button__text--expand ml-4">更新</span>
        </button>
        <button class="reload-btn reload-btn--default reload-cancel ml-10">
          <i class="el-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-v-ea893728=""><path fill="currentColor" d="m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248z"></path><path fill="currentColor" d="M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"></path></svg>
          </i>
          <span class="el-button__text--expand ml-4">取消</span>
        </button>
      </div>
    `,
      zIndex: 999,
    })

    const confirm = document.querySelector('.reload-confirm')
    const cancel = document.querySelector('.reload-cancel')
    confirm && useEventListener(confirm, 'click', () => {
      updateServiceWorker()
      notify.close()
    })
    cancel && useEventListener(cancel, 'click', () => {
      close()
      notify.close()
    })
  }
})

onMounted(() => {
  console.log('ReloadPrompt mounted')
})
</script>

<template>
  <div/>
</template>

<style lang="scss">
$primary-color: #3dd68c;
$active-color: #30a46c;

.prompt-toast.right {
  width: auto;
  padding-right: 20px;
}
.flex {
  display: flex;
}
.mt-10 {
  margin-top: 10px;
}
.ml-10 {
  margin-left: 10px;
}
.ml-4 {
  margin-left: 4px;
}
.reload-btn {
  display: flex;
  align-items: center;
  line-height: 1.5;
  padding: 5px 15px;
  font-size: 16px;
  outline: none;
  position: relative;
  white-space: nowrap;
  text-align: center;
  background: transparent;
  border: 1px solid transparent;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  user-select: none;
  touch-action: manipulation;
}
.reload-btn--primary {
  color: #fff;
  background-color: $primary-color;
  border-color: $primary-color;
  box-sizing: 0 2px 0 rgba(5, 145, 255, 0.1);
}
.reload-btn--primary:hover {
  background-color: $active-color;
  border-color: $active-color;
}
.reload-btn--default {
  color: rgba(0, 0, 0, 0.88);
  background-color: #fff;
  border-color: #d9d9d9;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.02);
}
.reload-btn--default:hover {
  color: $active-color;
  border-color: $active-color;
}
</style>
