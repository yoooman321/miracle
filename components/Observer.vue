<template lang="pug">
  .observer
</template>
<script>
export default {
  name: 'Observer',
  data () {
    return {
      observer: null
    }
  },
  mounted () {
    this.observer = new IntersectionObserver(([entry]) => {
      if (entry && entry.isIntersecting) {
        this.$emit('getVideoList')
      }
    })
    this.observer.observe(this.$el)
  }
}
</script>
