<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'

const needRefresh = ref(false)

let updateServiceWorker: (() => Promise<void>) | undefined

function onNeedRefresh() {
  needRefresh.value = true
}
async function close() {
  needRefresh.value = false
}

onBeforeMount(async () => {
  const { registerSW } = await import('virtual:pwa-register')
  updateServiceWorker = registerSW({
    immediate: true,
    onNeedRefresh,
  })
})
</script>

<template>
  <template v-if="needRefresh">
    <div class="pwa-toast" role="alertdialog" aria-labelledby="pwa-message">
      <div id="pwa-message">
        新内容可用，请单击重新加载按钮进行更新。
      </div>
      <div class="pwa-buttons">
        <button type="button" class="pwa-button pwa-refresh" @click="updateServiceWorker?.()">
          重新加载
        </button>
        <button type="button" class="pwa-button pwa-cancel" @click="close">
          取消
        </button>
      </div>
    </div>
  </template>
</template>

<style lang="scss" scoped>
.pwa-toast {
  position: fixed;
  z-index: 100;
  right: 0;
  bottom: 0;
  margin: 10px;
  padding: 4px 6px;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0px 12px rgba(0, 0, 0, .12);
  overflow: hidden;
}

#pwa-message {
  margin-bottom: 6px;
  color: #333;
}

.pwa-buttons {
  display: flex;
  gap: 10px;

  .pwa-button {
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
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    user-select: none;
    touch-action: manipulation;
  }

  .pwa-refresh {
    color: #fff;
    background-color: var(--vp-c-green-1);
    border-color: var(--vp-c-green-1);
    box-sizing: 0 2px 0 rgba(5, 145, 255, 0.1);
  }

  .pwa-refresh:hover {
    background-color: var(--vp-c-green-2);
    border-color: var(--vp-c-green-2);
  }

  .pwa-cancel {
    color: rgba(0, 0, 0, 0.88);
    background-color: #fff;
    border-color: #d9d9d9;
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.02);
  }

  .pwa-cancel:hover {
    color: var(--vp-c-green-2);
    border-color: var(--vp-c-green-2);
  }
}
</style>
