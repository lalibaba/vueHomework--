<template>
  <div>
    <label>
      姓名:
      <!-- <h1>{{ value }}</h1> -->
      <input
        type="text"
        :value="value"
        @input="$emit('input', $event.target.value)"
      />
    </label>
  </div>
</template>

<script>
export default {
  name: 'DemoBaseInput',

  data() {
    return {}
  },
  props: {
    value: String,
  },
  mounted() {},
  methods: {},
}
</script>
