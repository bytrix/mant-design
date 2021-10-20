import { expect } from 'chai'
import { deepFind, deepSplice } from '../../src/utils'

const data = [{
    "_id": "859059a5616e09b400ae84dd1f3a4cd3",
    "title": "前端笔记",
    "parent_id": null,
    "children": [
      {
        "_id": "fa24ce1a616e0a4700c3c1783bec9413",
        "parent_id": "859059a5616e09b400ae84dd1f3a4cd3",
        "title": "JS原型链基础",
        "children": [
          {
            "_id": "1",
            "title": "测试",
            "children": [
              {
                "_id": "2",
                "title": "再测试"
              }
            ]
          }
        ]
      },
      {
        "id": "a",
        "title": "腾讯云Serverless云数据库的使用"
      }
    ]
  }, {
    "_id": "9e7190f1616e09d600ad803a3ee5b634",
    "title": "人工智能",
    "parent_id": null,
    "children": [
      {
        "_id": "859059a5616e0a7a00ae9f907d004593",
        "parent_id": "9e7190f1616e09d600ad803a3ee5b634",
        "title": "傅立叶学习"
      }
    ]
  }, {
    "_id": "fa24ce1a616e09e600c3b38d4ad835d7",
    "title": "个人项目",
    "parent_id": null
  }]

describe('deepFind', () => {
    it('should deeply find the object in the tree', () => {
        const findObj = deepFind(data, [1,0])
        expect(findObj.title).to.be.equal('傅立叶学习')
    })
    it('should deeply find the object in the tree - type String', () => {
        const findObj = deepFind(data, ['1','0'])
        expect(findObj.title).to.be.equal('傅立叶学习')
    })
})

describe('deepSplice', () => {
    // it('delete the object from the tree', () => {
    //     expect(deepFind(data, [0,0,0]).children.length).to.be.equal(1)
    //     deepSplice(data, [0,0,0,0], 1)
    //     expect(deepFind(data, [0,0,0]).children.length).to.be.equal(0)
    // })
    it('delete the object from the tree - type String', () => {
        expect(deepFind(data, ['0','0','0']).children.length).to.be.equal(1)
        deepSplice(data, ['0','0','0','0'], 1)
        expect(deepFind(data, ['0','0','0']).children.length).to.be.equal(0)
    })
    it('delete the object from the tree root', () => {
        expect(deepFind(data, []).children.length).to.be.equal(3)
        deepSplice(data, [2], 1)
        expect(deepFind(data, []).children.length).to.be.equal(2)
    })
    it('add new object to the tree', () => {
        expect(deepFind(data, [0,0,0]).children.length).to.be.equal(0)
        deepSplice(data, [0,0,0,0], 0, {
            _id: 'q',
            title: '测试数据是否有添加进来'
        })
        expect(deepFind(data, [0,0,0,0]).title).to.be.equal('测试数据是否有添加进来')
    })
})