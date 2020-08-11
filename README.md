# cq-ui

## Project setup
```
npm install
```
## 全局导入
import CqUI from "Cq-ui-chenqiao";

import "Cq-ui-chenqiao/dist/cq-ui.css";

Vue.use(CqUI);
## 使用组件
<template>
  <div id="app">
  <cq-button @click="visible = true">显示模态框</cq-button>
    <cq-dialog width="20%" top="200px" :visible.sync="visible">
      <template>中间内容是什么====</template>
      <template v-slot:footer>
        <cq-button @click="visible = false">取消</cq-button>
        <cq-button type="primary" @click="visible = false">确认</cq-button>
      </template>
    </cq-dialog>
  </div>
</template>


