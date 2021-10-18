<template>
  <div id="app">

    <Card title="下拉菜单">
      <div style="display: flex; flex-direction: row">
        <Dropdown icon="map-marker-alt" text="Unites State, NY">
          <DropdownItem text="Shanghai, CN"></DropdownItem>
          <DropdownItem text="Tokyo, JP"></DropdownItem>
        </Dropdown>
        <Dropdown text="Job Type">
          <DropdownItem text="Full Time">
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

    <Input />
    <Input size="large" />

    <Button>按钮</Button>
    <Button type="primary">按钮</Button>
    <Button type="primary" icon="plus">新建</Button>
    <Button type="primary" icon="plus" size="large">大号</Button>
    <MantText type="primary">文本</MantText>
    <Card>
      <template slot="header">
        <div class="title">aa</div>
      </template>
      <template slot="header:right">
        <Button icon="bookmark" circle></Button>
      </template>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum molestias enim consequuntur, a eveniet totam repellendus dolorum eum repudiandae velit minus quidem fugiat corrupti tenetur praesentium facilis laudantium, ut laboriosam!
      <div slot="footer">
        <Button type="link" active icon="arrow-right" icon-position="right">
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

export default {
  name: 'App',
  components: {
    Button,
    Card,
    Checkbox,
    MantText,
    Dropdown,
    DropdownItem,
    Input
  }
}
</script>

<style lang="scss">
@import url('./app.scss');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
html {
  background-color: $bg-color;
}
::selection {
  background-color: darken($color: $text-color, $amount: 30);
}
</style>
