<template>
  <div id="app">
    <!-- <Modal :visible="showModal" @close="showModal = false">aa</Modal> -->

    <Dropdown :icon="['fal', 'ellipsis-h']" :trigger="['click']" style="display: inline-block; padding: 0px; transform: translateY(2px)">
      <DropdownItem @click="onItemDelete(1)" text="delete"/>
    </Dropdown>

    <Button type="primary" @click="showModal = true">show</Button>
    <Row :gutter="[8, 12]">
      <Col :flex="1">
        <Card />
      </Col>
      <Col :flex="3">
        <Card />
      </Col>
    </Row>

    <EditableModal
      :title="note.title"
      :content="note.content"
      :visible.sync="showModal"
      @change="onNoteChange"
      @close="showModal = false">
      <div slot="footer">
        <Button type="primary" :disabled="!note.title || note.title == ''">Save</Button>
      </div>
    </EditableModal>

    <Row>
      <Col :flex="6">
        <Tree
          :data="treeData"
          :draggable="true"
          :properties="{
            id: '_id'
          }"
          @drop="onDrop"
          v-on="{
            expand: onItemClick
          }"
        >
          <!-- <template slot-scope="{item}">
            <Button
              circle
              size="small"
              :icon="['fal', 'plus']"
              @click="onItemOp(item)" />
          </template> -->
          <template slot-scope="{item}">
            <Dropdown :icon="['fal', 'ellipsis-h']" :trigger="['click']" style="display: inline-block; padding: 0px; transform: translateY(2px)">
              <DropdownItem @click="onItemDelete(item)" text="delete"/>
            </Dropdown>
            <Button
              :icon="['fal', 'plus']"
              size="small"
              circle
              type="link"
              style="margin-right: 0px"
              @click="onItemOp(item)"
            />
          </template>
        </Tree>
      </Col>
      <Col :flex="4">
        <textarea class="editor" contenteditable v-model="content"></textarea>
      </Col>
      <Col :flex="4">
        <div class="preview" v-html="marked(content)"></div>
      </Col>
    </Row>

    <Spin :loading="true">
      <Card title="hi">
        测试
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sunt vero, quas quo, et perferendis exercitationem cumque quae explicabo deserunt beatae? Itaque repellendus quisquam excepturi praesentium tempore explicabo molestiae nobis.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sunt vero, quas quo, et perferendis exercitationem cumque quae explicabo deserunt beatae? Itaque repellendus quisquam excepturi praesentium tempore explicabo molestiae nobis.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sunt vero, quas quo, et perferendis exercitationem cumque quae explicabo deserunt beatae? Itaque repellendus quisquam excepturi praesentium tempore explicabo molestiae nobis.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sunt vero, quas quo, et perferendis exercitationem cumque quae explicabo deserunt beatae? Itaque repellendus quisquam excepturi praesentium tempore explicabo molestiae nobis.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sunt vero, quas quo, et perferendis exercitationem cumque quae explicabo deserunt beatae? Itaque repellendus quisquam excepturi praesentium tempore explicabo molestiae nobis.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sunt vero, quas quo, et perferendis exercitationem cumque quae explicabo deserunt beatae? Itaque repellendus quisquam excepturi praesentium tempore explicabo molestiae nobis.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sunt vero, quas quo, et perferendis exercitationem cumque quae explicabo deserunt beatae? Itaque repellendus quisquam excepturi praesentium tempore explicabo molestiae nobis.
      </Card>
    </Spin>

    <Button type="link" href="">
      baidu
    </Button>

    <Card title="下拉菜单">
      <div style="display: flex; flex-direction: row">
        <Dropdown :trigger="['click']" :icon="['fal', 'map-marker-alt']" text="Unites State, NY">
          <DropdownItem @click="onDropdownItemClick({hello: 'world'})" text="Shanghai, CN"></DropdownItem>
          <DropdownItem text="Tokyo, JP"></DropdownItem>
          <DropdownItem text="orem orem orem orem orem orem orem orem orem orem orem "></DropdownItem>
        </Dropdown>
        <Dropdown :trigger="['click']" text="Job Type">
          <DropdownItem text="Full Time">
            <DropdownItem text="lorem orem orem orem orem orem orem "></DropdownItem>
            <DropdownItem text="9:00~10:00"></DropdownItem>
            <DropdownItem text="14:00~15:00"></DropdownItem>
          </DropdownItem>
          <DropdownItem text="Part Time">
            <DropdownItem text="18:00~17:00"></DropdownItem>
            <DropdownItem text="19:00~20:00">
              <DropdownItem text="Go"></DropdownItem>
            </DropdownItem>
          </DropdownItem>
        </Dropdown>
      </div>
    </Card>

    <Spin :loading="true">
      <Input />
      <Input size="large" />
      <Button>按钮</Button>
      <Button type="primary">按钮</Button>
      <Button type="primary" :icon="['fal', 'plus']">新建</Button>
      <Button type="primary" :icon="['fal', 'plus']" size="large">大号</Button>
      <MantText type="primary">文本</MantText>
    </Spin>
    <Card>
      <template slot="header">
        <div class="title">aa</div>
      </template>
      <template slot="header:right">
        <Button :icon="['fal', 'bookmark']" circle></Button>
      </template>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum molestias enim consequuntur, a eveniet totam repellendus dolorum eum repudiandae velit minus quidem fugiat corrupti tenetur praesentium facilis laudantium, ut laboriosam!
      <div slot="footer">
        <Button type="link" active :icon="['fal', 'arrow-right']" icon-position="right">
          查看
        </Button>
      </div>
    </Card>
    <Checkbox>前端</Checkbox>
    <Checkbox>后端</Checkbox>
    <Checkbox>算法</Checkbox>
    <Checkbox>设计</Checkbox>
  </div>
</template>

<script>
import Button from '../components/Button'
import Card from '../components/Card'
import Checkbox from '../components/Checkbox'
import MantText from '../components/Text'
import Input from '../components/Input'
import Dropdown from '../components/Dropdown'
import DropdownItem from '../components/Dropdown/Item'
import Spin from '../components/Spin'
import Tree from '../components/Tree'
// import TreeButton from '../components/Tree/TreeButton'
// import Row from '../components/Grid/row'
// import Col from '../components/Grid/col'
// import {MantRow, MantCol} from '../components/Grid'
import Row from '../components/Grid/Row'
import Col from '../components/Grid/Col'
// console.log('Grid', Grid)
// import Modal from '../components/Modal'
import EditableModal from '../components/EditableModal'
import marked from 'marked'
import { deepFind, deepSplice } from './utils'
import { treeEventBus } from '../components/Tree'

export default {
  name: 'App',
  data() {
    return {
      content: "# Hello, world!",
      showModal: false,
      note: {},
      treeData: [
        {
          "_id": "18ed09686172e8d00159b4404d5a0833",
          "title": "第一条笔记",
          "content": "你好，世界",
          "create_time": "2021-10-22 16:37:36",
          "update_time": "2021-10-22 16:37:36"
        }
      ]
      // treeData: [{
      //   "_id": "859059a5616e09b400ae84dd1f3a4cd3",
      //   "title": "前端笔记",
      //   "parent_id": null,
      //   "children": [
      //     {
      //       "_id": "fa24ce1a616e0a4700c3c1783bec9413",
      //       "parent_id": "859059a5616e09b400ae84dd1f3a4cd3",
      //       "title": "JS原型链基础",
      //       "children": [
      //         {
      //           "_id": "1",
      //           "title": "测试",
      //           "children": [
      //             {
      //               "_id": "2",
      //               "title": "再测试"
      //             }
      //           ]
      //         }
      //       ]
      //     },
      //     {
      //       "_id": "a",
      //       "title": "腾讯云Serverless云数据库的使用"
      //     }
      //   ]
      // }, {
      //   "_id": "9e7190f1616e09d600ad803a3ee5b634",
      //   "title": "人工智能",
      //   "parent_id": null,
      //   "children": [
      //     {
      //       "_id": "859059a5616e0a7a00ae9f907d004593",
      //       "parent_id": "9e7190f1616e09d600ad803a3ee5b634",
      //       "title": "傅立叶学习"
      //     }
      //   ]
      // }, {
      //   "_id": "fa24ce1a616e09e600c3b38d4ad835d7",
      //   "title": "个人项目",
      //   "parent_id": null
      // }]
    }
  },
  mounted() {
    treeEventBus.$on('tree-item-click', item => {
        console.log('菜单操作', item)
        if(item) {
          this.note = item
        }
        this.showModal = true
    })
  },
  methods: {
    marked,
    onDropdownItemClick(item) {
      alert("你点击了菜单" + JSON.stringify(item))
    },
    onNoteChange(note) {
      this.note = note
      console.log('this.note', note)
    },
    onItemOp(item) {
      // console.log('onItemOp', e.title)
      this.showModal = true
      this.note = item
    },
    onDrop(oldId, newId) {
      const oldIndexList = oldId.split('-')
      const newIndexList = newId.split('-')
      const oldObj = deepFind(this.treeData, oldIndexList)
      // 删除旧项
      deepSplice(this.treeData, oldIndexList, 1)
      // 添加新项
      deepSplice(this.treeData, newIndexList, 0, oldObj)
    },
    openModal() {
      this.showModal = true
    },
    // onItemOp(item) {
    //   console.log("onAdd", item.title)
    //   this.showModal = true
    // },
    makeTree(data) {
      return data
    },
    onItemClick(item) {
      if(item.children) {
        console.log("展开目录", item.title)
      } else {
        console.log("打开文档", item.title)
      }
    },
    onItemDelete(item) {
      console.log('delete ', item)
    },
    onContentChange(e) {
      this.content = e.target.innerText
    }
  },
  components: {
    Button,
    Card,
    Checkbox,
    MantText,
    Dropdown,
    DropdownItem,
    Input,
    Spin,
    Tree,
    Row,
    Col,
    // Modal
    EditableModal,
  }
}
</script>

<style lang="scss">
@import url('./app.scss');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}
html {
  background-color: $bg-color;
}
::selection {
  background-color: darken($color: $text-color, $amount: 30);
}
.editor, .preview {
  text-align: left;
  padding: 12px;
  color: $text-color;
  height: 100%;
}
.editor {
  resize: none;
  box-sizing: border-box;
  background-color: $block-bg-color-secondary;
  outline: none;
  font-size: $font-size-base;
  outline: none;
  font-family: 'Yahei';
  border: none;
  width: 100%;
}
.preview {
  background-color: $block-bg-color;
}
</style>
