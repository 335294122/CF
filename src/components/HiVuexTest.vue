<template>
  <div>
    <h1>Vuex Test Component</h1>
    <div class="content">
      <hr>

      <p>spend: ${{ $store.state.spend }}</p>
      <p>money: ${{ money }}</p>
      <p>commission: ${{ $store.getters.commission | twoNum }} = {{ $store.state.spend }} * 20%</p>
      <p>final money: ${{ finalMoney }} = {{ money }} - {{ $store.state.spend }} + {{ $store.getters.commission | twoNum }}</p>


      <hr>
      <h2>大于25岁的</h2>
      <ul>
        <li v-for="item in $store.state.students" :key="item.id">
          {{ item.id }} -> {{ item.name }} - {{ item.age }}
        </li>
      </ul>

      <hr>
      <input type="text" name="id" v-model="student.id" placeholder="place student id" />
      <input type="text" name="name" v-model="student.name" placeholder="place student name" />
      <input type="text" name="age" v-model="student.age" placeholder="place student age" />
      <br><br>直接调用data数据，会动态改变
      <button @click="addStudentMsg">insert a student message</button><br>
      <br>方法内let 新变量，再引data数据，不会动态更新<br>
      <button @click="addStudentMsg2">insert a student message</button><br><br>

      
      <hr>
      <h2>大于20岁的</h2>
      {{ $store.getters.screen }}

      <hr>
      <h2>大于20岁有多少人</h2>
      {{ $store.getters.countScreen }}

      <hr>
      <h2>大于25岁的</h2>
      {{ $store.getters.screen2(30) }}



    </div>
  </div>
</template>

<script>
export default {
  name: "HiVuexTest",
  data: function () {
    return {
      money: 20000,
      student: {id: '', name: '', age: ''}
    }
  },
  computed: {
    finalMoney () {
      return this.money - this.$store.state.spend + this.$store.getters.commission
    }
  },
  methods: {
    addStudentMsg () {
      return this.$store.commit('insertStudent', this.student)
    },
    addStudentMsg2 () {
      let info = {
        id: this.student.id,
        name: this.student.name,
        age: this.student.age
      }
      return this.$store.commit('insertStudent', info)
    }
  },
  filters: {
    twoNum (price) {
      return price.toFixed(2)
    }
  }
}
</script>

<style scoped>
.content {
  padding-left: 20px;
  font-size: 20px;
  text-align: left;
}
</style>