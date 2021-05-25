<template>
  <v-select :items="items" :placeholder="placeholder" v-model="model" />
  <!-- <v-select
    @focus="atFocus"
    @blur="atBlur"
    dense
    :disabled="disabled"
    hide-details="auto"
    :label="label || localLabel"
    :placeholder="placeholder"
    v-model="model"
    :rules="[(v) => inList(v) || 'Required', ...rules]"
    :error-messages="errorMessages"
  /> -->
</template>

<script>
export default {
  name: "Select",
  props: {
    items: { type: Array, required: true, default: () => [1, 2] },
    placeholder: { type: String, default: "" },
    onChange: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      oldValue: this.value,
    };
  },
  computed: {
    model: {
      get() {
        return this.value;
      },
      set(v) {
        this.onChange(v, this.oldValue);
      },
    },
  },
};
// export default {
//   name: 'Select',
//   props: {
//     disabled: {
//       type: Boolean,
//       default: false,
//     },
//     items: { type: Array, required: true, default: () => [] },
//     onChange: {
//       type: Function,
//       required: true,
//     },
//     label: { type: String },
//     placeholder: { type: String, default: '' },
//     rules: { type: Array, default: () => [] },
//     commonRules: { type: Array, default: () => undefined },
//     value: { type: null, required: true }, // match all types
//   },
//   data() {
//     return {
//       oldValue: this.value,
//       localLabel: '',
//     };
//   },
//   methods: {
//     inList(value) {
//       const { items } = this;
//       return items.map(({ value }) => value).indexOf(value) !== -1;
//     },
//     atFocus() {
//       if (this.model || this.model === 0) {
//         this.localLabel = this.placeholder;
//       }
//     },
//     atBlur() {
//       this.localLabel = '';
//     },
//   },
//   computed: {
//     model: {
//       get() {
//         return this.value;
//       },
//       set(v) {
//         this.onChange(v, this.oldValue);
//       },
//     },
//     errorMessages() {
//       const { commonRules, value } = this;
//       if (!commonRules) {
//         return undefined;
//       }
//       const err = commonRules
//         .map((func) => {
//           return func(value);
//         })
//         .filter((res) => typeof res === 'string');
//       return err.length === 0 ? undefined : err;
//     },
//   },
//   watch: {
//     model: function(value) {
//       this.oldValue = value;
//     },
//   },
// };
</script>

<style lang="scss" scoped>
.v-select {
  font-size: 0.9rem;
  margin: 4px 0;
}
</style>
