
import InputField from '../InputField';

export default {
  name: 'ToggleButtons',
  components: {
    InputField,
  },
  data() {
    let value;
    const options = this.$props.options || [];
    if (options.length === 0) {
      value = '';
    }
    let selected =
      options.findIndex(option => option.value === this.$props.value);
    if (selected === -1) {
      selected = 0;
      this.onClick(options[selected].value);
    }
    ({ value } = options[selected]);
    return {
      selected: value,
    };
  },
  props: [
    'name', 'value', 'options', 'label', 'click',
  ],
  methods: {
    onClick(value) {
      this.$emit('click', { name: this.name, value });
    },
  },
};
